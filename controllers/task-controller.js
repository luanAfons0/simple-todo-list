import taskService from "../services/task-service.js";

class TaskController {
  async getAllTasks(req, res) {
    try {
      const tasks = await taskService.getAllTasks();
      return res.status(200).send({ tasks: tasks });
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  async createTask(req, res) {
    try {
      const newTask = req.body;
      const response = await taskService.createTask(newTask);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  async deleteTask(req, res) {
    try {
      const taskId = req.params.id;
      const response = await taskService.deleteTask(taskId);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  async updateTask(req, res) {
    try {
      const taskId = req.params.id;
      const updatedTask = req.body
      const response = await taskService.updateTask(taskId, updatedTask);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }
}

export default new TaskController();
