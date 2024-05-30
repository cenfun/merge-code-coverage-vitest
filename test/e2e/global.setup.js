import MCR from 'monocart-coverage-reports';
import coverageOptions from '../../mcr.config.e2e.js';

async function globalSetup(config) {
    const mcr = MCR(coverageOptions);
    await mcr.cleanCache();
}

export default globalSetup;
