class User {
  // User code here
  constructor(username, password, age) {
    this.username = username
    this.password = password
    this.age = age
    this.loggedIn = false 
  }

  login(password) {
    if(this.password === password) {
      this.loggedIn = true
    } else {
      throw new Error("incorrect password")
    }
  }

  logout() {
    this.loggedIn = false
  }
}

const u1 =  new User("Joe Bloggs", "test123", 21);

// console.log(u1)
// console.log(u1.username)
// u1.login("test123")
// console.log(u1)
// u1.logout()
// console.log(u1)




module.exports = User
