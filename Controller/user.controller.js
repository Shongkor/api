const {
    createUserServices,removeUserByIDService, getAllUserServices, getUserByIDService
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
        const {id} = req.params;
        console.log("removing admin by email: ",id); 
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
exports.removeUserByIdController = async (req, res, next) => {
    try {
        const {id} = req.params;
        console.log("removing admin by email: ",id); 
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