import express from "express";
import taskController from "../controllers/task-controller.js";
import frontEndController from "../controllers/front-end-controller.js";

const taskRoutes = express.Router();

// API/integration related routes
taskRoutes
  .get("/get-all-tasks", taskController.getAllTasks)
  .post("/task", taskController.createTask)
  .patch("/task/:id", taskController.updateTask)
  .delete("/task/:id", taskController.deleteTask);

// Front-end/render routes
taskRoutes
  .get("/", frontEndController.getAllTasks)
  .get("/create-task", frontEndController.createTask)
  .get("/update-task/:id", frontEndController.updateTask);

export default taskRoutes;
