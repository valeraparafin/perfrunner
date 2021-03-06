// [https://github.com/ChromeDevTools/devtools-frontend/blob/80c102878fd97a7a696572054007d40560dcdd21/front_end/sdk/NetworkManager.js#L252-L274](Credits goes here)
// [https://stackoverflow.com/questions/48367042/in-chrome-dev-tools-what-is-the-speed-of-each-preset-option-for-network-throttl](Credits goes here)

import { NetworkSetup } from 'perfrunner-core';

export const Original: NetworkSetup = {
    downloadThroughput: -1,
    uploadThroughput: -1,
    latency: 0,
    name: 'original',
};

export const Slow3g: NetworkSetup = {
    downloadThroughput: (0.4 * 1024 * 1024) / 8,
    uploadThroughput: (0.4 * 1024 * 1024) / 8,
    latency: 2000,
    name: 'slow3g',
};

export const HSPA: NetworkSetup = {
    downloadThroughput: (1.44 * 1024 * 1024) / 8,
    uploadThroughput: (0.675 * 1024 * 1024) / 8,
    latency: 562.5,
    name: 'hspa',
};

export const HSPA_Plus: NetworkSetup = {
    downloadThroughput: (4 * 1024 * 1024) / 8,
    uploadThroughput: (1 * 1024 * 1024) / 8,
    latency: 100,
    name: 'fast3g',
};

export const FourG: NetworkSetup = {
    downloadThroughput: (12 * 1024 * 1024) / 8,
    uploadThroughput: (6 * 1024 * 1024) / 8,
    latency: 50,
    name: 'regular4g',
};
