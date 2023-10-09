const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(stations, registeredUsers){
    this.stations = {
        main: [],
        uptown: [],
        downtown: []
    }
    this.registeredUsers = {}
  }

  registerUser(username, password, age) {
    if(username && age >= 18) {
        this.registeredUsers[username] = password
      console.log("user has been registered")
      return username
    } else {
      throw new Error("already registered or too your young to register")
    }
  }

  loginUser(username, password){
    if(username in this.registeredUsers && this.registeredUsers[username] === password){
        console.log("user has been logged in")
    } else {
        throw new Error( "Username or password is incorrect")
    }
  }
}

const u1 = new User("Joe Bloggs", "test123", 21)
const u2 = new User("Phil Koy", "123test", 18)
const u3 = new User("Sam Man", "test12", 30)

const app1 = new ScooterApp
app1.registerUser("JBloggs", "test123", 21)
app1.loginUser("JBloggs", "test123")







