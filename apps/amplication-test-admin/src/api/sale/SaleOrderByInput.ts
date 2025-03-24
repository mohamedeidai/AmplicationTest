import { SortOrder } from "../../util/SortOrder";

export type SaleOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  saleDate?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
