// const manager = require("../lib/manager";

// describe("manager", () => {
//     describe("officeNumber", () => {
//     it("should return a number for their office number", () => {
//         const officeNumber = "1";

//         const result = new Manager().officeNumber(num);

//         expect(result).toEqual(num);
//         })
//     });

//     describe("getRole", () => {
//         it("should return a string for their role", () => {
//             const role = "manager";

//             const result = new Manager().getRole(str);
            
//             expect(result).toEqual(str);
//         })
//     })
// });

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
