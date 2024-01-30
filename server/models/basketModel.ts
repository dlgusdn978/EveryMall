import { NextRequest } from "next/server";
const connection = require("../../config/dbConnect");

type userInfoProps = {
  userId: string;
};
type addItemProps = {
  userId: string;
  productId: string;
  productCount: number;
};
const Basket = {
  getBasket: async (req: userInfoProps) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM BASKET WHERE id="${req.userId}"`;
      connection.query(query, (err: Error, res: Response) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },
  //   addBasketItem: async (req: addItemProps) => {
  //     return new Promise((resolve, reject) => {
  //       const query = `INSERT INTO PRODUCT VALUES()`;
  //     });
  //   },
};

module.exports = Basket;
