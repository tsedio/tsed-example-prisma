import {BodyParams, Controller, Get, Post} from "@tsed/common";
import {Inject} from "@tsed/di";
import {Groups, Returns, Summary} from "@tsed/schema";
import {UserModel, UsersRepository} from "@tsedio/prisma";

// import {UsersRepository} from "../services/UsersRepository";

@Controller("/users")
export class UsersController {
  @Inject()
  protected service: UsersRepository;

  @Post("/")
  @Summary("Create a new user")
  @Returns(201, UserModel)
  async signupUser(@BodyParams() @Groups("creation") user: UserModel): Promise<UserModel> {
    return this.service.create({data: user});
  }

  @Get("/")
  @Summary("Filter posts by title or content")
  @(Returns(200, Array).Of(UserModel).Description("Return a list of User"))
  getAll() {
    return this.service.findMany();
  }
}
