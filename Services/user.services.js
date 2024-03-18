const UserModel = require("../Model/User.Model");


exports.createUserServices = async (brandInfo) => {
    const user = await UserModel.create(brandInfo);
    return user;
};
exports.getAllUserServices = async () => {
    const userList = await UserModel.find({});
    return userList;
};
exports.removeUserByIDService = async (id) => {
    const user = await UserModel.deleteOne({"_id" : id});
    return user;
};