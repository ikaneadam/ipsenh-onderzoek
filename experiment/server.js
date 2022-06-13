import executeDockerNode from "./functions/execute-docker-node.js";
import express from "express"
import getMetrics from "./util/getMetrics.js";
import executeDockerPython from "./functions/execute-docker-python.js";
import executePython from "./functions/python/execute-python.js";
import executeJava from "./functions/java/execute-java.js";
import executeDockerJava from "./functions/execute-docker-java.js";
import executeNode from "./functions/node/execute-node.js";
const app = express()
const port = 3000

app.get('/coldstart-node', async (req, res) => {
    const metrics = await getMetrics(executeDockerNode)
    res.send(metrics)
})

app.get('/hotstart-node', async (req, res) => {
    const metrics = await getMetrics(executeNode)
    res.send(metrics)
})

app.get('/coldstart-python', async (req, res) => {
    const metrics = await getMetrics(executeDockerPython)
    res.send(metrics)
})

app.get('/hotstart-python', async (req, res) => {
    const metrics = await getMetrics(executePython)
    res.send(metrics)
})

app.get('/coldstart-java', async (req, res) => {
    const metrics = await getMetrics(executeDockerJava)
    res.send(metrics)
})

app.get('/hotstart-java', async (req, res) => {
    const metrics = await getMetrics(executeJava)
    res.send(metrics)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
