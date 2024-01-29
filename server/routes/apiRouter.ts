import express from "express";

const router = express.Router();
const {
  getLogin,
  getSignUp,
  reissue,
} = require("../controllers/userController");
const { getCarouselImg } = require("../controllers/productController");
router.route("/login").post(getLogin);
router.route("/signUp").post(getSignUp);
router.route("/reissue").get(reissue);

router.route("/carousel").get(getCarouselImg);
module.exports = router;
