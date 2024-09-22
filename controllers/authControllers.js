import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";
import { hashPassword } from "../utils/passwordsUtils.js";

export const register = async (req, res) => {
    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword;

    const isFirstAccount = await User.countDocuments() === 0;
    req.body.role = isFirstAccount ? 'admin' : 'user';

    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({ msg: "user created" });
};

export const login = async (req, res) => {
    res.send('login');
};