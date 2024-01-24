import express from "express";

const router = express.Router();
const { getLogin, getSignUp } = require("../controllers/userController");

router.route("/login").post(getLogin);
router.route("/signUp").post(getSignUp);

module.exports = router;
