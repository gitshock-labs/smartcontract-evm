"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapV3Deployer = void 0;
const ethers_1 = require("ethers");
const linkLibraries_1 = require("../util/linkLibraries");
const WETH9_json_1 = __importDefault(require("../util/WETH9.json"));
const artifacts = {
    UniswapV3Factory: require("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json"),
    SwapRouter: require("@uniswap/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json"),
    NFTDescriptor: require("@uniswap/v3-periphery/artifacts/contracts/libraries/NFTDescriptor.sol/NFTDescriptor.json"),
    NonfungibleTokenPositionDescriptor: require("@uniswap/v3-periphery/artifacts/contracts/NonfungibleTokenPositionDescriptor.sol/NonfungibleTokenPositionDescriptor.json"),
    NonfungiblePositionManager: require("@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json"),
    WETH9: WETH9_json_1.default,
};
// TODO: Should replace these with the proper typechain output.
// type INonfungiblePositionManager = Contract;
// type IUniswapV3Factory = Contract;
class UniswapV3Deployer {
    constructor(deployer) {
        this.deployer = deployer;
    }
    static async deploy(actor) {
        const deployer = new UniswapV3Deployer(actor);
        const weth9 = await deployer.deployWETH9();
        const factory = await deployer.deployFactory();
        const router = await deployer.deployRouter(factory.address, weth9.address);
        const nftDescriptorLibrary = await deployer.deployNFTDescriptorLibrary();
        const positionDescriptor = await deployer.deployPositionDescriptor(nftDescriptorLibrary.address, weth9.address);
        const positionManager = await deployer.deployNonfungiblePositionManager(factory.address, weth9.address, positionDescriptor.address);
        return {
            weth9,
            factory,
            router,
            nftDescriptorLibrary,
            positionDescriptor,
            positionManager,
        };
    }
    async deployFactory() {
        return await this.deployContract(artifacts.UniswapV3Factory.abi, artifacts.UniswapV3Factory.bytecode, [], this.deployer);
    }
    async deployWETH9() {
        return await this.deployContract(artifacts.WETH9.abi, artifacts.WETH9.bytecode, [], this.deployer);
    }
    async deployRouter(factoryAddress, weth9Address) {
        return await this.deployContract(artifacts.SwapRouter.abi, artifacts.SwapRouter.bytecode, [factoryAddress, weth9Address], this.deployer);
    }
    async deployNFTDescriptorLibrary() {
        return await this.deployContract(artifacts.NFTDescriptor.abi, artifacts.NFTDescriptor.bytecode, [], this.deployer);
    }
    async deployPositionDescriptor(nftDescriptorLibraryAddress, weth9Address) {
        const linkedBytecode = linkLibraries_1.linkLibraries({
            bytecode: artifacts.NonfungibleTokenPositionDescriptor.bytecode,
            linkReferences: {
                "NFTDescriptor.sol": {
                    NFTDescriptor: [
                        {
                            length: 20,
                            start: 1261,
                        },
                    ],
                },
            },
        }, {
            NFTDescriptor: nftDescriptorLibraryAddress,
        });
        return (await this.deployContract(artifacts.NonfungibleTokenPositionDescriptor.abi, linkedBytecode, [weth9Address], this.deployer));
    }
    async deployNonfungiblePositionManager(factoryAddress, weth9Address, positionDescriptorAddress) {
        return await this.deployContract(artifacts.NonfungiblePositionManager.abi, artifacts.NonfungiblePositionManager.bytecode, [factoryAddress, weth9Address, positionDescriptorAddress], this.deployer);
    }
    async deployContract(abi, bytecode, deployParams, actor) {
        const factory = new ethers_1.ContractFactory(abi, bytecode, actor);
        return await factory.deploy(...deployParams);
    }
}
exports.UniswapV3Deployer = UniswapV3Deployer;
//# sourceMappingURL=UniswapV3Deployer.js.map