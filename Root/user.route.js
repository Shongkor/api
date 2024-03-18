const express = require("express");
const router = express.Router();
const userController = require("../Controller/user.controller")



router.route('/:id')
    .delete(userController.removeUserByIdController)
router.route('/:id')
    .get(userController.GetUserById)
router.route('/get-by-app-key/:key')
    .get(userController.GetUserByAppKey)
router.route('/')
    .post(userController.createUser)
    .get(userController.GetUser)


module.exports = router;