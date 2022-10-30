"use strict";
/* https://github.com/Uniswap/uniswap-v3-periphery/blob/710d51dca94e1feeee9b039a9bc4428ff80f7232/test/shared/tokenSort.ts */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortedTokens = exports.compareToken = void 0;
function compareToken(a, b) {
    return a.address.toLowerCase() < b.address.toLowerCase() ? -1 : 1;
}
exports.compareToken = compareToken;
function sortedTokens(a, b) {
    return compareToken(a, b) < 0 ? [a, b] : [b, a];
}
exports.sortedTokens = sortedTokens;
//# sourceMappingURL=tokenSort.js.map