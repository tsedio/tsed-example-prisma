import { Controller, Inject } from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import { UserModel, UsersRepository } from "@tsed/prisma";
import { Get, Groups, Post, Returns, Summary } from "@tsed/schema";

// import {UsersRepository} from "../services/UsersRepository";

@Controller("/users")
export class UsersController {
  @Inject()
  protected service: UsersRepository;

  @Post("/")
  @Summary("Create a new user")
  @Returns(201, UserModel)
  async signupUser(@BodyParams() @Groups("creation") user: UserModel): Promise<UserModel> {
    return this.service.create({
      data: user as never
    });
  }

  @Get("/")
  @Summary("Filter posts by title or content")
  @(Returns(200, Array).Of(UserModel).Description("Return a list of User"))
  getAll() {
    return this.service.findMany();
  }
}
