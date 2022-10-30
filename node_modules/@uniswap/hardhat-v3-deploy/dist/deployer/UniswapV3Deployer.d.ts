import { Signer, Contract } from "ethers";
export declare class UniswapV3Deployer {
    static deploy(actor: Signer): Promise<{
        [name: string]: Contract;
    }>;
    deployer: Signer;
    constructor(deployer: Signer);
    deployFactory(): Promise<Contract>;
    deployWETH9(): Promise<Contract>;
    deployRouter(factoryAddress: string, weth9Address: string): Promise<Contract>;
    deployNFTDescriptorLibrary(): Promise<Contract>;
    deployPositionDescriptor(nftDescriptorLibraryAddress: string, weth9Address: string): Promise<Contract>;
    deployNonfungiblePositionManager(factoryAddress: string, weth9Address: string, positionDescriptorAddress: string): Promise<Contract>;
    private deployContract;
}
//# sourceMappingURL=UniswapV3Deployer.d.ts.map