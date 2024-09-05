import express from "express";
import taskController from "../controllers/task-controller.js";

const taskRoutes = express.Router();

taskRoutes
  .get("/", taskController.getAllTasks)
  .post("/task", taskController.createTask)
  .put("/task/:id")
  .delete("task/:id");

export default taskRoutes;
