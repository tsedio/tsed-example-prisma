import { PlatformTest } from "@tsed/platform-http/testing";
import SuperTest from "supertest";

import { Server } from "../../Server.js";
import { PostsController } from "./PostsController.js";

describe("PostsController", () => {
  beforeEach(
    PlatformTest.bootstrap(Server, {
      mount: {
        "/": [PostsController]
      }
    })
  );
  afterEach(PlatformTest.reset);

  it("should call GET /posts", async () => {
    const request = SuperTest(PlatformTest.callback());
    const response = await request.get("/posts").expect(200);

    expect(response.text).toEqual("hello");
  });
});
