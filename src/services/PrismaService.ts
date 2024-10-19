import {Injectable, Logger, OnDestroy, OnInit} from "@tsed/common";
import {PrismaClient} from "@prisma/client";
import {Configuration} from "@tsed/di";

@Injectable()
export class PrismaService extends PrismaClient implements OnInit, OnDestroy {
  constructor(
    @Configuration() settings: Configuration,
    protected logger: Logger
  ) {
    super(settings.get("prisma"));
  }

  async $onInit(): Promise<void> {
    this.logger.info("Connection to prisma database");
    await this.$connect();
  }

  async $onDestroy(): Promise<void> {
    this.logger.info("Disconnection from prisma database");
    await this.$disconnect();
  }
}
