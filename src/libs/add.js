define(["require", "exports", "./sub", "./other"], function (require, exports, sub_1, other_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.other = exports.sub = exports.addTowValues = void 0;
    function addTowValues(x, y) {
        return x + y;
    }
    exports.addTowValues = addTowValues;
    function sub(x, y) {
        return sub_1.subTowValues(x, y);
    }
    exports.sub = sub;
    function other(word) {
        return other_1.otherFun(word);
    }
    exports.other = other;
});
