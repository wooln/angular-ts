define(["require", "exports", "./libs/add", "./libs/sub"], function (require, exports, add_1, sub_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sayHello = void 0;
    function sayHello(name) {
        return "Hello from " + name + ": " + add_1.addTowValues(3, 4) + " " + sub_1.subTowValues(7, 4) + " " + add_1.sub(7, 3);
    }
    exports.sayHello = sayHello;
});
