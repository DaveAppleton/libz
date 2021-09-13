require("@nomiclabs/hardhat-waffle");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-etherscan");
 const fs = require('fs');
 const privatekey = fs.readFileSync(".secret").toString().trim();
 const monkey = fs.readFileSync(".mainnet").toString().trim();
 const xkey = fs.readFileSync(".banker").toString().trim();
 
 module.exports = {
   defaultNetwork: "hardhat",
   networks: {
     hardhat: {
     },
     matic: {
      url: "https://polygon-mainnet.infura.io/v3/a1a92273c03b4c9b83c5b2470058464f",
      accounts: [ monkey ]
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/2c954d83bea043f48d5ac6b70fa3b7b0",
      gasPrice: 8000000000,
      accounts: [ privatekey ]
    },
    goerli: {
      url: "https://goerli.infura.io/v3/2c954d83bea043f48d5ac6b70fa3b7b0",
      accounts: [ privatekey]
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/2c954d83bea043f48d5ac6b70fa3b7b0",
      accounts: [ xkey]
    },
    kovan: {
      url: "https://kovan.infura.io/v3/2c954d83bea043f48d5ac6b70fa3b7b0",
      accounts: [ privatekey]
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.7.5",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
      version :"0.6.6" ,
        settings : {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
     
   },
   paths: {
     sources: "./contracts",
     tests: "./test",
     cache: "./cache",
     artifacts: "./artifacts"
   },
   mocha: {
     timeout: 20000
   },
   etherscan: {
    apiKey: "EHDSNF378NFUS5EE21YJ1BTEKNNDD4Z9IZ"
  }

 }
 