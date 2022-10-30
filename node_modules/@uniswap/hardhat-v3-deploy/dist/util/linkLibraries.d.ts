export declare const linkLibraries: ({ bytecode, linkReferences, }: {
    bytecode: string;
    linkReferences: {
        [fileName: string]: {
            [contractName: string]: {
                length: number;
                start: number;
            }[];
        };
    };
}, libraries: {
    [libraryName: string]: string;
}) => string;
//# sourceMappingURL=linkLibraries.d.ts.map