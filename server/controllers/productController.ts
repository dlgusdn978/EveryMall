import { Request, Response } from "express";
const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const getCarouselImg = asyncHandler(async (req: Request, res: Response) => {
  const imgs = await Product.getCarouselImg();
  res.json({ status: 200, message: "get img sucessfully", imgs });
});

const getMainProduct = asyncHandler(async (req: Request, res: Response) => {
  const mainProduct = await Product.getMainProduct();
  console.log(mainProduct);
  res.json({
    status: 200,
    message: "get main product successfully",
    mainProduct,
  });
});

const getProduct = asyncHandler(async (req: Request, res: Response) => {
  const product = await Product.getProduct(req.params.id);
  res.json({
    status: 200,
    message: "get product successfully",
    product,
  });
});
module.exports = { getCarouselImg, getMainProduct, getProduct };
