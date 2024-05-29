import express from "express";

const router = express.Router();
const {
  getLogin,
  getSignUp,
  reissue,
  verifyAccessToken,
  addAddress,
  getAllAddress,
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
const { requestKakaoPayment } = require("../controllers/paymentController");
router.route("/login").post(getLogin);
router.route("/signUp").post(getSignUp);
router.route("/reissue").get(reissue);
router.route("/verifyToken").post(verifyAccessToken);

router.route("/getAllAddress").get(getAllAddress);
router.route("/user/addAddress").post(addAddress);

router.route("/carousel").get(getCarouselImg);
router.route("/main").get(getMainProduct);
router.route(`/product/:id`).get(getProduct);

router.route(`/basket/:userId`).get(getBasketProduct);
router.route(`/basket/:userId/:productId`).delete(deleteBasketProduct);
router.route("/basket").post(addBasketProduct).put(updateBasketProduct);

router.route("/payment/kakao/ready").post(requestKakaoPayment);

module.exports = router;
