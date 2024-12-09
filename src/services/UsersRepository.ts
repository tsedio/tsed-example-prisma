import { Prisma, User } from "@prisma/client";
import { inject, Injectable } from "@tsed/di";

import { PrismaService } from "../services/PrismaService.js";

@Injectable()
export class UsersRepository {
  protected prisma = inject(PrismaService);

  get collection() {
    return this.prisma.user;
  }

  get groupBy() {
    return this.collection.groupBy.bind(this.collection);
  }

  async findUnique(args: Prisma.UserFindUniqueArgs): Promise<User | null> {
    return this.collection.findUnique(args);
  }

  async findFirst(args: Prisma.UserFindFirstArgs): Promise<User | null> {
    return this.collection.findFirst(args);
  }

  async findMany(args?: Prisma.UserFindManyArgs): Promise<User[]> {
    return this.collection.findMany(args);
  }

  async create(args: Prisma.UserCreateArgs): Promise<User> {
    return this.collection.create(args);
  }

  async update(args: Prisma.UserUpdateArgs): Promise<User> {
    return this.collection.update(args);
  }

  async upsert(args: Prisma.UserUpsertArgs): Promise<User> {
    return this.collection.upsert(args);
  }

  async delete(args: Prisma.UserDeleteArgs): Promise<User> {
    return this.collection.delete(args);
  }

  async deleteMany(args: Prisma.UserDeleteManyArgs) {
    return this.collection.deleteMany(args);
  }

  async updateMany(args: Prisma.UserUpdateManyArgs) {
    return this.collection.updateMany(args);
  }

  async aggregate(args: Prisma.UserAggregateArgs) {
    return this.collection.aggregate(args);
  }
}
