const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');

const Todo = require('../models/todoModel');

/**
 * 
 * @desc For create a todo
 * @route /api/todo
 * @method POST
 * 
 */
exports.createTodo = asyncHandler(async (req, res) => {
    const { name, state, description, createdAt, updatedAt } = req.body;
    const todo = await Todo.create({name, state, description, createdAt, updatedAt});
    res.status(201).json({
        success: true,
        data: todo,
        message: 'Todo created successfully'
    });
});


/**
 * 
 * @desc For Update a todo
 * @route /api/todo/:id
 * @method PUT
 * 
 */
exports.updateTodo = asyncHandler(async (req, res) => {
    const { name, state, description, createdAt, updatedAt } = req.body;
    const existTodo = await Todo.findOne({ _id: req.params.id});
    if (existTodo) {
        existTodo.name = name;
        existTodo.state = state;
        existTodo.description = description;
        existTodo.createdAt = createdAt;
        existTodo.updatedAt = updatedAt;

        const updatedTodo = await existTodo.save();
        res.status(200).json({
            success: true,
            data: updatedTodo,
            message: 'Todo updated successfully'
        });
    } else {
        res.status(401).json({
            success: false,
            data: null,
            message: 'Todo not found'
        });
    }
});

/**
 * 
 * @desc for delete a todo
 * @route /api/todo/:id
 * @method DELETE
 * 
 */
exports.deleteTodo = asyncHandler(async (req, res) => {
    const existTodo = await Todo.findOne({ _id: req.params.id});
    if (existTodo) {
        await existTodo.remove();
        res.status(200).json({
            success: true,
            message: 'Todo deleted successfully'
        });
    } else {
        res.status(401).json({
            success: false,
            message: 'Todo not found'
        });
    }
});

/**
 * 
 * @desc for get single todo
 * @route /api/todo/:id
 * @method GET
 * 
 */
 exports.getSingleTodo = asyncHandler(async (req, res) => {
    const existTodo = await Todo.findOne({ _id: req.params.id });
    if (existTodo) {
        res.status(200).json({
            success: true,
            data: existTodo,
            message: 'Todo found successfully'
        });
    } else {
        res.status(404).json({
            success: false,
            data: null,
            message: 'Todo not found'
        });
    }
});

/**
 * 
 * @desc for get all todo's
 * @route /api/todo
 * @method GET
 * 
 */

exports.getAllTodos = asyncHandler(async (req, res) => {

    const allTodos = await Todo.find();
    if (allTodos) {
        res.status(200).json({
            success: true,
            data: allTodos,
            message: 'Todos found successfully'
        });
    } else {
        res.status(404).json({
            success: false,
            data: null,
            message: 'Todos not found'
        });
    }

});