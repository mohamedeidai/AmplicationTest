import { SaleDetail as TSaleDetail } from "../api/saleDetail/SaleDetail";

export const SALEDETAIL_TITLE_FIELD = "id";

export const SaleDetailTitle = (record: TSaleDetail): string => {
  return record.id?.toString() || String(record.id);
};
