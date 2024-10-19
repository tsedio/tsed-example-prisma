import {PlatformTest} from "@tsed/common";
import {PostsController} from "./PostsController";

describe("PostsController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<PostsController>(PostsController);
    // const instance = PlatformTest.invoke<PostsController>(PostsController); // get fresh instance

    expect(instance).toBeInstanceOf(PostsController);
  });
});
