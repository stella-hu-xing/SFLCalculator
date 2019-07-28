
function getData() {
    var data = require('./data/results.json');
    return data
}

function getAllFromEight(data) {
    var dic = {}
    var eights = data.map(i => i.winning)
    eights.forEach(line => {
        console.log(line)
        line.map(i => {
            dic[i] === undefined ? dic[i] = 1 : dic[i] = dic[i] + 1
        })
    })
    return dic
}

function getAll(data) {
    var dic = {}
    var all = data.map(i => i.winning + i.bonus)
    all.forEach(line => {
        console.log(line)
        line.map(i => {
            dic[i] === undefined ? dic[i] = 1 : dic[i] = dic[i] + 1
        })
    })
    return dic
}

console.log(getAll(getData()))