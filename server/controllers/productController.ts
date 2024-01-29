import { Request, Response } from "express";
const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const getCarouselImg = asyncHandler(async (req: Request, res: Response) => {
  const imgs = await Product.getCarouselImg();
  res.json({ status: 200, message: "get img sucessfully", imgs });
});

module.exports = { getCarouselImg };
