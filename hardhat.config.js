require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan")

require("hardhat-deploy")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/fwKtIFh-QFTgyHR_qgQPPbkN-Yd8DwY7`,
      accounts: ['0xa3408852751bb86a043caea2c34b9a534ca950adb3f6db79abd2c066a221d127']
    }
  },
  etherscan: {
    apiKey: {
      goerli: "TSACNFEE68VPFMTE9JXG9EJDI39EYIRHBX"
    },
    customChains: [
      {
        network: "goerli",
        chainId: 5,
        urls: {
          apiURL: "http://api-goerli.etherscan.io/api",  // https => http
          browserURL: "http://goerli.etherscan.io"
        }
      }
    ]
  },
};
