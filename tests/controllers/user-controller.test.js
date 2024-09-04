import request from "supertest";
import app from "../../app";

describe("GET /get-all-users", () => {
  describe("should return all users in database", () => {
    it("should respond with 200 status code", async () => {
      request(app)
        .get("/health-check")
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });
});
