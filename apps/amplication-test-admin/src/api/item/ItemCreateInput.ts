import { InputJsonValue } from "../../types";
import { SaleDetailCreateNestedManyWithoutItemsInput } from "./SaleDetailCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  itemImage?: InputJsonValue;
  name?: string | null;
  note?: string | null;
  price?: number | null;
  saleDetails?: SaleDetailCreateNestedManyWithoutItemsInput;
};
