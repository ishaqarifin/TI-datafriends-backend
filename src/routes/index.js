const express = require("express");
const router = express.Router();

const { addUser, getUsers, getUser, updateUser, deleteUser } = require("../controllers/user");
const { addFriend, updateFriend, getFriends, deleteFriend, getFriend } = require("../controllers/friend");

router.post("/adduser", addUser);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.patch("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);

router.post("/addfriend", addFriend);
router.get("/getfriend/:id", getFriend);
router.patch("/updatefriend/:id", updateFriend);
router.get("/getfriends", getFriends);
router.delete("/deletefriend/:id", deleteFriend);

module.exports = router;
