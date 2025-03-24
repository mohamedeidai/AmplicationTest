import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ItemTitle } from "../item/ItemTitle";
import { SaleTitle } from "../sale/SaleTitle";

export const SaleDetailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
