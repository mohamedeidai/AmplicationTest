import { Sale } from "../sale/Sale";

export type Customer = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  note: string | null;
  sales?: Array<Sale>;
  updatedAt: Date;
};
