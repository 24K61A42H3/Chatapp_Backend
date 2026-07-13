const express = require("express");
const router = express.Router();
console.log("userRoutes loaded");
const {
  createUser,
  getUsers,
} = require("../controllers/userController");
router.post("/", createUser);
router.get("/", getUsers);

module.exports = router;