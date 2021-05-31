/*
 * Copyright (c) 2018, Gnock
 * Copyright (c) 2018, The Masari Project
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import {VueClass, VueRequireFilter, VueVar} from "../lib/numbersLab/VueAnnotate";
import {DependencyInjectorInstance} from "../lib/numbersLab/DependencyInjector";
import {Wallet} from "../model/Wallet";
import {DestructableView} from "../lib/numbersLab/DestructableView";
import {Constants} from "../model/Constants";
import {AppState} from "../model/AppState";
import {Transaction, TransactionIn} from "../model/Transaction";
import {VueFilterSatoshis, VueFilterFiat} from "../filters/Filters";
import {Storage} from "../model/Storage";
import {Currency} from "../model/Currency";

let wallet : Wallet = DependencyInjectorInstance().getInstance(Wallet.name,'default', false);
let blockchainExplorer = DependencyInjectorInstance().getInstance(Constants.BLOCKCHAIN_EXPLORER);

@VueRequireFilter('satoshis', VueFilterSatoshis)
@VueRequireFilter('fiat', VueFilterFiat)

class AccountView extends DestructableView{
	@VueVar([]) transactions !: Transaction[];
	@VueVar(0) walletAmount !: number;
	@VueVar(0) walletAmountCurrency !: number;
	@VueVar(0) unlockedWalletAmount !: number;

	@VueVar(0) currentScanBlock !: number;
	@VueVar(0) blockchainHeight !: number;
	@VueVar(Math.pow(10, config.coinUnitPlaces)) currencyDivider !: number;

	@VueVar(0) geckoCurrentPrice !: any;
	@VueVar(0) currency !: string;

	intervalRefresh : number = 0;
	intervalPrice: number = 0;

	constructor(container : string){
		super(container);
		let self = this;
		AppState.enableLeftMenu();
		this.intervalRefresh = setInterval(function(){
			self.refresh();
		}, 1000);
		this.intervalPrice = setInterval(() => {
			self.refreshPrice();
		}, 60 * 1000);
		this.refresh();
		this.refreshPrice();
		Currency.getCurrency().then((currency: string) => {
			this.currency = currency;
		});
	}

	destruct(): Promise<void> {
		clearInterval(this.intervalRefresh);
		clearInterval(this.intervalPrice);
		return super.destruct();
	}

	refresh(){
		let self = this;
		blockchainExplorer.getHeight().then(function(height : number){
			self.blockchainHeight = height;
		});

		this.refreshWallet();
	}

	moreInfoOnTx(transaction : Transaction){
		let explorerUrlHash = config.testnet ? config.testnetExplorerUrlHash : config.mainnetExplorerUrlHash;
		let explorerUrlBlock = config.testnet ? config.testnetExplorerUrlBlock : config.mainnetExplorerUrlBlock;
		let transFee = 100000000; //TODO
		
		let feesHtml = '';
		if(transaction.getAmount() < 0)
			feesHtml = `<div>`+i18n.t('accountPage.txDetails.feesOnTx')+`: `+(transFee / Math.pow(10, config.coinUnitPlaces))+`</a> `+config.coinSymbol+`</div>`;
		
		let paymentId = '';
		if(transaction.paymentId !== ''){
			paymentId = `<div>`+i18n.t('accountPage.txDetails.paymentId')+`: `+transaction.paymentId+`</a></div>`;
		}

		let unlockStatus = '';let unlckStatus = '';let transHeight = transaction.blockHeight + config.txMinConfirms;
		let actualHeight = this.currentScanBlock;

		if(transHeight >= actualHeight) {
			unlckStatus = (((transHeight-actualHeight)-11)*-1).toString()+'/'+config.txMinConfirms+' Confirmations';
		} else {
			unlckStatus = config.txMinConfirms+'/'+config.txMinConfirms+' Confirmations';
		}
		unlockStatus = `<div>`+i18n.t('accountPage.txDetails.unlockStatus')+`: `+unlckStatus+`</a></div>`;

		let txPrivKeyMessage = '';
		let txPrivKey = wallet.findTxPrivateKeyWithHash(transaction.hash);
		if(txPrivKey !== null){
			txPrivKeyMessage = `<div>`+i18n.t('accountPage.txDetails.txPrivKey')+`: `+txPrivKey+`</a></div>`;
		}

		swal({
			title:i18n.t('accountPage.txDetails.title'),
			html:`
<div class="tl" >
	<div>`+i18n.t('accountPage.txDetails.txHash')+`: <a href="`+explorerUrlHash.replace('{ID}', transaction.hash)+`" target="_blank">Check on Explorer</a></div>
	`+paymentId+`
	`+unlockStatus+`
	`+feesHtml+`
	`+txPrivKeyMessage+`
	<div>`+i18n.t('accountPage.txDetails.blockHeight')+`: <a href="`+explorerUrlBlock.replace('{ID}', ''+transaction.blockHeight)+`" target="_blank">`+transaction.blockHeight+`</a></div>
</div>`
		});
	}

	refreshWallet(){
		this.currentScanBlock = wallet.lastHeight;
		this.walletAmount = wallet.amount;
		this.unlockedWalletAmount = wallet.unlockedAmount(this.currentScanBlock);
		if(wallet.getAll().length+wallet.txsMem.length !== this.transactions.length) {
			this.transactions = wallet.txsMem.concat(wallet.getTransactionsCopy().reverse());
		}
	}

	refreshPrice() {
		let self = this;
		Currency.getCurrency().then((currency: string) => {
			this.currency = currency;
		});

		self.getCoin('qwertycoin').then((json: any) => {
			let temp = json;
			self.geckoCurrentPrice = temp;
		})
	}

	getCoin(coin: string): Promise<any> {
		if (Constants.DEBUG_STATE) {
			console.log(`Starting to fetch ${coin} market_data.`);
		}

		return fetch(`https://api.coingecko.com/api/v3/coins/${coin}`)
			.then(res => res.json())
	}
}

if(wallet !== null && blockchainExplorer !== null)
	new AccountView('#app');
else
	window.location.href = '#index';