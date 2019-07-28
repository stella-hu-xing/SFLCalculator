export function calculateFrequencyDict(data: number[][]) {
    var dic = {}
    data.forEach(line => {
        line.map(i => {
            dic[i] === undefined ? dic[i] = 1 : dic[i] = dic[i] + 1
        })
    })
    return dic
}