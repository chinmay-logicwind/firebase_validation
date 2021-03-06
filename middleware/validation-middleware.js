const validator = require('../helpers/validate');

const signup = async (req, res, next) => {
  const validationRule = {
    email: 'required|string|email',
    username: 'required|string',
    phone: 'required|string',
    password: 'required|string|min:6',
    gender: 'string',
  };

  await validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err,
      });
    } else {
      req.body = {
        email: req.body.email,
        username: req.body.username,
        phone: req.body.phone,
        password: req.body.password,
        gender: req.body.gender,
        roll: req.body.roll,
      };
      next();
    }
  }).catch((err) => console.log(err));
};

module.exports = {
  signup,
};
