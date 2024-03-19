const {
    createUserServices, removeUserByIDService, getAllUserServices, getUserByIDService, getUserByAppKeyService, updateUserByIdService, getUserByLogInService
} = require("../Services/user.services");

exports.createUser = async (req, res, next) => {
    try {
        const body = req.body;
        const product = await createUserServices(body);

        res.status(200).json({
            status: 'success',
            data: product
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: error.message
        })
    }
}
exports.GetUser = async (req, res, next) => {
    try {
        const userList = await getAllUserServices();
        res.status(200).json({
            status: "success",
            message: "User List get successfully",
            data: userList
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: "Can't get User List",
            error: err,

        })
    }
}

exports.GetUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log("removing admin by email: ", id);
        const reviewerList = await getUserByIDService(id);
        res.status(200).json({
            status: "success",
            message: "Reviewer Deleted successesFully",
            data: reviewerList
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: "Can't get Reviewer List",
            error: err,

        })
    }
};

exports.GetUserByLogIn = async (req, res, next) => {
    try {
        const {email,password} = req.body;
        console.log("body for login: ", email,password);
        const loggedInfo = await getUserByLogInService(email,password);
        if (loggedInfo.length) {
            res.status(200).json({
                status: "success",
                message: "User Log In Success",
                data: loggedInfo
            })
        }else{
            res.status(404).json({
                status: "Fail",
                message: "You are not Authorized user, please Sign Up",
                error: err,
    
            })
        }
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: "Can't log In",
            error: err,

        })
    }
};
exports.GetUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log("removing admin by email: ", id);
        const reviewerList = await getUserByIDService(id);
        res.status(200).json({
            status: "success",
            message: "Reviewer Deleted successesFully",
            data: reviewerList
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: "Can't get Reviewer List",
            error: err,

        })
    }
};

exports.GetUserByAppKey = async (req, res, next) => {
    try {
        const { key } = req.params;
        console.log("removing admin by email: ", key);
        const reviewerList = await getUserByAppKeyService(key);
        res.status(200).json({
            status: "success",
            message: "User Get successesFully by AppKey",
            data: reviewerList
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: "Can't get Reviewer List",
            error: err,

        })
    }
};
exports.UpdateUserById = async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const updateUser = req.body;
        // console.log(id);
        const updatedUser = await updateUserByIdService(id, updateUser);
        res.status(200).json({
            status: "success",
            data: updatedUser,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: "fail",
            message: err.message,
        })
    }
};
exports.removeUserByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log("removing admin by email: ", id);
        const reviewerList = await removeUserByIDService(id);
        res.status(200).json({
            status: "success",
            message: "Reviewer Deleted successesFully",
            data: reviewerList
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: "Can't get Reviewer List",
            error: err,

        })
    }
};