require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */

const POLYGON_URL = process.env.POLYGON_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
module.exports = {
  solidity: "0.8.17",
  networks: {
    polygon:{
      url: POLYGON_URL,
      accounts:[PRIVATE_KEY]
    },
  },
    etherscan: {
      apiKey: process.env.POLYGONSCAN_API_KEY
    }
};
