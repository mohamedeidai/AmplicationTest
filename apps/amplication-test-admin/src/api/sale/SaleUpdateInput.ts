import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { SaleDetailUpdateManyWithoutSalesInput } from "./SaleDetailUpdateManyWithoutSalesInput";
import { Decimal } from "decimal.js";

export type SaleUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  note?: string | null;
  saleDate?: Date | null;
  saleDetails?: SaleDetailUpdateManyWithoutSalesInput;
  totalAmount?: Decimal | null;
};
