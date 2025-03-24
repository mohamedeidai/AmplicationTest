import { Module } from "@nestjs/common";
import { SaleDetailModuleBase } from "./base/saleDetail.module.base";
import { SaleDetailService } from "./saleDetail.service";
import { SaleDetailController } from "./saleDetail.controller";
import { SaleDetailResolver } from "./saleDetail.resolver";

@Module({
  imports: [SaleDetailModuleBase],
  controllers: [SaleDetailController],
  providers: [SaleDetailService, SaleDetailResolver],
  exports: [SaleDetailService],
})
export class SaleDetailModule {}
