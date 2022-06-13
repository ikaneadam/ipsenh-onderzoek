import util from "util"
import child_process from "child_process"
const exec = util.promisify(child_process.exec)

export default async function executeNode() {
    await exec('cd functions/node && node serverlessHandler.js').then()
}

executeNode()
