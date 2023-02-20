import * as yup from "yup";

export const employeeSchema = yup.object({
  firstName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
    .min(6, "First Name must be at least 6 characters")
    .max(10, "First Name must be at most 10 characters")
    .required("First Name is required"),
  lastName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
    .min(6, "First Name must be at least 6 characters")
    .max(10, "First Name must be at most 10 characters")
    .required("Last Name is required"),
  email: yup.string().email().required("Email is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/(?:\+94)[0-9]{9}$/, "Phone number must be in +94123456789 format"),
  gender: yup.string().required("Gender is required"),
});
