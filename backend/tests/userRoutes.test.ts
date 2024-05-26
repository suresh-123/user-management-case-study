import request from "supertest";
import app from "../src/app"; 

describe("User API endpoints", () => {
  it("should create a new user", async () => {
    const userData = {
      firstName: "Michael",
      lastName: "Leo",
      email: "Michael.leo@dummy.com",
    };

    const response = await request(app).post("/api/v1/users").send(userData);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Data saved successfully.");
    expect(response.body.data.user.firstName).toBe(userData.firstName);
    expect(response.body.data.user.lastName).toBe(userData.lastName);
    expect(response.body.data.user.email).toBe(userData.email);
  });

  it("should get a paginated user list", async () => {
    const response = await request(app).get("/api/v1/users?page=1&per_page=10");

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Data loaded successfully");
    expect(Array.isArray(response.body.data.users)).toBe(true);
    expect(response.body.data.users.length).toBeGreaterThan(0);
    expect(response.body.data.totalCount).toBeDefined();
  });
});


