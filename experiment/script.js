import axios from "axios"
import fs from "fs"
const apiURL = "http://localhost:3000/"
const coldStartApiRoute = apiURL + "coldstart"
const hotStartApiRoute = apiURL + "hotstart"
const secondInMs = 1000
const tenSecondsInMs = secondInMs * 10

const coldStartFile = "./cold_starts_intensive.csv"
const hotStartFile = "./hot_starts_intensive.csv"

let coldStartCount = 0
let hotstartCount = 0
let coldInterval
const halfuur = (secondInMs * 60 * 60) / 2

const yoooooo = 100
//
// function logColdStart(){
//     if(coldStartCount > yoooooo){
//         stopCold()
//         return
//     }
//     coldStartCount += 1
//     axios.get(coldStartApiRoute)
//         .then(res => {
//             fs.appendFile(coldStartFile, `${res.data.time}, ${res.data.memoryUsed}, ${res.data.cpuUsage}\n`, err => {
//                 if (err) {
//                     console.error(err);
//                 }
//                 // file written successfully
//             });
//         })
// }
//
function logHotStart(){
    if(hotstartCount > yoooooo){
        stopHot()
        return
    }
    hotstartCount += 1
    axios.get(coldStartApiRoute)
        .then(res => {
            writeToFile(coldStartFile, `${res.data.time}, ${res.data.memoryUsed}, ${(res.data.cpuUsage)}, ${(res.data.cpuUsage2)}\n`);
        })
}
//
// function hanna(hanna){
//     if(hanna === null){
//         return 0
//     }
//     return hanna
// }
//
//
const hotInterval = setInterval(logHotStart, secondInMs*7);

// coldInterval = setInterval(logColdStart, 6000);

function stopCold() {
    clearInterval(coldInterval);
}

function stopHot() {
    clearInterval(hotInterval);
}


function writeToFile(file, data){
    fs.appendFile(file, data, err => {});
}

//`${res.data.time}, ${res.data.memoryUsed}, ${res.data.cpuUsage}\n`
