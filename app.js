/* eslint no-undef: 0 */
import "dotenv/config.js";
import express from "express";
import routes from "./routes/routes.js";
import middlewares from "./middlewares/middlewares.js";

const app = express();

// Routes and middlewares setup
app.use(middlewares);
app.use(routes);

// View engine setup
app.set("view engine", "ejs");
app.use(express.static("./public"));

// Server start
app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});

export default app;
