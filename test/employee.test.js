const employee = require("../lib/employee");

describe("Employee", () => {
    describe("getName", () => {
    it("should return a string for their name", () => {
        const name = "natasha";

        const result = new Employee().getName(str);

        expect(result).toEqual(str);
        })
    });

    describe("getId", () => {
        it("should return a number for their id", () => {
            const id = "1561";

            const result = new Employee().getId(num);

            expect(result).toEqual(num);
        })
    });

    describe("getEmail", () => {
        it("should return a string for the user email", () => {
            const email = "natasha.c.wolfe@gmail.com";

            const result = new Employee().getEmail(str);

            expect(result).toEqual(str);
        })
    });

    describe("getRole", () => {
        it("should return a string for the user role", () => {
            const role = "engineer";

            const result = new Employee().getRole(str);

            expect(result).toEqual(str);
        })
    });
    
});