import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const StudentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <TextInput label="email" source="email" type="email" />
        <DateTimeInput label="enrollmentDate" source="enrollmentDate" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
      </SimpleForm>
    </Edit>
  );
};
