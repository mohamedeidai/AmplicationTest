import { Customer } from "../customer/Customer";
import { SaleDetail } from "../saleDetail/SaleDetail";
import { Decimal } from "decimal.js";

export type Sale = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  note: string | null;
  saleDate: Date | null;
  saleDetails?: Array<SaleDetail>;
  totalAmount: Decimal | null;
  updatedAt: Date;
};
