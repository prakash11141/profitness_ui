import {
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { productCategory } from "../constant/generalconstant";

const AddProduct = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        brand: "",
        price: 0,
        quantity: 1,
        category: "",
        freeShipping: false,
        description: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("Name is required")
          .trim()
          .max(55, "Name must be at max 55 characters."),
        brand: Yup.string()
          .trim()
          .max(55, "Brand must be at max 55 characters."),
        price: Yup.number()
          .min(0, "Price must be at least 0.")
          .required("Price is required."),
        quantity: Yup.number()
          .min(1, "Quantity must be at least 1.")
          .required("Quantity is required."),
        category: Yup.string()
          .required("Category is required.")
          .trim()
          .oneOf(productCategory),
        freeShipping: Yup.boolean().default(false),
        description: Yup.string()
          .required("Description is required.")
          .trim()
          .min(0, "Description must be at least 500 characters.")
          .max(1000, "Description must be at max 1000 characters."),
        image: Yup.string().trim().nullable(),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, touched, errors, getFieldProps }) => (
        <form onSubmit={handleSubmit}>
          <Typography variant="h5">Add Product</Typography>
          <FormControl>
            <TextField label="Name" {...getFieldProps("name")} />
            {touched.name && errors.name ? (
              <FormHelperText error>{errors.name}</FormHelperText>
            ) : null}
          </FormControl>

          <FormControl>
            <TextField label="Brand" {...getFieldProps("brand")} />
            {touched.brand && errors.brand ? (
              <FormHelperText error>{errors.brand}</FormHelperText>
            ) : null}
          </FormControl>
          <FormControl>
            <TextField
              label="Price"
              {...getFieldProps("price")}
              type="number"
            />
            {touched.price && errors.price ? (
              <FormHelperText error>{errors.price}</FormHelperText>
            ) : null}
          </FormControl>

          <FormControl>
            <TextField
              label="Quantity"
              {...getFieldProps("quantity")}
              type="number"
            />
            {touched.quantity && errors.quantity ? (
              <FormHelperText error>{errors.quantity}</FormHelperText>
            ) : null}
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select label="Category" {...getFieldProps("category")}>
              {productCategory.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            {touched.category && errors.category ? (
              <FormHelperText error>{errors.category}</FormHelperText>
            ) : null}
          </FormControl>
          <FormControl>
            <Checkbox defaultChecked {...getFieldProps("freeShipping")} />
          </FormControl>
          <Button type="submit" variant="contained" color="secondary">
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default AddProduct;
