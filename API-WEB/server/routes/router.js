const express = require('express');
const route = express.Router()


const controller = require('../controller/controller');
const packageController = require('../controller/package.controller')

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-user', services.update_user)


// API
route.post('/api/packages', packageController.create);
route.get('/api/packages', packageController.find);
route.put('/api/packages/:id', packageController.update);
route.delete('/api/packages/:id', packageController.delete);


module.exports = route