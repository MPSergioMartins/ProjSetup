"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessage = void 0;
const id = 3;
console.log(id);
const getMessage = () => {
    const message = "Here is the message, ok?";
    return message;
};
exports.getMessage = getMessage;
console.log((0, exports.getMessage)());
