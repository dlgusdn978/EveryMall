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
type AddressProps = {
  userId: string;
  userName: string;
  userPhone: string;
  userZoneCode: string;
  userAddress: string;
  userAddressDetail: string;
  userRequest: string;
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
  getAllAddress: async (userId: string) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM User_Address WHERE uid='${userId}'`;
      connection.query(query, (err: Error, res: Response) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },
  addAddress: async (req: AddressProps) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO User_Address(uid, name, phone, zonecode, address, address_detail, request) VALUES('${req.userId}','${req.userName}', '${req.userPhone}', '${req.userZoneCode}', '${req.userAddress}', '${req.userAddressDetail}', '${req.userRequest}')`;
      connection.query(query, (err: Error, res: Response) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
  deleteAddress: async (req: number) => {
    console.log(req);
    return new Promise((resolve, reject) => {
      const query = `Delete From User_Address Where aid=${req}`;
      connection.query(query, (err: Error, res: Response) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
};

module.exports = User;
