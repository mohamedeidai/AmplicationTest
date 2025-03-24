import { Item } from "../item/Item";
import { Sale } from "../sale/Sale";

export type SaleDetail = {
  createdAt: Date;
  id: string;
  item?: Item;
  quantity: number;
  sale?: Sale;
  unitPrice: number | null;
  updatedAt: Date;
};
