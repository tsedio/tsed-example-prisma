import {Inject, Injectable} from "@tsed/di";
import {Prisma, Post} from "@prisma/client";
import {PrismaService} from "../services/PrismaService";

@Injectable()
export class PostsRepository {
  @Inject()
  protected prisma: PrismaService;

  get collection() {
    return this.prisma.post;
  }

  get groupBy() {
    return this.collection.groupBy.bind(this.collection);
  }

  async findUnique(args: Prisma.PostFindUniqueArgs): Promise<Post | null> {
    return this.collection.findUnique(args);
  }

  async findFirst(args: Prisma.PostFindFirstArgs): Promise<Post | null> {
    return this.collection.findFirst(args);
  }

  async findMany(args?: Prisma.PostFindManyArgs): Promise<Post[]> {
    return this.collection.findMany(args);
  }

  async create(args: Prisma.PostCreateArgs): Promise<Post> {
    return this.collection.create(args);
  }

  async update(args: Prisma.PostUpdateArgs): Promise<Post> {
    return this.collection.update(args);
  }

  async upsert(args: Prisma.PostUpsertArgs): Promise<Post> {
    return this.collection.upsert(args);
  }

  async delete(args: Prisma.PostDeleteArgs): Promise<Post> {
    return this.collection.delete(args);
  }

  async deleteMany(args: Prisma.PostDeleteManyArgs) {
    return this.collection.deleteMany(args);
  }

  async updateMany(args: Prisma.PostUpdateManyArgs) {
    return this.collection.updateMany(args);
  }

  async aggregate(args: Prisma.PostAggregateArgs) {
    return this.collection.aggregate(args);
  }
}
