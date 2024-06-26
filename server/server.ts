// import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { Express } from "express";
declare module "express" {
  interface Request {
    user?: SignUpProps;
  }
}
interface SignUpProps {
  userId: string;
  userPwd: string;
  userName: string;
  userPhone: string;
}
const express = require("express");
const { parse } = require("url");
const next = require("next");
const https = require("https");
const fs = require("fs");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

const nextApp = next({ dev, hostname, port });
const handle = nextApp.getRequestHandler();
const app = express();

const httpOptions = {
  key: fs.readFileSync(path.join("./", "localhost+2-key.pem")),
  cert: fs.readFileSync(path.join("./", "localhost+2.pem")),
};

nextApp.prepare().then(() => {
  console.log("서버는 켜짐");

  app.use(express.json());
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", require("./routes/apiRouter"));

  app.get("*", (req: Request, res: Response) => {
    return handle(req, res);
  });
  app.post("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  https.createServer(httpOptions, app).listen(process.env.PORT, () => {
    console.log("ready");
  });
});
