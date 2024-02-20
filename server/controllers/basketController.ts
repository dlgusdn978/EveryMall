import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const Basket = require("../models/basketModel");

const getBasketProduct = asyncHandler(async (req: Request, res: Response) => {
  console.log(req.body);
  console.log(req);
  const getProduct = await Basket.getBasketProduct(req.params);
  res.json({
    status: 200,
    message: "get basket product successfully",
    getProduct,
  });
});
const addBasketProduct = asyncHandler(async (req: Request, res: Response) => {
  const addProduct = await Basket.addBasketProduct(req);
  res.json({
    status: 200,
    message: "add basket product successfully",
  });
});

const updateBasketProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const updateProduct = await Basket.updateBasketProduct(req);
    res.json({
      status: 200,
      message: "update basket product successfully",
    });
  }
);
const deleteBasketProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const deletProduct = await Basket.deleteBasketProduct(req);
    res.json({
      status: 200,
      message: "delete basket product successfully",
    });
  }
);
module.exports = {
  getBasketProduct,
  addBasketProduct,
  updateBasketProduct,
  deleteBasketProduct,
};
