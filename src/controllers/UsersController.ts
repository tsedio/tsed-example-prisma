import {Controller, Get} from "@tsed/common";
import {Inject} from "@tsed/di";
import {Returns} from "@tsed/schema";
import {UserModel} from "@tsedio/prisma";
import {UserService} from "../services/UserService";

@Controller("/users")
export class UsersController {
  @Inject()
  service: UserService;

  @Get("/")
  @(Returns(200, Array).Of(UserModel).Description("Return a list of User"))
  getAll() {
    return this.service.users({});
  }
}
