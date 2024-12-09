import { PrismaClient } from "@prisma/client";
import { constant, Injectable, logger, OnDestroy, OnInit } from "@tsed/di";

@Injectable()
export class PrismaService extends PrismaClient implements OnInit, OnDestroy {
  constructor() {
    super(constant("prisma"));
  }

  async $onInit(): Promise<void> {
    logger().info("Connection to prisma database");
    await this.$connect();
  }

  async $onDestroy(): Promise<void> {
    logger().info("Disconnection from prisma database");
    await this.$disconnect();
  }
}
