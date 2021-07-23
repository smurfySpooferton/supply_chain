const HDWallet= require("@truffle/hdwallet-provider");
const fs = require('fs');
const infuraKey = fs.readFileSync("infura").toString().trim();
const mnemonic = fs.readFileSync("mnemonic").toString().trim();


module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*" // Match any network id
        },
        rinkeby: {
            provider: function() {
                return new HDWallet(mnemonic, "https://rinkeby.infura.io/v3/" + infuraKey);
            },
            network_id: 4,
            gas: 4500000,
            gasPrice: 10000000000,
        }
    },
    compilers: {
        solc: {
            version: "0.4.24"  // ex:  "0.4.20". (Default: Truffle's installed solc)
        }
    }
};