import util from "util"
import child_process from "child_process"
const exec = util.promisify(child_process.exec)

export default async function executeDockerPython() {
    await exec('cd functions/python && docker compose up').then()
}

executeDockerPython()
