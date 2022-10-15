const fs = require('fs')
    // create a JSON object
const user = {
    id: 19521519,
    name: 'Hoa',
    age: 21,
}

const data = JSON.stringify(user)

fs.writeFile('user.json', data, err => {
    if (err) {
        throw err
    }
})