const route = require('express').Router();
const user = require('./database');
const validation = require('./middleware/validation-middleware');

route.post('/validatorjs/addUser', validation.signup, (req, res) => {
  user.addUser(req.body, res);
});

route.get('/getUsers', (req, res) => {
  user.getUsers(res);
});

route.post('/getOneUser', (req, res) => {
  user.getOneUser(req.body, res);
});
module.exports = route;
