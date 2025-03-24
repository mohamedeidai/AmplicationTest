import { InputJsonValue } from "../../types";
import { SaleDetailUpdateManyWithoutItemsInput } from "./SaleDetailUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  itemImage?: InputJsonValue;
  name?: string | null;
  note?: string | null;
  price?: number | null;
  saleDetails?: SaleDetailUpdateManyWithoutItemsInput;
};
