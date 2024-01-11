import express, { Request, Response } from "express";
// const express = require("express");
const { parse } = require("url");
const next = require("next");
const apiRouter = require("./routes/apiRouter");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

const nextApp = next({ dev, hostname, port });
const handle = nextApp.getRequestHandler();
const app = express();

nextApp.prepare().then(() => {
  console.log("서버는 켜짐");
  // server.use("/api", apiRouter);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, "./public")));

  app.use("/", (req: Request, res: Response, next: any) => {
    res.send("hello");
  });

  app.get("/", (req: Request, res: Response) => {
    res.render("/");
  });

  app.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  app.listen(process.env.PORT, () => {
    console.log("ready");
  });
});
