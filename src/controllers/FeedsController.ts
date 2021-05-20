import {Controller, Get} from "@tsed/common";
import {PostService} from "../services/PostService";
import {Inject} from "@tsed/di";
import {PostModel} from "@tsedio/prisma";
import {Returns} from "@tsed/schema";

@Controller("/feeds")
export class FeedsController {
  @Inject()
  service: PostService;

  @Get("/")
  @(Returns(200, Array).Of(PostModel))
  getFeeds() {
    return this.service.posts({
      where: {published: true}
    });
  }
}
