import * as graphql from "@nestjs/graphql";
import { SaleDetailResolverBase } from "./base/saleDetail.resolver.base";
import { SaleDetail } from "./base/SaleDetail";
import { SaleDetailService } from "./saleDetail.service";

@graphql.Resolver(() => SaleDetail)
export class SaleDetailResolver extends SaleDetailResolverBase {
  constructor(protected readonly service: SaleDetailService) {
    super(service);
  }
}
