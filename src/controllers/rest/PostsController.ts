import { Controller, Inject } from "@tsed/di";
import { NotFound } from "@tsed/exceptions";
import { BodyParams, PathParams } from "@tsed/platform-params";
import { PostModel, PostsRepository } from "@tsed/prisma";
import { Delete, Description, Get, Groups, Name, Post, Put, Returns, Summary } from "@tsed/schema";

// OR import {PostsRepository} from "../../services/PostsRepository";

@Controller("/posts")
@Name("Posts")
export class PostsController {
  @Inject()
  protected service: PostsRepository;

  @Get("/:id")
  @Summary("Fetch a single post by its id")
  @Returns(200, PostModel)
  @Returns(404)
  async getById(@PathParams("id") id: string): Promise<PostModel> {
    const model = await this.service.findUnique({ where: { id: Number(id) } });

    if (!model) {
      throw new NotFound("Post not found");
    }

    return model;
  }

  @Post("/")
  @Summary("Create a new post")
  @Returns(201, PostModel)
  createDraft(@BodyParams("post") @Groups("creation") post: PostModel, @BodyParams("authorEmail") authorEmail: string) {
    return this.service.create({
      data: {
        title: post.title,
        content: post.content,
        author: {
          connect: { email: authorEmail }
        }
      }
    });
  }

  @Put("/publish/:id")
  @Summary("Publish a post by its id")
  @Returns(200, PostModel)
  async publishPost(@PathParams("id") id: string): Promise<PostModel> {
    return this.service.update({
      where: { id: Number(id) },
      data: { published: true }
    });
  }

  @Delete("/:id")
  @Summary("Delete a post by its id")
  @Returns(200, PostModel)
  async deletePost(@PathParams("id") id: string): Promise<PostModel> {
    return this.service.delete({ where: { id: Number(id) } });
  }

  @Get("/search/:searchString")
  @Description("Filter posts by title or content")
  @(Returns(200, Array).Of(PostModel))
  async getFilteredPosts(@PathParams("searchString") searchString: string): Promise<PostModel[]> {
    return this.service.findMany({
      where: {
        OR: [
          {
            title: { contains: searchString }
          },
          {
            content: { contains: searchString }
          }
        ]
      }
    });
  }
}
