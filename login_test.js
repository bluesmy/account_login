function loginTest(input) {
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]

  // create email lists to check if this email has been registered
  let emailLists = []
  users.forEach(function (user) {
    emailLists.push(user.email)
  })

  if (emailLists.includes(input.email)) {
    for (i = 0; i < users.length; i++) {
      // right email
      if ((users[i].email) === (input.email)) {
        // right password
        if (users[i].password === input.password) {
          return users[i].firstName
        }
        // wrong password
        else {
          return false
        }
      }
    }
  }
  // wrong email
  else {
    return false
  }
}

// export generateTrashTalk function for other files to use
module.exports = loginTest