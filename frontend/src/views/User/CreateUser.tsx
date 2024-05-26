import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, FormikHelpers } from "formik";
import { Box, Stack } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { TextField, Button } from "../../components/forms";
import { Container, Snackbar } from "../../components/display";
import { IBaseUser, IHttpResponse, IUser } from "../../types";
import userService from "../../services/user.service";
import createUserValidationSchema from "./CreateUserValidationSchema";
import Loader from "../../components/display/Loader/Loader";

const CreateUser: React.FC = () => {
  const nav = useNavigate();
  const initialValues: IBaseUser = { firstName: "", lastName: "", email: "" };
  const mutation = useMutation<IHttpResponse<IUser>, Error, IBaseUser>({
    mutationFn: (userData) => userService.createUser(userData),
  });

  const handleSubmit = async (
    values: IBaseUser,
    actions: FormikHelpers<IBaseUser>
  ) => {
    const response = await mutation.mutateAsync(values);

    if (response) {
      actions.resetForm();
      setTimeout(() => {
        nav("/");
      }, 1000);
    }
  };

  return (
    <Container maxWidth="sm" title="Create User">
      {mutation.isPending && <Loader />}
      {mutation.isSuccess && (
        <Snackbar
          isOpen={mutation.isSuccess}
          message="User created successfully!"
          severity="success"
        />
      )}
      {mutation.isError && (
        <Snackbar
          isOpen={mutation.isError}
          message={mutation.error.message}
          severity="error"
        />
      )}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={createUserValidationSchema}
      >
        {({ resetForm }) => (
          <Form noValidate>
            <Box sx={{ mt: 2 }}>
              <TextField
                name="firstName"
                label="First name"
                fullWidth
                required
              />
              <TextField name="lastName" label="Last name" fullWidth required />
              <TextField
                name="email"
                label="Email Address"
                fullWidth
                required
              />
              <Stack spacing={2} sx={{ mt: 1 }} direction="row">
                <Button
                  type="button"
                  variant="outlined"
                  color="primary"
                  onClick={() => resetForm()}
                >
                  Clear
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Stack>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default CreateUser;
