import { BigNumber } from 'ethers';
export declare const MaxUint128: BigNumber;
export declare enum FeeAmount {
    LOW = 500,
    MEDIUM = 3000,
    HIGH = 10000
}
export declare const TICK_SPACINGS: {
    [amount in FeeAmount]: number;
};
//# sourceMappingURL=constants.d.ts.map