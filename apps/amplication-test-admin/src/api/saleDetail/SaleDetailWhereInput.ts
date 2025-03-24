import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { SaleWhereUniqueInput } from "../sale/SaleWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type SaleDetailWhereInput = {
  id?: StringFilter;
  item?: ItemWhereUniqueInput;
  quantity?: IntFilter;
  sale?: SaleWhereUniqueInput;
  unitPrice?: FloatNullableFilter;
};
