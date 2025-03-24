import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { SaleDetailTitle } from "../saleDetail/SaleDetailTitle";

export const SaleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <TextInput label="Note" multiline source="note" />
        <DateTimeInput label="SaleDate" source="saleDate" />
        <ReferenceArrayInput source="saleDetails" reference="SaleDetail">
          <SelectArrayInput
            optionText={SaleDetailTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="TotalAmount" source="totalAmount" />
      </SimpleForm>
    </Create>
  );
};
