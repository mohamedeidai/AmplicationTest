import { JsonValue } from "type-fest";
import { SaleDetail } from "../saleDetail/SaleDetail";

export type Item = {
  createdAt: Date;
  id: string;
  itemImage: JsonValue;
  name: string | null;
  note: string | null;
  price: number | null;
  saleDetails?: Array<SaleDetail>;
  updatedAt: Date;
};
