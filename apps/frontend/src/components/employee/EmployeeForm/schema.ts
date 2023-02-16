import * as yup from "yup";

export const employeeSchema = yup.object({
  firstName: yup.string().min(6).max(10).required("First Name is required"),
  lastName: yup.string().min(6).max(10).required("Last Name is required"),
  email: yup.string().email().required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  gender: yup.string().required("Gender is required"),
});
