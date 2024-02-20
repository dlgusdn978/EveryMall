import express from "express";

const router = express.Router();
const {
  getLogin,
  getSignUp,
  reissue,
} = require("../controllers/userController");
const {
  getCarouselImg,
  getMainProduct,
  getProduct,
} = require("../controllers/productController");
const {
  getBasketProduct,
  addBasketProduct,
  updateBasketProduct,
  deleteBasketProduct,
} = require("../controllers/basketController");
router.route("/login").post(getLogin);
router.route("/signUp").post(getSignUp);
router.route("/reissue").get(reissue);

router.route("/carousel").get(getCarouselImg);
router.route("/main").get(getMainProduct);
router.route(`/product/:id`).get(getProduct);

router.route(`/basket/:userId`).get(getBasketProduct);
router.route(`/basket/:userId/:productId`).delete(deleteBasketProduct);
router.route("/basket").post(addBasketProduct).put(updateBasketProduct);

module.exports = router;
