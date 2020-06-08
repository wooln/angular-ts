define(["require", "exports", "./libs/add"], function (require, exports, add_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sayHello = void 0;
    function sayHello(name) {
        return "Hello from " + name + ": " + add_1.addTowValues(3, 4);
    }
    exports.sayHello = sayHello;
});
