const UserModel = require("../Model/User.Model");


exports.createUserServices = async (brandInfo) => {
    const user = await UserModel.create(brandInfo);
    return user;
};
exports.getAllUserServices = async () => {
    const userList = await UserModel.find({});
    return userList;
};
exports.getUserByIDService = async (id) => {
    const userList = await UserModel.find({ "_id": id });
    return userList;
};
exports.getUserByAppKeyService = async (key) => {
    const userList = await UserModel.find({ "AppKey": key });
    return userList;
};
exports.getUserByLogInService = async (email, password) => {
    const userList = await UserModel.find({
        $and: [
            { "email": email },
            { "password": password }
        ]
    });
    return userList;
};
exports.updateUserByIdService = async (id, updateTour) => {
    console.log("12.2444444444444444444444", id, updateTour);
    const updatedUser = await UserModel.findByIdAndUpdate(id, updateTour, {
        runValidators: true,
        new: true,
    });
    return updatedUser;
}
exports.removeUserByIDService = async (id) => {
    const user = await UserModel.deleteOne({ "_id": id });
    return user;
};