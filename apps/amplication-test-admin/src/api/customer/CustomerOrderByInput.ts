import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  note?: SortOrder;
  updatedAt?: SortOrder;
};
