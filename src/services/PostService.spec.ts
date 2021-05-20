import { PlatformTest } from "@tsed/common";
import { PostService } from "./PostService";

describe("PostService", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<PostService>(PostService);
    // const instance = PlatformTest.invoke<PostService>(PostService); // get fresh instance

    expect(instance).toBeInstanceOf(PostService);
  });
});
