import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const StudentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <TextInput label="email" source="email" type="email" />
        <DateTimeInput label="enrollmentDate" source="enrollmentDate" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
      </SimpleForm>
    </Create>
  );
};
