import { SaleDetailUpdateManyWithoutItemsInput } from "./SaleDetailUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  name?: string | null;
  note?: string | null;
  price?: number | null;
  saleDetails?: SaleDetailUpdateManyWithoutItemsInput;
};
