import express from "express";

const expressParser = express();

expressParser.use(express.json());

export default expressParser;
