import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const router = express.Router();
const { getLogin } = require("../controllers/loginController");
router.use(cookieParser());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.route("/").get(getLogin);

module.exports = router;
