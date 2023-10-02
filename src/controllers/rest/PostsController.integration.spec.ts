import { PlatformTest } from "@tsed/common";
import SuperTest from "supertest";
import { PostsController } from "./PostsController";
import { Server } from "../../Server";

describe("PostsController", () => {
  let request: SuperTest.SuperTest<SuperTest.Test>;

  beforeEach(PlatformTest.bootstrap(Server, {
    mount: {
      "/": [PostsController]
    }
  }));
  beforeEach(() => {
    request = SuperTest(PlatformTest.callback());
  });

  afterEach(PlatformTest.reset);

  it("should call GET /posts", async () => {
     const response = await request.get("/posts").expect(200);

     expect(response.text).toEqual("hello");
  });
});
