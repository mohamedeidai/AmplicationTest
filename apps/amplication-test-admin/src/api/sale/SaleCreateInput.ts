import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { SaleDetailCreateNestedManyWithoutSalesInput } from "./SaleDetailCreateNestedManyWithoutSalesInput";
import { Decimal } from "decimal.js";

export type SaleCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  note?: string | null;
  saleDate?: Date | null;
  saleDetails?: SaleDetailCreateNestedManyWithoutSalesInput;
  totalAmount?: Decimal | null;
};
