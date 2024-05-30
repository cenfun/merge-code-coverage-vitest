import { devices } from '@playwright/test';

export default {
    testDir: './test/e2e',

    // shard for file
    fullyParallel: true,

    globalSetup: './test/e2e/global.setup.js',
    globalTeardown: './test/e2e/global-teardown.js',

    projects: [{
        name: 'chromium',
        use: devices['Desktop Chrome']
    }],

    reporter: [
        ['list'],
        ['monocart-reporter', {
            name: 'E2E report'
        }]
    ],

    webServer: {
        command: 'npm run dev',
        url: 'http://localhost:5173/'
    }
};
