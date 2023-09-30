const User = require('./User')
const Scooter = require('./Scooter')

// class ScooterApp {
//   // ScooterApp code here
//   constructor(stations, registeredUsers){
//     this.stations = {}
//     this.registeredUsers = {}
//   }

//   registerUser(username, password, age) {
//     if(username && age >= 18) {
//       console.log("user has been registered")
//       return username
//     } else {
//       throw new Error("already registered or too your young to register")
//     }
//   }

//   loginUser(username, password){
    
//   }
// }


const scooter1 = new Scooter("Main")
const scooter2 = new Scooter("Uptown")
const user1 = new User("mike123", "hello123", 20)
const user2 = new User("phil22", "123hello", 30)



console.log(scooter1)
console.log(scooter2)
console.log(user1)
console.log(user2)


module.exports = ScooterApp
