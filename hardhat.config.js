require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@uniswap/hardhat-v3-deploy");
require("dotenv").config();

const { API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
     mumbai: {
       url: process.env.API_URL,
       accounts: [PRIVATE_KEY],
     },
   },
   solidity: {
    version: "0.8.13",
    settings: {
       optimizer: {
         enabled: true,
         runs: 200,
       },
     },
  },
   etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  mocha: {
    timeout: 300000,
  },
};