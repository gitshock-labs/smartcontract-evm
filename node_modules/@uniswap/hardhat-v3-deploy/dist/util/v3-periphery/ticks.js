"use strict";
/* https://github.com/Uniswap/uniswap-v3-periphery/blob/e3fb908f1fbc72f1b1342c983c9ad756448c3bba/test/shared/ticks.ts */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaxLiquidityPerTick = exports.getMaxTick = exports.getMinTick = void 0;
const ethers_1 = require("ethers");
const getMinTick = (tickSpacing) => Math.ceil(-887272 / tickSpacing) * tickSpacing;
exports.getMinTick = getMinTick;
const getMaxTick = (tickSpacing) => Math.floor(887272 / tickSpacing) * tickSpacing;
exports.getMaxTick = getMaxTick;
const getMaxLiquidityPerTick = (tickSpacing) => ethers_1.BigNumber.from(2)
    .pow(128)
    .sub(1)
    .div((exports.getMaxTick(tickSpacing) - exports.getMinTick(tickSpacing)) / tickSpacing + 1);
exports.getMaxLiquidityPerTick = getMaxLiquidityPerTick;
//# sourceMappingURL=ticks.js.map