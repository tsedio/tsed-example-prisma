import { PlatformTest } from "@tsed/platform-http/testing";
import SuperTest from "supertest";

import { Server } from "../../Server.js";
import { UsersController } from "./UsersController.js";

describe("UsersController", () => {
  beforeEach(
    PlatformTest.bootstrap(Server, {
      mount: {
        "/": [UsersController]
      }
    })
  );

  afterEach(PlatformTest.reset);

  it("should call GET /users", async () => {
    const request = SuperTest(PlatformTest.callback());

    const response = await request.get("/users").expect(200);

    expect(response.text).toEqual("hello");
  });
});
