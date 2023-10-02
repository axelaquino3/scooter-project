const User = require('../src/User');

let user

beforeEach(() => {
  user = new User("Joe Bloggs", "test123", 21);
})

// User tests here
describe("User property tests", () => {
  // test username

  test("username should be a string", () => {
    expect(typeof user.username).toBe("string");
  })
  // test password
  test("password should match password", () => {
    expect(user.password).toBe("test123")
  })

  // test age"
  test("age should be a number", () => {
    expect(typeof user.age).toBe("number")
  })

  // test login

  test("if password is incorrect, login should be false", () =>{
    expect(() => user.login("test")).toThrow("incorrect password")
  })

// test logout
  test("toggle login to false", () => {
    expect(user.loggedIn).toBe(false)
  })



})



