"use strict";
// If your plugin extends types from another plugin, you should import the plugin here.
Object.defineProperty(exports, "__esModule", { value: true });
// To extend one of Hardhat's types, you need to import the module where it has been defined, and redeclare it.
require("hardhat/types/config");
require("hardhat/types/runtime");
// declare module "hardhat/types/runtime" {
//   // This is an example of an extension to the Hardhat Runtime Environment.
//   // This new field will be available in tasks' actions, scripts, and tests.
//   export interface HardhatRuntimeEnvironment {
//     example: ExampleHardhatRuntimeEnvironmentField;
//   }
// }
//# sourceMappingURL=type-extensions.js.map