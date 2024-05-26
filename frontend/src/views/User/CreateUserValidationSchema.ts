import * as Yup from "yup";
import { IBaseUser } from "../../types";

const createUserValidationSchema: Yup.Schema<IBaseUser> = Yup.object().shape({
  firstName: Yup.string()
    .matches(
      /^[a-zA-Z]+$/,
      "First name should contain only alphabetical characters"
    )
    .max(100, "First name should be less than 100 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .matches(
      /^[a-zA-Z]+$/,
      "Last name should contain only alphabetical characters"
    )
    .max(100, "Last name should be less than 100 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required"),
});

export default createUserValidationSchema;
