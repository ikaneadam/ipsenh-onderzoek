import util from "util"
import child_process from "child_process"
const exec = util.promisify(child_process.exec)

export default async function executeDockerJava() {
    await exec('cd functions/java && docker compose up').then()
}

executeDockerJava()
