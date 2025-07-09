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
  FormControlLabel,
  Box,
} from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { productCategory } from "../constant/generalconstant";
import axios from "axios";

const AddProduct = () => {
  const [imageFile, setImageFile] = useState(null);

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
          .oneOf(productCategory, "Invalid category."),
        freeShipping: Yup.boolean(),
        description: Yup.string()
          .required("Description is required.")
          .trim()
          .max(100000, "Description must be at max 100000 characters."),
      })}
      onSubmit={async (values, { resetForm }) => {
        try {
          const token = localStorage.getItem("token");
          const formData = new FormData();

          // Append fields
          for (let key in values) {
            formData.append(key, values[key]);
          }

          // Append image if selected
          if (imageFile) {
            formData.append("image", imageFile);
          }

          const response = await axios.post(
            "http://localhost:4000/product/add",
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );

          console.log("Product saved:", response.data);
          resetForm();
          setImageFile(null);
          alert("Product added successfully!");
        } catch (error) {
          console.error("Error adding product:", error);
          alert("Failed to add product");
        }
      }}
    >
      {({
        handleSubmit,
        touched,
        errors,
        values,
        handleChange,
        handleBlur,
        setFieldValue,
      }) => (
        <Box
          sx={{
            maxWidth: 500,
            mx: "auto",
            mt: 4,
            px: 2,
            border: "1px solid #ccc",
            borderRadius: 2,
            boxShadow: 2,
            backgroundColor: "#fafafa",
          }}
        >
          <form onSubmit={handleSubmit} noValidate>
            <Typography
              color={"#0E46A3"}
              variant="h5"
              gutterBottom
              sx={{ textAlign: "center", mb: 2, mt: 2 }}
            >
              Add Product
            </Typography>

            {/* Other fields */}
            <FormControl fullWidth margin="normal">
              <TextField
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <TextField
                label="Brand"
                name="brand"
                value={values.brand}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.brand && Boolean(errors.brand)}
                helperText={touched.brand && errors.brand}
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <TextField
                label="Price"
                name="price"
                type="number"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.price && Boolean(errors.price)}
                helperText={touched.price && errors.price}
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <TextField
                label="Quantity"
                name="quantity"
                type="number"
                value={values.quantity}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.quantity && Boolean(errors.quantity)}
                helperText={touched.quantity && errors.quantity}
              />
            </FormControl>

            <FormControl
              fullWidth
              margin="normal"
              error={touched.category && Boolean(errors.category)}
            >
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                name="category"
                value={values.category}
                label="Category"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {productCategory.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
              {touched.category && errors.category && (
                <FormHelperText>{errors.category}</FormHelperText>
              )}
            </FormControl>

            <FormControlLabel
              control={
                <Checkbox
                  name="freeShipping"
                  checked={values.freeShipping}
                  onChange={(e) =>
                    setFieldValue("freeShipping", e.target.checked)
                  }
                />
              }
              label="Free Shipping"
              sx={{ mt: 1 }}
            />

            <FormControl fullWidth margin="normal">
              <TextField
                label="Description"
                name="description"
                multiline
                minRows={4}
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.description && Boolean(errors.description)}
                helperText={touched.description && errors.description}
              />
            </FormControl>

            {/* Image Upload Field */}
            <FormControl fullWidth margin="normal">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
              />
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 3, display: "block", mx: "auto" }}
            >
              Submit
            </Button>
          </form>
        </Box>
      )}
    </Formik>
  );
};

export default AddProduct;
