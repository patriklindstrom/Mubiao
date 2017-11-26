"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./node_modules/@types/node/index.d.ts" />
/// <reference path="./node_modules/@types/mocha/index.d.ts" />
/// 
var assert = require("assert");
describe("Attendance Test Suite 1", function () {
    it("Test A", function () {
        assert.ok(true, "This shouldn't fail");
    });
    it("Test B", function () {
        assert.ok(1 === 1, "This shouldn't fail");
        assert.ok(false, "This should fail");
    });
});
//# sourceMappingURL=test.js.map