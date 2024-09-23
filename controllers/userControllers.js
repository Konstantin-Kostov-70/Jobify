import { StatusCodes } from "http-status-codes"; 
import User from "../models/userModel.js";
import Job from "../models/jobModel.js";

export const getCurrentUser = async (req, res) => {
    const user = await User.findOne({ _id: req.user.userId})
    const userWithoutPassword = user.toJSON()
    res.status(StatusCodes.OK).json(userWithoutPassword);
}

export const updateUser = async (req, res) => {
    const obj = {...req.body}
    delete obj.password
    console.log(obj);
    
    const updateUser = await User.findByIdAndUpdate(req.user.userId, obj)
    res.status(StatusCodes.OK).json('user is update');
}

export const getApplicationStats = async (req, res) => {
    const users = await User.countDocuments();
    const jobs = await Job.countDocuments();
    res.status(StatusCodes.OK).json({ users, jobs });
}

