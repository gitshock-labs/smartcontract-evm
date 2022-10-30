"use strict";
/*
https://github.com/Uniswap/uniswap-v3-periphery/blob/e3fb908f1fbc72f1b1342c983c9ad756448c3bba/test/shared/constants.ts
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.TICK_SPACINGS = exports.FeeAmount = exports.MaxUint128 = void 0;
const ethers_1 = require("ethers");
exports.MaxUint128 = ethers_1.BigNumber.from(2).pow(128).sub(1);
var FeeAmount;
(function (FeeAmount) {
    FeeAmount[FeeAmount["LOW"] = 500] = "LOW";
    FeeAmount[FeeAmount["MEDIUM"] = 3000] = "MEDIUM";
    FeeAmount[FeeAmount["HIGH"] = 10000] = "HIGH";
})(FeeAmount = exports.FeeAmount || (exports.FeeAmount = {}));
exports.TICK_SPACINGS = {
    [FeeAmount.LOW]: 10,
    [FeeAmount.MEDIUM]: 60,
    [FeeAmount.HIGH]: 200,
};
//# sourceMappingURL=constants.js.map