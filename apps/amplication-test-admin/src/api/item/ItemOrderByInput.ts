import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  itemImage?: SortOrder;
  name?: SortOrder;
  note?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
