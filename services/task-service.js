import dataBase from "../db/data-base.js";
import { v4 as uuidv4 } from "uuid";

class TaskRepository {
  async getAllTasks() {
    return dataBase.tasks;
  }

  async createTask(newTask) {
    if (!newTask || Object.keys(newTask).length == 0) {
      throw new Error("Task undefined!");
    }

    const id = uuidv4();

    dataBase.tasks.push({ ...newTask, id });

    const response = dataBase.tasks.find((item) => item.id == id);

    return response;
  }
}

export default new TaskRepository();
