import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { ITEM_TITLE_FIELD } from "../item/ItemTitle";
import { SALE_TITLE_FIELD } from "../sale/SaleTitle";

export const SaleDetailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Item" source="item.id" reference="Item">
          <TextField source={ITEM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Quantity" source="quantity" />
        <ReferenceField label="Sale" source="sale.id" reference="Sale">
          <TextField source={SALE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="UnitPrice" source="unitPrice" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
