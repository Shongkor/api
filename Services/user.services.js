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
    const userList = await UserModel.find({"_id" : id});
    return userList;
};
exports.getUserByAppKeyService = async (key) => {
    const userList = await UserModel.find({"AppKey" : key});
    return userList;
};
exports.removeUserByIDService = async (id) => {
    const user = await UserModel.deleteOne({"_id" : id});
    return user;
};