// const employee = require("../lib/employee");

// describe("Employee", () => {
//     describe("getName", () => {
//     it("should return a string for their name", () => {
//         const name = "natasha";

//         const result = new Employee().getName(str);

//         expect(result).toEqual(str);
//         })
//     });

//     describe("getId", () => {
//         it("should return a number for their id", () => {
//             const id = "1561";

//             const result = new Employee().getId(num);

//             expect(result).toEqual(num);
//         })
//     });

//     describe("getEmail", () => {
//         it("should return a string for the user email", () => {
//             const email = "natasha.c.wolfe@gmail.com";

//             const result = new Employee().getEmail(str);

//             expect(result).toEqual(str);
//         })
//     });

//     describe("getRole", () => {
//         it("should return a string for the user role", () => {
//             const role = "engineer";

//             const result = new Employee().getRole(str);

//             expect(result).toEqual(str);
//         })
//     });

// });



const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
