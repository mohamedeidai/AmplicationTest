import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SaleListRelationFilter } from "../sale/SaleListRelationFilter";

export type CustomerWhereInput = {
  address?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  note?: StringNullableFilter;
  sales?: SaleListRelationFilter;
};
