import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const router = express.Router();

router.use(cookieParser());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

export default router;
