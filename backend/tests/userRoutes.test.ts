import request from "supertest";
import app from "../src/app";

describe("User API endpoints", () => {
  it("should return validation error when input is empty", async () => {
    const response = await request(app).post("/api/v1/users").send({});

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      success: false,
      message: [
        "First name is a required field",
        "Last name is a required field",
        "Email is a required field",
      ],
    });
  });

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

  it("should return duplicate email error when same email is used", async () => {
    const newUser = {
      firstName: "Michael",
      lastName: "Leo",
      email: "Michael.leo@dummy.com",
    };

    // Create the user the first time
    await request(app).post("/api/v1/users").send(newUser);

    // Try to create the user a second time
    const response = await request(app).post("/api/v1/users").send(newUser);

    expect(response.status).toBe(409);
    expect(response.body).toEqual({
      success: false,
      message: "Email address is already registered.",
    });
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
