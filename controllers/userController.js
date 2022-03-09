const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

/**
 * 
 * @desc for create a user
 * @route /api/user
 * @method POST
 */

exports.createUser = asyncHandler(async (req, res) => {
    const { name, userName, password } = req.body;
    const user = await User.create({ name, userName, password });
    res.status(201).json({
        success: true,
        data: user,
        message: 'User created successfully'
    });
})

/**
 * 
 * @desc for update a user
 * @route /api/user/:id
 * @method PUT
 */
exports.updateUser = asyncHandler(async (req, res) => {
    const { name, userName, password } = req.body;
    const existUser = await User.findOne({ _id: req.params.id});
    if (existUser) {
        existUser.name = name;
        existUser.userName = userName;
        existUser.password = password;

        const updatedUser = await existUser.save();
        res.status(200).json({
            success: true,
            data: updatedUser,
            message: 'User updated successfully'
        });
    } else {
        res.status(404).json({
            success: false,
            data: null,
            message: 'User not found'
        });
    }
});

/**
 * 
 * @desc for delete a user
 * @route /api/user/:id
 * @method DELETE
 * 
 */
exports.deleteUser = asyncHandler(async (req, res) => {
    const existUser = await User.findOne({ _id: req.params.id});
    if (existUser) {
        await existUser.remove();
        res.status(200).json({
            success: true,
            data: null,
            message: 'User deleted successfully'
        });
    } else {
        res.status(404).json({
            success: false,
            data: null,
            message: 'User not found'
        });
    }
});

/**
 * 
 * @desc for get single user
 * @route /api/user
 * @method GET
 */
exports.getSingleUser = asyncHandler(async (req, res) => {
    const existUser = await User.findOne({ _id: req.params.id});
    if (existUser) {
        res.status(200).json({
            success: true,
            data: existUser,
            message: 'User found successfully'
        });
    } else {
        res.status(404).json({
            success: false,
            data: null,
            message: 'User not found'
        });
    }
});

/**
 * 
 * @desc for get all users
 * @route /api/user
 * @method GET
 * 
 */
exports.getAllUsers = asyncHandler(async (req, res) => {
    const allUsers = await User.find();
    if (allUsers) {
        res.status(200).json({
            success: true,
            data: allUsers,
            message: 'Users found successfully'
        });
    } else {
        res.status(404).json({
            success: false,
            data: null,
            message: 'Users not found'
        });
    }
});