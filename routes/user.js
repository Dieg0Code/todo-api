const express = require('express');
const router = express.Router();

const { createUser, updateUser, deleteUser, getAllUsers, getSingleUser } = require('../controllers/userController');

router.route('/').post(createUser);
router.route('/:id').put(updateUser);
router.route('/:id').delete(deleteUser);
router.route('/:id').get(getSingleUser);
router.route('/').get(getAllUsers);


module.exports = router;