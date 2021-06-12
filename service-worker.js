"use strict";
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
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');
workbox.precaching.precacheAndRoute([
  {
    "url": "api.html",
    "revision": "aba02f2d64e706cc7b618ec829e885a9"
  },
  {
    "url": "api.js",
    "revision": "b9aa3369f52d7ba09543caa3b7a70fc4"
  },
  {
    "url": "assets/css/bootstrap-grid.css",
    "revision": "29a16726680195da6a8c78f234880607"
  },
  {
    "url": "assets/css/bootstrap-reboot.css",
    "revision": "7dc6d49bddb587f471ed62358e743727"
  },
  {
    "url": "assets/css/bootstrap.css",
    "revision": "d59729439a203fc474f5677b8d18d8bb"
  },
  {
    "url": "assets/css/font-awesome.css",
    "revision": "c495654869785bc3df60216616814ad1"
  },
  {
    "url": "assets/css/font-awesome.min.css",
    "revision": "269550530cc127b6aa5a35925a7de6ce"
  },
  {
    "url": "assets/css/main.css",
    "revision": "1faef07c43e8c6cbe43b0d67f96830cf"
  },
  {
    "url": "assets/img/coin_white.png",
    "revision": "a8fa990b916cccd6a52f37cca7b912fd"
  },
  {
    "url": "assets/img/favicon.ico",
    "revision": "c7b964a195f0bfd935b92e3a0dbaa4d8"
  },
  {
    "url": "assets/img/icons/icon-128x128.png",
    "revision": "12a0bd25434f8d5870e80a576cc4e8fb"
  },
  {
    "url": "assets/img/icons/icon-144x144.png",
    "revision": "b5c2f1ad83db783fa59b0e847ae85447"
  },
  {
    "url": "assets/img/icons/icon-152x152.png",
    "revision": "60db3d4d58adfcb85fecc5be192e88e2"
  },
  {
    "url": "assets/img/icons/icon-192x192.png",
    "revision": "3716b7a3a8b6ca067c037e5ea4d84a71"
  },
  {
    "url": "assets/img/icons/icon-256x256.png",
    "revision": "5deceb64d41d8168ce16ac90fe8c4e24"
  },
  {
    "url": "assets/img/icons/icon-402x402.png",
    "revision": "667c66c7a08ae252d8435770fc71808b"
  },
  {
    "url": "assets/img/landing/qclassic.jpg",
    "revision": "958e189433d9c1212561d067d3a2ecfc"
  },
  {
    "url": "assets/img/landing/qwc_morepurple.png",
    "revision": "46b05b23611133cec35e9cb28c0bdc4b"
  },
  {
    "url": "assets/img/logo_vertical.png",
    "revision": "3f510c5b310b7b8ffc06f46a73ff9b96"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "3fee9217cc613f06ccf3b7d9405a8379"
  },
  {
    "url": "assets/img/logoQrCode.jpg",
    "revision": "04fc5af7e5b46ca607a53bb88c557da1"
  },
  {
    "url": "assets/img/logoQrCode.png",
    "revision": "9b773e658d735d8655d27af3cdcd873c"
  },
  {
    "url": "assets/img/qclassic.jpg",
    "revision": "958e189433d9c1212561d067d3a2ecfc"
  },
  {
    "url": "config.js",
    "revision": "36fcd7127e51b7a0151bc60dbd4cb788"
  },
  {
    "url": "d/vue-i118n.js",
    "revision": "85fd5089c3278f8f544a3691fd38f49b"
  },
  {
    "url": "filters/Filters.js",
    "revision": "c51435591df531a9cb3d261d71b670ca"
  },
  {
    "url": "index.html",
    "revision": "4cc9b64194f0bffa23d191559a398e72"
  },
  {
    "url": "index.js",
    "revision": "0f52abd5a55f3f577d3a5c876b015490"
  },
  {
    "url": "lib/axios.js",
    "revision": "b6c4445ed786f638d8183e1d70ca0c72"
  },
  {
    "url": "lib/base58.js",
    "revision": "3d523c0162d6911fd675c9ed1b7389a8"
  },
  {
    "url": "lib/biginteger.js",
    "revision": "f5a873c5716a9d3481501cad3f3e5ca7"
  },
  {
    "url": "lib/cn_utils_native.js",
    "revision": "94d65c88ed19007552b6593fa6fc68d1"
  },
  {
    "url": "lib/crypto.js",
    "revision": "d51c76b2e08308f8cca1f68c5c298a6f"
  },
  {
    "url": "lib/decoder.min.js",
    "revision": "67a582366edae346b7aa0fb14be03348"
  },
  {
    "url": "lib/FileSaver.min.js",
    "revision": "e8fdc5ad52084fa417f1fec6b6de3b29"
  },
  {
    "url": "lib/jquery-3.2.1.min.js",
    "revision": "c9f5aeeca3ad37bf2aa006139b935f0a"
  },
  {
    "url": "lib/jspdf.min.js",
    "revision": "27385efc6fa2eccc9dde7da0081b1a98"
  },
  {
    "url": "lib/kjua-0.1.1.min.js",
    "revision": "ca69d4f40f8c17ff592123dc35c1ea18"
  },
  {
    "url": "lib/kjua.min.js",
    "revision": "1383224c1213771c21c1128a93f0726c"
  },
  {
    "url": "lib/mnemonic.js",
    "revision": "f30940176ec1e71b5a5f0c9b784a98b9"
  },
  {
    "url": "lib/nacl-fast-cn.js",
    "revision": "1fe1387eb865d9e843697a9d315d95b1"
  },
  {
    "url": "lib/nacl-fast.js",
    "revision": "a9c5b4bca7d2aa621a86d5085ce65d03"
  },
  {
    "url": "lib/nacl-fast.min.js",
    "revision": "72444801c9affc1654ef12860c67e976"
  },
  {
    "url": "lib/nacl-util.min.js",
    "revision": "c7b843b9e9b5aad102c855c600c7edc8"
  },
  {
    "url": "lib/nacl.js",
    "revision": "bf72b0a25fc3edf0c1a638aa43642714"
  },
  {
    "url": "lib/nacl.min.js",
    "revision": "d8eaf281c8890a60ebe82840456edc33"
  },
  {
    "url": "lib/numbersLab/Context.js",
    "revision": "ebb2aae3a749741226613dd291cc2839"
  },
  {
    "url": "lib/numbersLab/DependencyInjector.js",
    "revision": "33e8be69249a6f936449c26194579096"
  },
  {
    "url": "lib/numbersLab/DestructableView.js",
    "revision": "130f58a50d4641ce84928ccbacf1a965"
  },
  {
    "url": "lib/numbersLab/Logger.js",
    "revision": "8c3e763e02e441dd6da0bb63df99dbcc"
  },
  {
    "url": "lib/numbersLab/Observable.js",
    "revision": "d3bede42dfc41a78b4d50647bdb74646"
  },
  {
    "url": "lib/numbersLab/Router.js",
    "revision": "5b22b2a668f88a5641786aefdc2d842e"
  },
  {
    "url": "lib/numbersLab/VueAnnotate.js",
    "revision": "a92f094deee836b6efa5de2c575a250a"
  },
  {
    "url": "lib/polyfills/core.min.js",
    "revision": "6ff449122255e7a91fb884ea7016c601"
  },
  {
    "url": "lib/polyfills/crypto.js",
    "revision": "13647291f45a582eee64e000b09d9567"
  },
  {
    "url": "lib/polyfills/textEncoding/encoding-indexes.js",
    "revision": "50f27403be5972eae4831f5b69db1f80"
  },
  {
    "url": "lib/polyfills/textEncoding/encoding.js",
    "revision": "cfc731bd62baec239b2c4daf33b5e810"
  },
  {
    "url": "lib/require.js",
    "revision": "bebd45d1f406bbe61424136b03e50895"
  },
  {
    "url": "lib/sha3.js",
    "revision": "9f298ac7e4ee707645a8d711f3ed916b"
  },
  {
    "url": "lib/sweetalert2.js",
    "revision": "4b69bbd418e85d6efdac5630ed40d76e"
  },
  {
    "url": "lib/vue-i18n.js",
    "revision": "58527051a1e3829171f96b6cc27d088f"
  },
  {
    "url": "lib/vue.min.js",
    "revision": "44487223aebf303c2b81ac5ac8b8b279"
  },
  {
    "url": "manifest.json",
    "revision": "2656dfb7b2c59c546264291f54554ffa"
  },
  {
    "url": "model/AppState.js",
    "revision": "3489a849378cdd5731d4bc53b941a08f"
  },
  {
    "url": "model/blockchain/BlockchainExplorer.js",
    "revision": "d6d40c2136d1a323875a08cd9fdf5bd5"
  },
  {
    "url": "model/blockchain/BlockchainExplorerRPCDaemon.js",
    "revision": "9e5b58b771fb06f4f9a0798b57a20e0c"
  },
  {
    "url": "model/Cn.js",
    "revision": "422269b42cda53245761b55137b05ef2"
  },
  {
    "url": "model/CoinUri.js",
    "revision": "f30c2f46071b31472ef478430f538fde"
  },
  {
    "url": "model/Constants.js",
    "revision": "720081871f035892eb06b7b9ce64177a"
  },
  {
    "url": "model/Currency.js",
    "revision": "1e79a733e247c025e27ae2a8846dcb01"
  },
  {
    "url": "model/Elections.js",
    "revision": "2322c9fabf8c18a4a0bfd16facfb73f3"
  },
  {
    "url": "model/KeysRepository.js",
    "revision": "79eacb886a78f61bee2a939c19b58491"
  },
  {
    "url": "model/MathUtil.js",
    "revision": "9a8987d5a4d33a061522b3b2ae2d408e"
  },
  {
    "url": "model/MessageLib.js",
    "revision": "0cbf05a8abf0c58d4a7ae9d52ce0e04e"
  },
  {
    "url": "model/Mnemonic.js",
    "revision": "85cdf5b9c52ef2034dfe5f9d4647df94"
  },
  {
    "url": "model/MnemonicLang.js",
    "revision": "cbdebe606a7b33e5d6d53e14c7e08504"
  },
  {
    "url": "model/Nfc.js",
    "revision": "5b29d028a8df1e0da708e4cb5d81f832"
  },
  {
    "url": "model/Notifications.js",
    "revision": "0cbf05a8abf0c58d4a7ae9d52ce0e04e"
  },
  {
    "url": "model/Password.js",
    "revision": "f30e0758fe175ce2f57f9c734c951160"
  },
  {
    "url": "model/QRReader.js",
    "revision": "61adee7615df4aee7e560556147f8b1d"
  },
  {
    "url": "model/Storage.js",
    "revision": "72ecb7c19827948fcc5839f9c524b8ac"
  },
  {
    "url": "model/Transaction.js",
    "revision": "d8aa2dc65b4eb5190e4bd385caffab86"
  },
  {
    "url": "model/TransactionsExplorer.js",
    "revision": "13f91c64292d5758f2f60536152032f3"
  },
  {
    "url": "model/Translations.js",
    "revision": "ee765bfb79c8b6f1a6991d2e0f161e84"
  },
  {
    "url": "model/Wallet.js",
    "revision": "9950527768b131575d39fc9e43ae100d"
  },
  {
    "url": "model/WalletRepository.js",
    "revision": "1576f9968dbaf16c91671df385d032ba"
  },
  {
    "url": "model/WalletWatchdog.js",
    "revision": "cacd80f1430da963058397d588fde765"
  },
  {
    "url": "pages/account.html",
    "revision": "a69a6b3c498eae01553e7a3fe7298079"
  },
  {
    "url": "pages/account.js",
    "revision": "18e3120328c66f14a323109d235c3a37"
  },
  {
    "url": "pages/addContact.html",
    "revision": "a326cb290ed33034d1ae6928c5c13b36"
  },
  {
    "url": "pages/addContact.js",
    "revision": "858d597630a4642a568b3c087ed931c8"
  },
  {
    "url": "pages/changeWalletPassword.html",
    "revision": "cf44f48e8c60b3c2e19e22e825a89724"
  },
  {
    "url": "pages/changeWalletPassword.js",
    "revision": "ad9dc179bf08935fb86d81a6e0c047cb"
  },
  {
    "url": "pages/contactPage.html",
    "revision": "001ac9f8e244eec82f41fc6035bc8d24"
  },
  {
    "url": "pages/contactPage.js",
    "revision": "d4aae0d66b84074bcb44ac0041c60a54"
  },
  {
    "url": "pages/createWallet.html",
    "revision": "413543ffbf94919ce6b5be51d309bc55"
  },
  {
    "url": "pages/createWallet.js",
    "revision": "9189184d3f9ff82f456cdce7188c543b"
  },
  {
    "url": "pages/disconnect.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "pages/disconnect.js",
    "revision": "a2771001f905e32049f0301329387401"
  },
  {
    "url": "pages/donate.html",
    "revision": "d3cc7fc12d11479902fb3405c6368e84"
  },
  {
    "url": "pages/donate.js",
    "revision": "17f263a9cde6cfafadfdb7eb4f3737a3"
  },
  {
    "url": "pages/electionDetails.html",
    "revision": "9f5002cd1a0bb3f05f2096790cb601c7"
  },
  {
    "url": "pages/electionDetails.js",
    "revision": "5fa1064d32bc5a61d2b363f505a55a49"
  },
  {
    "url": "pages/elections.html",
    "revision": "6355ae556949a7706d77c45750d472db"
  },
  {
    "url": "pages/elections.js",
    "revision": "b0c560ace8496dad45c779c5763ec6c0"
  },
  {
    "url": "pages/export.html",
    "revision": "0829e8dcf1a904dbbe1be305abf85900"
  },
  {
    "url": "pages/export.js",
    "revision": "a5d230dd4e4d55920639ae2bbbc906dc"
  },
  {
    "url": "pages/import.html",
    "revision": "45f5c149574bd7cf2bc91794c4adee55"
  },
  {
    "url": "pages/import.js",
    "revision": "44ea2b901c09a46d4cd5a95e2370ae40"
  },
  {
    "url": "pages/importFromFile.html",
    "revision": "b824f9fc68ce358032faecd70b0e099b"
  },
  {
    "url": "pages/importFromFile.js",
    "revision": "3a48fec34ec257ba81a3faba893dddbb"
  },
  {
    "url": "pages/importFromKeys.html",
    "revision": "1388fc183805920f522c5cb26e3c2714"
  },
  {
    "url": "pages/importFromKeys.js",
    "revision": "2dff95cb17634d7b2f97126aaec73f6c"
  },
  {
    "url": "pages/importFromMnemonic.html",
    "revision": "367f09264b3c3008ee0eda752d4a0ea7"
  },
  {
    "url": "pages/importFromMnemonic.js",
    "revision": "4cf33fcd9f330a2f649d8235b180b41b"
  },
  {
    "url": "pages/importFromQr.html",
    "revision": "172fc490fa9a97ed146895e0f35aeedc"
  },
  {
    "url": "pages/importFromQr.js",
    "revision": "b25176dac7117d2fbf268f006a7f7303"
  },
  {
    "url": "pages/index.html",
    "revision": "34f288b740b8ccf903abdcfa5e0f1c3d"
  },
  {
    "url": "pages/index.js",
    "revision": "a2056fd748306a4caaede3b4f1e717ed"
  },
  {
    "url": "pages/messages.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "pages/messages.js",
    "revision": "706727b6f9ce5387c644ec5ae5497923"
  },
  {
    "url": "pages/network.html",
    "revision": "7f654a92ab58858dad44367c3084f2e9"
  },
  {
    "url": "pages/network.js",
    "revision": "1ff4616adf824c96b8879a2e30911cac"
  },
  {
    "url": "pages/privacyPolicy.html",
    "revision": "7c979d76232c104c400dc60a95e856a2"
  },
  {
    "url": "pages/privacyPolicy.js",
    "revision": "2d6c08d5981265293d29bce566ab2bdb"
  },
  {
    "url": "pages/receive.html",
    "revision": "03a8854fc21dcd40a88a8d55a6eca392"
  },
  {
    "url": "pages/receive.js",
    "revision": "bfa94c50019425cd219b1245f9d29cbe"
  },
  {
    "url": "pages/selfxss.html",
    "revision": "f7ca9d7aa4cec3fe58bfa61360f00e51"
  },
  {
    "url": "pages/selfxss.js",
    "revision": "9e6e4ff54cf09df550c80b3b2310b055"
  },
  {
    "url": "pages/send.html",
    "revision": "48d63293b2dfc035171512af2cb83fda"
  },
  {
    "url": "pages/send.js",
    "revision": "15986d817f0ed13a7febb45d40e087d6"
  },
  {
    "url": "pages/settings.html",
    "revision": "83eb141dbdf5f464db6a246512a74535"
  },
  {
    "url": "pages/settings.js",
    "revision": "b6a30d9571f4a17554341aed286ccf01"
  },
  {
    "url": "pages/support.html",
    "revision": "1b14d12415aa1bef868c782fecfc4311"
  },
  {
    "url": "pages/support.js",
    "revision": "f8135fd2b9c7f8744750ae6520c0fabf"
  },
  {
    "url": "pages/termsOfUse.html",
    "revision": "a0b3643188615732d0f2d73d643d2e32"
  },
  {
    "url": "pages/termsOfUse.js",
    "revision": "db3af3ca3c81ead32a62ac01c84a1608"
  },
  {
    "url": "providers/BlockchainExplorerProvider.js",
    "revision": "72a914335b6c60f6a5d1a94dce6060ae"
  },
  {
    "url": "service-worker-raw.js",
    "revision": "47711885594600fb63e07580fa331c04"
  },
  {
    "url": "translations/ar.json",
    "revision": "f1abef6d04ee1d82d7a105bb89641945"
  },
  {
    "url": "translations/br.json",
    "revision": "42fb319675da98d2ec145f55c092b62f"
  },
  {
    "url": "translations/de.json",
    "revision": "d82ac758dc0f4035b75378da03380e4a"
  },
  {
    "url": "translations/en.json",
    "revision": "669ff022ed4c5a3b0d7134e34d305ddf"
  },
  {
    "url": "translations/es.json",
    "revision": "840a79931566b43d531c4571525f6c04"
  },
  {
    "url": "translations/fa.json",
    "revision": "3d7e9f237c0632fa60b92984bdfeff61"
  },
  {
    "url": "translations/fr.json",
    "revision": "77f34ecce4d06cb6e600df79e46e8db9"
  },
  {
    "url": "translations/gr.json",
    "revision": "7bb2abe1d02cd93a7dddd587c1c4e2f6"
  },
  {
    "url": "translations/he.json",
    "revision": "b7ebd5700c1c45e97119debe8b716af5"
  },
  {
    "url": "translations/hi.json",
    "revision": "828af97e8d0be1741d33fd365f071cd9"
  },
  {
    "url": "translations/hu.json",
    "revision": "8fa602ca9b5793053c63d9bd0ed7769b"
  },
  {
    "url": "translations/it.json",
    "revision": "3fd759761faad41bdc2c8277f37ad7fe"
  },
  {
    "url": "translations/ja.json",
    "revision": "542b321b9191979accc38bdb7c10949c"
  },
  {
    "url": "translations/ko.json",
    "revision": "9e341dbe45dfe507956aaec71ffa04b1"
  },
  {
    "url": "translations/pk.json",
    "revision": "8147933de8b704a2e318edb0c86ceae2"
  },
  {
    "url": "translations/pl.json",
    "revision": "3186400e37655e03713a59f5bc1b4e3d"
  },
  {
    "url": "translations/pt.json",
    "revision": "82b217b06f06832117686990c6af6a5f"
  },
  {
    "url": "translations/ro.json",
    "revision": "37c171659130a0a41d06e904c484f0e8"
  },
  {
    "url": "translations/ru.json",
    "revision": "701c6a79e467fd2d94027af0994db475"
  },
  {
    "url": "translations/sr.json",
    "revision": "b75778f1ff72b4db0a7dd7da9112fcf9"
  },
  {
    "url": "translations/tr.json",
    "revision": "132e453921ccd924f734594691525d60"
  },
  {
    "url": "translations/uk.json",
    "revision": "5fc6ee7f66d0ab090916543d878a403f"
  },
  {
    "url": "translations/vn.json",
    "revision": "310d477e53d0d2c0217683c5cae1ce4e"
  },
  {
    "url": "translations/zh.json",
    "revision": "05d137d8c257b7387617762d63c038cd"
  },
  {
    "url": "utils/Url.js",
    "revision": "9bc2c6a7dcb4c4340e8f61f845b95e15"
  },
  {
    "url": "workers/TransferProcessing.js",
    "revision": "620e75667fd98fbe370672d30274b56e"
  },
  {
    "url": "workers/TransferProcessingEntrypoint.js",
    "revision": "2a42b5b92829abf98abfdd46a3751232"
  }
]);
self.addEventListener('message', function (event) {
    if (!event.data) {
        return;
    }
    switch (event.data) {
        case 'force-activate':
            self.skipWaiting();
            self.clients.claim();
            self.clients.matchAll().then(function (clients) {
                clients.forEach(function (client) { return client.postMessage('reload-window-update'); });
            });
            break;
        default:
            // NOOP
            break;
    }
});
