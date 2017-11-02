/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create(req, res) {
    const { username, password } = req.allParams();
    User.findOne({ username })
      .then(user => {
        CipherService.compare(password, user.password);
        const token = CipherService.sign(user.id);
        return { user, token };
      })
      .then(res.created)
      .catch(res.unauthorized);
  },
};
