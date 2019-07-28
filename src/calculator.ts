
export function calculateFrequencyDict(data: number[][]) {
    let dic = {};
    data.forEach(line => {
        line.map(i => {
            dic[i] === undefined ? dic[i] = 1 : dic[i] = dic[i] + 1
        })
    })
    return dic
};

export function sortDict(dict: Object){
    let sortable = [];
    for (var number in dict) {
        sortable.push([number, dict[number]]);
    }
    
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    return sortable;
}