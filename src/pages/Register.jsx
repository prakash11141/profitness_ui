import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import $axios from "../lib/axios.instance";

const Register = () => {
  const navigate = useNavigate();
  const { isLoading, isError, error, mutate } = useMutation({
    mutationKey: ["register-user"],
    mutationFn: async (values) => {
      return await $axios.post("/user/register", values);
    },
    onSuccess: (response) => {
      console.log(response);
      navigate("/login");
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
          firstName: "",
          middleName: "",
          lastName: "",
          email: "",
          password: "",
          role: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required("First name is required.")
            .trim()
            .max(25, "First name must be at max 25 characters."),
          middleName: Yup.string()
            .trim()
            .max(25, "Middle name must be at max 25 characters."),
          lastName: Yup.string()
            .required("Last name is required.")
            .trim()
            .max(25, "Last name must be at max 25 characters."),
          email: Yup.string()
            .email("Must be valid email.")
            .required("Email is required.")
            .trim()
            .lowercase()
            .max(55, "Email must be at max 55 characters."),
          password: Yup.string()
            .required("Password is required.")
            .trim()
            .min(4, "Password must be at least 4 characters.")
            .max(20, "Password must be at max 20 characters."),
          role: Yup.string()
            .required("Role is required.")
            .trim()
            .oneOf(["buyer", "seller"]),
        })}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "2rem",
              width: "400px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <Typography variant="h5">Sign Up</Typography>
            <FormControl>
              <TextField
                label="First Name"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <FormHelperText error>{formik.errors.firstName}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField
                label="Middle Name"
                {...formik.getFieldProps("middleName")}
              />
              {formik.touched.middleName && formik.errors.middleName ? (
                <FormHelperText error>
                  {formik.errors.middleName}
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField
                label="Last Name"
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <FormHelperText error>{formik.errors.lastName}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField label="Email" {...formik.getFieldProps("email")} />
              {formik.touched.email && formik.errors.email ? (
                <FormHelperText error>{formik.errors.email}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField
                label="Password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <FormHelperText error>{formik.errors.password}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select label="Role" {...formik.getFieldProps("role")}>
                <MenuItem value="seller">Seller</MenuItem>
                <MenuItem value="buyer">Buyer</MenuItem>
              </Select>
            </FormControl>

            <Button type="submit" variant="contained" color="success">
              Register
            </Button>
            <Link to="/login">
              <Typography variant="subtitle2" sx={{ color: "blue" }}>
                Already registered? Login
              </Typography>
            </Link>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Register;
