import { SortOrder } from "../../util/SortOrder";

export type SaleDetailOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  quantity?: SortOrder;
  saleId?: SortOrder;
  unitPrice?: SortOrder;
  updatedAt?: SortOrder;
};
