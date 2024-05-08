import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import $axios from "../lib/axios.instance";

const Login = () => {
  const navigate = useNavigate();
  const { isLoading, isError, error, mutate } = useMutation({
    mutationKey: ["login-user"],
    mutationFn: async (values) => {
      return await $axios.post("/user/login", values);
    },
    onSuccess: (response) => {
      console.log(response);
      navigate("/home");
    },
    onError: (error) => {
      console.log(error?.response?.data?.message);
    },
  });
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {isLoading && <LinearProgress color="success" />}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Must be valid email.")
            .required("Email is required.")
            .trim()
            .lowercase()
            .max(55, "Email must be at max 55 characters."),
          password: Yup.string().required("Password is required.").trim(),
        })}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {({ handleSubmit, getFieldProps, touched, errors }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "2rem",
              width: "400px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <Typography variant="h5">Sign In</Typography>
            <FormControl>
              <TextField label="Email" {...getFieldProps("email")} />
              {touched.email && errors.email ? (
                <FormHelperText error>{errors.email}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField label="Password" {...getFieldProps("password")} />
              {touched.password && errors.password ? (
                <FormHelperText error>{errors.password}</FormHelperText>
              ) : null}
            </FormControl>
            <Button type="sumit" variant="contained" color="success">
              Submit
            </Button>
            <Link to="/register">
              <Typography>New Here? Register</Typography>
            </Link>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Login;
