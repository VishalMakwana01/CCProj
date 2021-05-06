import React from "react";

import { Group, FormInputField } from "./styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <Group>
      <FormInputField
        onChange={handleChange}
        {...otherProps}
        placeholder={label}
      />
    </Group>
  );
};

export default FormInput;
