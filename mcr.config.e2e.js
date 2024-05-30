// https://github.com/cenfun/monocart-coverage-reports

export default {
    // logging: 'debug',
    name: 'E2E Coverage Report',
    outputDir: './coverage-reports/e2e',

    reports: [
        'console-details',
        'v8',
        'raw'
    ],

    entryFilter: {
        '**/src/**': true
    },

    onEnd: () => {
        console.log('onEnd e2e test');
    }
};
