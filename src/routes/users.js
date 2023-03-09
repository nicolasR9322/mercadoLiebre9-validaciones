// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const userController = require('../controllers/userController');
const userValidator = require('../middlewares/userValidator');

router.get('/', userController.index); 
router.post("/",userValidator,userController.store)

module.exports = router;