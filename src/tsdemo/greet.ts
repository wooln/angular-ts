import { addTowValues, sub } from './libs/add';
import { subTowValues } from './libs/sub-js';
import {  TreeEdge } from '../../node_modules/gojs/release/go-debug'

export function sayHello(name: string) {
    return `Hello from ${name}: ${addTowValues(3,4)} ${subTowValues(7,4)} ${sub(7,3)}`;
}

let treeEdge = TreeEdge;
exports.treeEdge=treeEdge;