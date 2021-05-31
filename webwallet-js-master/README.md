![image](https://github.com/ProjectFTS/FTS_LOGO/blob/master/128128.png)
#### Master Build Status
[![Build Status](https://travis-ci.org/qwertycoin-org/webwallet-js.svg?branch=master)](https://travis-ci.org/qwertycoin-org/webwallet-js) [![Build status](https://ci.appveyor.com/api/projects/status/rvsgv9p8wbolxfkt/branch/master?svg=true)](https://ci.appveyor.com/project/Qwertycoin/webwallet-js-iiaw6/branch/master)

# FTS coin Web Wallet - Fully client-side
This web wallet is doing everything client-side to give the best privacy to users.
The API servers are currently only used to optimize the communication with the daemon and compress the blockchain.

# Security
**No keys, seeds, or sensitive data is sent to the server**  
If you find a potential security issue, please contact me so we/I can patch it as soon as possible.  
Encryption is done with a certified library, [Tweetnacl.Js.](https://github.com/dchest/tweetnacl-js)

# Features (non-exhaustive)
- Complete wallet sync without server side processing for security
- Receive/send history
- Mempool support to check incoming transfers
- Send coins - including QR code scanning and subaddress support
- Receive page to generate a custom QR code
- Import from private keys, mnemonic seed, or json file (exported by the wallet)
- Export private keys, mnemonic phrase, or json file (which include all the history)
- View only wallet
- Basic network stats

# How to compile & Deploy
The project is using Typescript as main language everything else (dependencies) is already included.

## Compilation
The first step will be to compile the typescript code into javascript code so browsers will be able to understand it. 
You also need to build some files that are dynamically generated like the manifest ...
This task is doable with :
```
npm install
nodejs ./node_modules/typescript/bin/tsc --project tsconfig.json
nodejs build.js
```
The first task install dependencies (typescript) and the text one compile the typescript code.
We are using a custom tsconfig file which is optimized for production.

## Deploy
All the content of the src directory needs to be exposed with a web-server.

## Change configuration
You will have to edit the file src/config.ts in order to change the API endpoint. 

That's all

### Contributors and thanks

#### Developers:
- gnock (main)
- cryptochangements
- davehlong (initial adaptation of PHP Api for Bytecoin based coins)
- aiwe (adapted for Bytecoin/CryptoNote from Monero codebase)
- nnian, ExploShot (adapted for Qwertycoin codebase)
- FTS Team (adapted for FTS Coin Codebase)
