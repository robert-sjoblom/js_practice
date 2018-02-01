const masterIndex = [];
function lineHandler(line) {
    let id = Number(line.slice(0, 4));
    let index = Number(line.slice(8, 10));
    let maxIndex = Number(line.slice(12, 14));
    let msg = line.slice(16, line.length);
    return [id, index, maxIndex, msg];
}

function pktAssembler(packet) {
    //id = 0; index = 1; maxIndex = 2; msg = 3;
    //get msgList from masterIndex if it exists:
    if (masterIndex[packet[0]]) {
        let msgList = masterIndex[packet[0]];
        msgList[packet[1]] = packet[3];
        //check if msgList is complete:
        if (msgList.every(x => Boolean(x))) {
            printMsg(packet[0]);
        }
    } else {
        //doesn't exist, build new one.
        let msgList = new Array(packet[2]).fill(false);
        msgList[packet[1]] = packet[3];
        masterIndex[packet[0]] = msgList;
    }
}

function builder(str) {
    //builds messages
    pktAssembler(lineHandler(str));
}

//this is not so pretty; it formats the output
function printMsg(id) {
    let msg = masterIndex[id];
    let col1 = "    ";
    let col2;
    let col3;
    for (let i = 0; i < msg.length; i++) {
        const line = msg[i];
        if (i >= 10) {
            col2 = "  ";
        } else {
            col2 = "   ";
        }
        if (msg.length >= 10) {
            col3 = col1;
        } else {
            col3 = "     ";
        }
        let str = id + col1 + i + col2 + msg.length + col3 + line;
        console.log(str);
    }
}




const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('./packets_assembly.txt'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  builder(line);
});
