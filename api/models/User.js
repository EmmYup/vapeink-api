/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string',
    },
    username: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    type: {
      type: 'string',
      enum: ['admin', 'seller'],
      defaultsTo: 'seller',
    },
    phone: {
      type: 'string',
    },
    commission: {
      type: 'integer',
    },
    toJSON() {
      const obj = this.toObject();
      delete obj.password;
      return obj;
    },
  },
  afterValidate(params, cb) {
    // eslint-disable-next-line no-param-reassign
    if (params.password) params.password = CipherService.hash(params.password);
    cb();
  },
};
