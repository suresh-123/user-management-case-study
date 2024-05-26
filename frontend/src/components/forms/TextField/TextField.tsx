import React from "react";
import { TextFieldProps } from "@mui/material";
import { FieldAttributes, useField } from "formik";
import { StyledTextField } from "./TextField.styles";

type IProps = FieldAttributes<TextFieldProps>;

const TextField: React.FC<IProps> = (props) => {
  const [field, meta] = useField(props.name);

  return (
    <StyledTextField
      {...props}
      {...field}
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
    />
  );
};

export default TextField;
