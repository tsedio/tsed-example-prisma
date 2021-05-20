import {Injectable, Logger, OnDestroy, OnInit} from "@tsed/common";
import {PrismaClient} from "@prisma/client";
import {Inject} from "@tsed/di";

@Injectable()
export class PrismaService extends PrismaClient implements OnInit, OnDestroy {
  @Inject()
  logger: Logger;

  async $onInit() {
    this.logger.info("Connection to prisma database");
    await this.$connect();
  }

  async $onDestroy() {
    this.logger.info("Disconnection from prisma database");
    await this.$disconnect();
  }
}
