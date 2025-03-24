import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { SaleWhereUniqueInput } from "../sale/SaleWhereUniqueInput";

export type SaleDetailCreateInput = {
  item: ItemWhereUniqueInput;
  quantity: number;
  sale: SaleWhereUniqueInput;
  unitPrice?: number | null;
};
