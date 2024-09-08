import taskService from "../services/task-service.js";

class FrontEndController {
  async getAllTasks(req, res) {
    try {
      const tasks = await taskService.getAllTasks();
      return res.render("index", { tasks });
    } catch (error) {
      return res.status(200).send(error);
    }
  }

  async createTask(req, res) {
    try {
      return res.render("createTask");
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  async updateTask(req, res) {
    try {
      return res.render("update-task");
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }
}

export default new FrontEndController();
