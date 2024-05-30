import path from 'path';
import { CoverageReport } from 'monocart-coverage-reports';

const inputDir = [
    './coverage-reports/unit/raw',
    './coverage-reports/e2e/raw'
];

const coverageOptions = {
    name: 'Merged Coverage Report',
    inputDir,
    outputDir: './coverage-reports/merged',

    // filter for both unit and e2e
    // entryFilter: {
    //     '**/node_modules/**': false,
    //     '**/*': true
    // },
    // sourceFilter: {
    //     '**/node_modules/**': false,
    //     '**/src/**': true
    // },

    sourcePath: (filePath, info) => {
        // Unify the file path for the same files
        // For example, the file index.js has different paths:
        // unit: unit-dist/src/index.js
        // e2e: e2e-dist/src/index.js
        // return filePath.replace("unit-dist/", "").replace("e2e-dist/", "")

        // console.log(filePath, info);

        // add src dir
        if (!filePath.includes('/') && info.distFile) {
            const dir = path.dirname(info.distFile).replace('localhost-5173/', '');
            return `${dir}/${filePath}`;
        }

        return filePath;
    },

    reports: [
        ['v8'],
        ['console-details']
    ],

    onEnd: () => {
        // remove the raw files if it useless
        // inputDir.forEach((p) => {
        //     fs.rmSync(p, {
        //         recursive: true,
        //         force: true
        //     });
        // });
    }
};

await new CoverageReport(coverageOptions).generate();
