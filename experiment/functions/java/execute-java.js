import util from "util"
import child_process from "child_process"
const exec = util.promisify(child_process.exec)

export default async function executeJava() {
    await exec('cd functions/java && java main.java').then()
}

executeJava()
