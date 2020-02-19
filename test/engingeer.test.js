// const engineer = require("../lib/engineer");

// describe("Engineer", () => {
//     describe("getGithub", () => {
//     it("should return a string for their gitHub username", () => {
//         const gitHubUser = "natashacwolfe";

//         const result = new Engineer().getGithub(str);

//         expect(result).toEqual(str);
//         })
//     });

//     describe("getRole", () => {
//         it("should return a string for their role", () => {
//             const role = "engineer";

//             const result = new Engineer().getRole(str);

//             expect(result).toEqual(str);
//         })
//     })
// });

const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
