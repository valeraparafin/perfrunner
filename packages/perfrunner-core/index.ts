import { profile as profilePage } from "./profiler/profiler";
import { PerfRunnerOptions } from './profiler/perf-options';
import { processPerfData } from "./processor/processor";
import { Db } from './db';
import { IPerformanceResult, PerfRunResult } from './db/scheme';

export { PerfRunnerOptions }
export { IPerformanceResult }

export async function profile(options: PerfRunnerOptions): Promise<IPerformanceResult> {
    const rawMetrics = await profilePage(options);
    const { pageMetrics, performanceEntries } = processPerfData(rawMetrics);

    const dataToSave: PerfRunResult = {
        timeStamp: Date.now(),
        pageMetrics,
        performanceEntries,
        runParams: { useCache: options.useCache, network: options.network, throttlingRate: options.throttlingRate, url: options.url },
        comment: options.comment
    }

    const db = Db.connect(options.output, options, options.testName);
    db.write(dataToSave, options.purge);
    return db.read();
}