/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index(req, res) {
    const { id, name, page = 1, limit = 15 } = req.allParams();
    User.find(id ? { id } : { name: { like: `%${name}%` } })
      .paginate({
        page,
        limit,
      })
      .then(res.ok)
      .catch(res.negotiate);
  },
  show(req, res) {
    const id = req.param('id');
    User.findOne({ id })
      .then(res.ok)
      .catch(res.negotiate);
  },
  create(req, res) {
    User.create(req.allParams())
      .then(res.created)
      .catch(res.negotiate);
  },
  update(req, res) {
    const { id, name, phone, email, password } = req.allParams();
    const query = {};
    if (name) query.name = name;
    if (phone) query.phone = phone;
    if (email) query.email = email;
    if (password) query.password = password;
    User.update({ id }, { query })
      .then(res.ok)
      .catch(res.negotiate);
  },
  delete(req, res) {
    const id = req.param('id');
    User.destroy({ id })
      .then(res.ok)
      .catch(res.negotiate);
  },
};
