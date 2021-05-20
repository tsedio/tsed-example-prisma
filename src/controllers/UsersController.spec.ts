import { PlatformTest } from "@tsed/common";
import { UsersController } from "./UsersController";

describe("UsersController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<UsersController>(UsersController);
    // const instance = PlatformTest.invoke<UsersController>(UsersController); // get fresh instance

    expect(instance).toBeInstanceOf(UsersController);
  });
});
