// vitest.config.js
import { defineConfig } from 'vitest/config';
import coverageOptions from './mcr.config.unit.js';

export default defineConfig({
    test: {
        include: ['test/unit/*.test.js'],
        coverage: {
            enabled: true,
            include: ['src/**'],

            provider: 'custom',
            customProviderModule: 'vitest-monocart-coverage',

            // or a config path for coverage options
            // coverageReportOptions: "mcr.config.js"
            coverageReportOptions: coverageOptions
        }
    }
});
