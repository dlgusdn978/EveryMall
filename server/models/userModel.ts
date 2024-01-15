import { NextRequest } from "next/server";
const connection = require("../../config/dbConnect");

const User = {
  regist: async (req: NextRequest) => {
    return new Promise((resolve, reject) => {
      //   const query = `INSERT INTO User VALUES('${req.userId}')`;

      console.log(req.body);
    });
  },
};

module.exports = User;
