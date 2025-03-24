import { SaleCreateNestedManyWithoutCustomersInput } from "./SaleCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  email?: string | null;
  name?: string | null;
  note?: string | null;
  sales?: SaleCreateNestedManyWithoutCustomersInput;
};
