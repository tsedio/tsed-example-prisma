import {Inject, Module} from "@tsed/di";
import {Constant} from "@tsed/common";
import {Env} from "@tsed/core";
import {UsersRepository} from "@tsed/prisma";

@Module()
export class BootDBModule {
  @Constant("env", Env.DEV)
  env: Env;

  @Inject()
  usersRepository: UsersRepository;

  async $onReady() {
    if (this.env === Env.DEV) {
      const countUser = await this.usersRepository.collection.count();

      if (!countUser) {
        await this.usersRepository.create({
          data: {
            email: "email@test",
            name: "name"
          }
        });
      }
    }
  }
}
