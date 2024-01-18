import { NextRequest } from "next/server";
const connection = require("../../config/dbConnect");
type UserProps = {
  userId: string;
  userPwd: string;
  userName: string;
  userPhone: string;
};
const User = {
  regist: async (req: UserProps) => {
    return new Promise((resolve, reject) => {
      //   const query = `INSERT INTO User VALUES('${req.userId}')`;
      const query = `INSERT INTO User VALUES('${req.userId}','${req.userPwd}','${req.userName}','${req.userPhone}')`;
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
