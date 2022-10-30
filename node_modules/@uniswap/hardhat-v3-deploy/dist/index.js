"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("hardhat/config");
require("@nomiclabs/hardhat-ethers");
require("./type-extensions");
const cli_table3_1 = __importDefault(require("cli-table3"));
const UniswapV3Deployer_1 = require("./deployer/UniswapV3Deployer");
config_1.task("deploy-uniswap", "Deploys Uniswap V3 contracts", async (args, hre) => {
    const [actor] = await hre.ethers.getSigners();
    const contracts = await UniswapV3Deployer_1.UniswapV3Deployer.deploy(actor);
    const table = new cli_table3_1.default({
        head: ["Contract", "Address"],
        style: { border: [] },
    });
    for (const item of Object.keys(contracts)) {
        table.push([item, contracts[item].address]);
    }
    console.info(table.toString());
});
//# sourceMappingURL=index.js.map