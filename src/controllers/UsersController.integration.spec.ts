import { PlatformTest } from "@tsed/common";
import SuperTest from "supertest";
import { UsersController } from "./UsersController";
import { Server } from "../Server";

describe("UsersController", () => {
  let request: SuperTest.SuperTest<SuperTest.Test>;

  beforeEach(PlatformTest.bootstrap(Server, {
    mount: {
      "/": [UsersController]
    }
  }));
  beforeEach(() => {
    request = SuperTest(PlatformTest.callback());
  });

  afterEach(PlatformTest.reset);

  it("should call GET /users", async () => {
     const response = await request.get("/users").expect(200);

     expect(response.text).toEqual("hello");
  });
});
