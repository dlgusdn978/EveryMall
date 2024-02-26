import { NextRequest } from "next/server";
const connection = require("../../config/dbConnect");

type userInfoProps = {
  userId: string;
};

type ProductProps = {
  userId: string;
  productId: number;
  count: number;
};
const Basket = {
  getBasketProduct: async (req: userInfoProps) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT b.uid, b.pid, b.count, p.name, p.link, p.price from Basket b left join Product p on b.pid=p.id WHERE uid='${req.userId}'`;
      connection.query(query, (err: Error, res: Response) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },
  addBasketProduct: async (req: ProductProps) => {
    console.log(req);
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO BASKET(uid, pid, count) values ('${req.userId}',${req.productId},${req.count})`;
      connection.query(query, (err: Error, res: Response) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },
  // 상품 수량 변경
  updateBasketProduct: async (req: ProductProps) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE Basket set count = count+${req.count} where uid=${req.userId} and pid=${req.productId}`;
      connection.query(query, (err: Error, res: Response) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },
  // 상품 삭제
  deleteBasketProduct: async (req: ProductProps) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM Basket WHERE uid=${req.userId} and pid=${req.productId}`;
      connection.query(query, (err: Error, res: Response) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },
};

module.exports = Basket;
