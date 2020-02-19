const engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("getGithub", () => {
    it("should return a string for their gitHub username", () => {
        const gitHubUser = "natashacwolfe";

        const result = new Engineer().getGithub(str);

        expect(result).toEqual(str);
        })
    });

    describe("getRole", () => {
        it("should return a string for their role", () => {
            const role = "engineer";

            const result = new Engineer().getRole(str);

            expect(result).toEqual(str);
        })
    })
});