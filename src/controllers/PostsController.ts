import {Controller, Get, PathParams} from "@tsed/common";
import {Inject} from "@tsed/di";
import {Name, Returns} from "@tsed/schema";
import {PostService} from "../services/PostService";
import {NotFound} from "@tsed/exceptions";
import {PostModel} from "@tsedio/prisma";

@Controller("/posts")
@Name("Posts")
export class PostsController {
  @Inject()
  service: PostService;

  @Get("/:id")
  @(Returns(200, PostModel).Description("Get a Post by his id"))
  async getById(@PathParams("id") id: string): Promise<PostModel> {
    const model = await this.service.post({id: Number(id)});

    if (!model) {
      throw new NotFound("Post not found");
    }

    return model;
  }

  @Get("/search/:searchString")
  @(Returns(200, Array).Of(PostModel))
  async getFilteredPosts(@PathParams("searchString") searchString: string): Promise<PostModel[]> {
    return this.service.posts({
      where: {
        OR: [
          {
            title: {contains: searchString}
          },
          {
            content: {contains: searchString}
          }
        ]
      }
    });
  }
}
