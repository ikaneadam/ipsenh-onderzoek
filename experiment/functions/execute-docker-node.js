import util from "util"
import child_process from "child_process"
const exec = util.promisify(child_process.exec)

export default async function executeDockerNode() {
    await exec('cd functions/node && docker compose up').then()
}

executeDockerNode()
