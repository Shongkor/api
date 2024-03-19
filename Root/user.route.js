const express = require("express");
const router = express.Router();
const userController = require("../Controller/user.controller")



router.route('/:id')
    .delete(userController.removeUserByIdController)
router.route('/log-in')
    .get(userController.GetUserByLogIn)
router.route('/:id')
    .get(userController.GetUserById)
router.route('/update-user-by-id/:id')
    .patch(userController.UpdateUserById)
router.route('/get-by-app-key/:key')
    .get(userController.GetUserByAppKey)

router.route('/')
    .post(userController.createUser)
    .get(userController.GetUser)



module.exports = router;