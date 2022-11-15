const sequelize = require('../config/connection');
const { User}= require('../models');

const userdata = [
  {
    firstName: 'Neil',
    lastName: 'West',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    firstName: 'Rob',
    lastName: 'Bes',
    email: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    firstName: 'Cam',
    lastName: 'West',
    email: 'cstoneman2@last.fm',
    password: 'password123'
  },
  {
    firstName: 'Neil',
    lastName: 'Heller',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123'
  },
  {
    firstName: 'Gordge',
    lastName: 'West',
    email: 'gmidgley4@weather.com',
    password: 'password123'
  },
  {
    firstName: 'Larn',
    lastName: 'West',
    email: 'larnout5@imdb.com',
    password: 'password123'
  },
  {
    firstName: 'Hamlet',
    lastName: 'Wern',
    email: 'hnapleton6@feedburner.com',
    password: 'password123'
  },
  {
    firstName: 'Neil',
    lastName: 'Perigo',
    email: 'kperigo7@china.com.cn',
    password: 'password123'
  },
  {
    firstName: 'Mong',
    lastName: 'Lern',
    email: 'lmongain8@google.ru',
    password: 'password123'
  },
  {
    firstName: 'Neil',
    lastName: 'stee',
    email: 'bsteen9@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;