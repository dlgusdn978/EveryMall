import { NextRequest } from "next/server";
const connection = require("../../config/dbConnect");
const Product = {
  getCarouselImg: async () => {
    return new Promise((resolve, reject) => {
      //   const query = `INSERT INTO User VALUES('${req.userId}')`;
      const query = "SELECT * FROM CAROUSEL";
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

module.exports = Product;
