import data from "./data/results.json"
import { calculateFrequencyDict } from "./calculator";
import {Item} from './number'

const results = data as Item[]

const allWinnings = results.map(i=>i.winning)
// get all winning frequency
console.log(calculateFrequencyDict(allWinnings))

const allNumbers = results.map(i=>i.winning.concat(i.bonus))
// get all winning frequency
console.log(calculateFrequencyDict(allNumbers))