import { StatusCodes } from "http-status-codes"; 
import User from "../models/userModel.js";
import Job from "../models/jobModel.js";

export const getCurrentUser = async (req, res) => {
    res.status(StatusCodes.OK).json('get current user');
}

export const getApplicationStats = async (req, res) => {
    res.status(StatusCodes.OK).json('get application stats');
}

export const updateUser = async (req, res) => {
    res.status(StatusCodes.OK).json('user is update');
}