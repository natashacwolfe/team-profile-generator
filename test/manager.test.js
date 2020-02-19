const manager = require("../lib/manager";

describe("manager", () => {
    describe("officeNumber", () => {
    it("should return a number for their office number", () => {
        const officeNumber = "1";

        const result = new Manager().officeNumber(num);

        expect(result).toEqual(num);
        })
    });

    describe("getRole", () => {
        it("should return a string for their role", () => {
            const role = "manager";

            const result = new Manager().getRole(str);
            
            expect(result).toEqual(str);
        })
    })
});