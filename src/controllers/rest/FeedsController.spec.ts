import {PlatformTest} from "@tsed/common";
import {FeedsController} from "./FeedsController";

describe("FeedsController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<FeedsController>(FeedsController);
    // const instance = PlatformTest.invoke<FeedsController>(FeedsController); // get fresh instance

    expect(instance).toBeInstanceOf(FeedsController);
  });
});
