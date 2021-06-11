import {Controller, Get} from "@tsed/common";
import {Inject} from "@tsed/di";
import {Returns, Summary} from "@tsed/schema";
import {PostsRepository, PostModel} from "prisma/generated/tsed";
// import {PostsRepository} from "../services/PostsRepository";

@Controller("/feeds")
export class FeedsController {
  @Inject()
  protected service: PostsRepository;

  @Get("/")
  @Summary("Fetch all published posts")
  @(Returns(200, Array).Of(PostModel))
  getFeeds(): Promise<PostModel[]> {
    return this.service.findMany({
      where: {published: true}
    });
  }
}
