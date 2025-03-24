import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ITEM_TITLE_FIELD } from "../item/ItemTitle";
import { SALE_TITLE_FIELD } from "../sale/SaleTitle";

export const SaleDetailList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SaleDetails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
