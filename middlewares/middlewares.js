import express from "express";
import expressParser from "./express-parser.js";
import morganMiddleware from "./morgan-middleware.js";

const middleWares = express();

middleWares.use(expressParser);
middleWares.use(morganMiddleware);

export default middleWares;
