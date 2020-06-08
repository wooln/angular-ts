import {subTowValues} from './sub'
import {otherFun} from './other'

export function addTowValues(x: number, y :number): number {
    return x+y;
}

export function sub(x:number, y: number): number {
   return subTowValues(x,y);
}

export function other(word: string): string {
    return otherFun(word);
}