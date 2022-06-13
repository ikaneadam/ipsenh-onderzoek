import osu from "node-os-utils"
export default async function getMetrics(theFunction) {
    const previousUsage = process.cpuUsage();
    const begin=Date.now();
    await theFunction()
    const end= Date.now();
    const timeSpent = (end-begin)/1000;
    const usage = process.cpuUsage(previousUsage);
    const result = 100 * (usage.user + usage.system) / ((Date.now() - begin) * 1000)
    const memoryUsed = process.memoryUsage().heapUsed / 1024 / 1024
    const metrics = {time: timeSpent, memoryUsed: memoryUsed, cpuUsage: result, cpuUsage2: (  await osu.cpu.usage())}
    console.log(metrics)
    return metrics
}
