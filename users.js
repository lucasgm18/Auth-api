const bcrypt = require('bcryptjs');
const { use } = require('react');

const users = [{

   id: 1,
   username: 'admin',
  password: bcrypt.hashSync('1234', 10),
 },
];

module.exports = users;