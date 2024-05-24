const express = require("express");
const { getUserController, updateUserController, updatePasswordController, resetPasswordController , deleteProfileController} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// GET USER
router.get("/getUser", authMiddleware, getUserController);

// UPDATE PROFILE
router.put("/updateUser", authMiddleware, updateUserController);

//password update
router.post("/updatePassword", authMiddleware, updatePasswordController);

//Reset Password
router.post('/resetPassword',authMiddleware, resetPasswordController);

//delete 
router.delete('/deleteUser/:id',authMiddleware, deleteProfileController)
module.exports = router;


