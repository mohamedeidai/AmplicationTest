import { SaleDetailCreateNestedManyWithoutItemsInput } from "./SaleDetailCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  name?: string | null;
  note?: string | null;
  price?: number | null;
  saleDetails?: SaleDetailCreateNestedManyWithoutItemsInput;
};
