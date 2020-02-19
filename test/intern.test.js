const intern = require("../lib/intern");

describe("Intern", () => {
    describe("getSchool", () => {
    it("should return a string for the name of their school", () => {
        const internSchool = "School name";

        const result = new Intern().getSchool(str);

        expect(result).toEqual(str);
        })
    });

    describe("getRole", () => {
        it("should return a string for their role", () => {
            const role = "intern";

            const result = new Intern().getRole(str);

            expect(result).toEqual(str);
        })
    })
});