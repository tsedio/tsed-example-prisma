import { Env } from "@tsed/core";
import { constant, inject, Module } from "@tsed/di";
import { UsersRepository } from "@tsed/prisma";

@Module()
export class BootDBModule {
  protected env = constant<Env>("env", Env.DEV);
  protected usersRepository = inject(UsersRepository);

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
