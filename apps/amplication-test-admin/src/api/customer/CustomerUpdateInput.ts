import { SaleUpdateManyWithoutCustomersInput } from "./SaleUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  email?: string | null;
  name?: string | null;
  note?: string | null;
  sales?: SaleUpdateManyWithoutCustomersInput;
};
