// const intern = require("../lib/intern");

// describe("Intern", () => {
//     describe("getSchool", () => {
//     it("should return a string for the name of their school", () => {
//         const internSchool = "School name";

//         const result = new Intern().getSchool(str);

//         expect(result).toEqual(str);
//         })
//     });

//     describe("getRole", () => {
//         it("should return a string for their role", () => {
//             const role = "intern";

//             const result = new Intern().getRole(str);

//             expect(result).toEqual(str);
//         })
//     })
// });

const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
