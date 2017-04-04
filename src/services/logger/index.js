'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'loggers.db'),
    autoload: true
  });

  let options = {
    Model: db,
    paginate: false
  };

  // Initialize our service with any options it requires
  app.use('/loggers', service(options));

  // Get our initialize service to that we can bind hooks
  const loggerService = app.service('/loggers');

  // Set up our before hooks
  loggerService.before(hooks.before);

  // Set up our after hooks
  loggerService.after(hooks.after);
};
