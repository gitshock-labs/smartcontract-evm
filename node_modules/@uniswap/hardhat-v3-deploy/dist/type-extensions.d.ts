import "hardhat/types/config";
import "hardhat/types/runtime";
declare module "hardhat/types/config" {
    interface ProjectPathsUserConfig {
        newPath?: string;
    }
    interface ProjectPathsConfig {
        newPath: string;
    }
}
//# sourceMappingURL=type-extensions.d.ts.map