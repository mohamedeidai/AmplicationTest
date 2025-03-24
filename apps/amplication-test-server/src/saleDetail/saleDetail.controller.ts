import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SaleDetailService } from "./saleDetail.service";
import { SaleDetailControllerBase } from "./base/saleDetail.controller.base";

@swagger.ApiTags("saleDetails")
@common.Controller("saleDetails")
export class SaleDetailController extends SaleDetailControllerBase {
  constructor(protected readonly service: SaleDetailService) {
    super(service);
  }
}
