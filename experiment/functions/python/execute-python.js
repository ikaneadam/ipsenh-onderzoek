import util from "util"
import child_process from "child_process"
const exec = util.promisify(child_process.exec)

export default async function executePython() {
    await exec('cd functions/python && python serverlessHandler.py').then()
}

executePython()
