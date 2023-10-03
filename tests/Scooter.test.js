const Scooter = require('../src/Scooter')
const User = require('../src/User')




//typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter();
    expect(scooter).toBeInstanceOf(Scooter);
  });
})

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method
  test("scooter rented", () => {
    const s1 = new Scooter("Main")
    const u1 =  new User("Joe Bloggs", "test123", 21);
    s1.charge = 30
    s1.isBroken = true
    expect(() => s1.rent(u1)).toThrow("Scooter needs to charge or scooter needs repair")
  })
  

  //dock method
  test("scooter's current station and new user", () => {
    const s1 = new Scooter("Main")
    const u1 =  new User("Joe Bloggs", "test123", 21);
    s1.rent(u1)
    s1.dock("Uptown")
    
    expect(s1.user).toBe(null)
    expect(s1.station).toBe("Uptown")

  })

  //requestRepair method

  //charge method

})
