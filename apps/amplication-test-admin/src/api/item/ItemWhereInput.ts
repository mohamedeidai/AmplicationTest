import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SaleDetailListRelationFilter } from "../saleDetail/SaleDetailListRelationFilter";

export type ItemWhereInput = {
  id?: StringFilter;
  itemImage?: JsonFilter;
  name?: StringNullableFilter;
  note?: StringNullableFilter;
  price?: FloatNullableFilter;
  saleDetails?: SaleDetailListRelationFilter;
};
