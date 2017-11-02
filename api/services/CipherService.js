const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { secret } = sails.config;

module.exports = {
  hash(raw) {
    return bcrypt.hashSync(raw, bcrypt.genSaltSync(10));
  },
  compare(raw, hashed) {
    if (bcrypt.compareSync(raw, hashed)) return true;
    throw new Error('Bcrypt: mismatching values');
  },
  sign(raw) {
    return jwt.sign(raw, secret);
  },
  verify(signed) {
    return jwt.verify(signed, secret);
  },
};
