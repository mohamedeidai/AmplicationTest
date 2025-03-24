import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SaleDetailTitle } from "../saleDetail/SaleDetailTitle";

export const ItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Name" source="name" />
        <TextInput label="Note" source="note" />
        <NumberInput label="Price" source="price" />
        <ReferenceArrayInput source="saleDetails" reference="SaleDetail">
          <SelectArrayInput
            optionText={SaleDetailTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
