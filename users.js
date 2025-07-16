const bcrypt = require('bcryptjs');


const users = [{

   id: 1,
   username: 'admin',
  password: bcrypt.hashSync('1234', 10),
 },
];

module.exports = users;