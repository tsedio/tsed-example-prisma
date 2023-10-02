import { PlatformTest } from "@tsed/common";
import SuperTest from "supertest";
import { FeedsController } from "./FeedsController";
import { Server } from "../../Server";

describe("FeedsController", () => {
  let request: SuperTest.SuperTest<SuperTest.Test>;

  beforeEach(PlatformTest.bootstrap(Server, {
    mount: {
      "/": [FeedsController]
    }
  }));
  beforeEach(() => {
    request = SuperTest(PlatformTest.callback());
  });

  afterEach(PlatformTest.reset);

  it("should call GET /feeds", async () => {
     const response = await request.get("/feeds").expect(200);

     expect(response.text).toEqual("hello");
  });
});
