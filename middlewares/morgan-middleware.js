import express from "express";
import morgan from "morgan";

const morganMiddleware = express();

morganMiddleware.use(morgan("tiny"));

export default morganMiddleware;
