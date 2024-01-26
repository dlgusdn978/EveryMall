import { NextRequest } from "next/server";
const connection = require("../../config/dbConnect");
type SignUpProps = {
  userId: string;
  userPwd: string;
  userName: string;
  userPhone: string;
};
type LoginProps = {
  userId: string;
  userPwd: string;
};
const User = {
  regist: async (req: SignUpProps) => {
    return new Promise((resolve, reject) => {
      //   const query = `INSERT INTO User VALUES('${req.userId}')`;
      const query = `INSERT INTO User VALUES('${req.userId}','${req.userPwd}','${req.userName}','${req.userPhone}')`;
      console.log(req.userPwd);
      connection.query(query, (err: Error, res: Response) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },
  login: async (req: LoginProps) => {
    return new Promise((resolve, reject) => {
      console.log(req);
      const query = `SELECT * FROM User WHERE id='${req.userId}'`;
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

module.exports = User;
