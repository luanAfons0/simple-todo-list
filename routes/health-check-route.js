import express from "express";

const healthCheckRoute = express.Router();

healthCheckRoute.get("/health-check", (req, res) => {
  res.status(200).send({ message: "API is up and running!!!" });
});

export default healthCheckRoute;
