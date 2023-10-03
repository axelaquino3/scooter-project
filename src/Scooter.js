const User = require('./User')


class Scooter {

  static nextSerial = 1
  
  constructor(station){
    this.station = station
    this.user = null
    this.serial = Scooter.nextSerial++
    this.charge = 100
    this.isBroken = false
  }

  rent(user) {
    if(this.charge > 20 && this.isBroken === false) {
      this.user = user
      this.station = null
    } else {
      throw new Error("Scooter needs to charge or scooter needs repair")
    }
  }

  dock(station){
    this.station = station
    this.user = null
  }
}


// const s1 = new Scooter("Main")
// const u1 =  new User("Joe Bloggs", "test123", 21);


// s1.rent(u1)
// console.log(s1)

// s1.dock("Uptown")
// console.log(s1)


module.exports = Scooter
