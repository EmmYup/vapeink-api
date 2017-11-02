module.exports.routes = {
  'get /': 'AppController.index',

  'post /session': 'SessionController.create',

  'get /user': 'UserController.index',
  'get /user/:id': 'UserController.show',
  'post /user': 'UserController.create',
  'put /user': 'UserController.update',
  'delete /user': 'UserController.delete',
};
