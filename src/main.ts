import data from "./data/results.json"
import { calculateFrequencyDict, sortDict } from "./calculator";
import {Item} from './number'

const results = data as Item[]

// get all winning frequency
const allWinnings = results.map(i=>i.winning)
const dic = calculateFrequencyDict(allWinnings)
console.log(sortDict(dic))

console.log("----------")

// get all frequency
const allNumbers = results.map(i=>i.winning.concat(i.bonus))
const dic2 = calculateFrequencyDict(allNumbers)
console.log(sortDict(dic2))