/// <reference path="./node_modules/@types/node/index.d.ts" />
/// <reference path="./node_modules/@types/mocha/index.d.ts" />
/// 
import assert = require('assert');
import { mount, shallow } from 'enzyme';
describe("Attendance Test Suite 1", () => {
    it("Test A", () => {
        assert.ok(true, "This shouldn't fail");
    });

    it("Test B", () => {
        assert.ok(1 === 1, "This shouldn't fail");
        assert.ok(false, "This should fail");
    });
});
