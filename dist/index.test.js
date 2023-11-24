"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("getMessage()", () => {
    it("should return the correct message when called", () => {
        expect((0, index_1.getMessage)()).toBe("Here is the message");
    });
});
