import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SaleDetailListRelationFilter } from "../saleDetail/SaleDetailListRelationFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type SaleWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  note?: StringNullableFilter;
  saleDate?: DateTimeNullableFilter;
  saleDetails?: SaleDetailListRelationFilter;
  totalAmount?: DecimalNullableFilter;
};
