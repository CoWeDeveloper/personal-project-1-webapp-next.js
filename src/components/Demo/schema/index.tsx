import * as Yup from "yup";

export const demoSchema = Yup.object({
    name: Yup.string().min(3).max(25).required("Name Required"),
    email: Yup.string().email().required("Email Required"),
    country: Yup.string().min(2).max(30).required("Country Required"),
    contact: Yup.string().required("Contact Required")
             .matches(/^\d{11 }$/, "Contact number must be exactly 12 digits"),
    company: Yup.string().required("Company Required"),
    industry: Yup.string().required("Industry Required"),
    products: Yup.array(
        Yup.object().shape({
          value: Yup.string().required("Product value is required"), // Unique identifier for the product
          label: Yup.string().required("Product label is required"), // Display name for the user
        })
      ).min(1, "Please select at least one product"),
    message: Yup.string().required("Message Required")
}) 
