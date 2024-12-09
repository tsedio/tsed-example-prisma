import { PlatformTest } from "@tsed/platform-http/testing";
import SuperTest from "supertest";

import { Server } from "../../Server.js";
import { FeedsController } from "./FeedsController.js";

describe("FeedsController", () => {
  let request: SuperTest.SuperTest<SuperTest.Test>;

  beforeEach(
    PlatformTest.bootstrap(Server, {
      mount: {
        "/": [FeedsController]
      }
    })
  );

  afterEach(PlatformTest.reset);

  it("should call GET /feeds", async () => {
    const request = SuperTest(PlatformTest.callback());
    const response = await request.get("/feeds").expect(200);

    expect(response.text).toEqual("hello");
  });
});
