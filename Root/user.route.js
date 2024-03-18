const express = require("express");
const router = express.Router();
const userController = require("../Controller/user.controller")



router.route('/:id')
    .delete(userController.removeUserByIdController)
router.route('/')
    .post(userController.createUser)
    .get(userController.GetUser)


module.exports = router;