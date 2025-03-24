import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ItemTitle } from "../item/ItemTitle";
import { SaleTitle } from "../sale/SaleTitle";

export const SaleDetailCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="item.id" reference="Item" label="Item">
          <SelectInput optionText={ItemTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Quantity" source="quantity" />
        <ReferenceInput source="sale.id" reference="Sale" label="Sale">
          <SelectInput optionText={SaleTitle} />
        </ReferenceInput>
        <NumberInput label="UnitPrice" source="unitPrice" />
      </SimpleForm>
    </Create>
  );
};
