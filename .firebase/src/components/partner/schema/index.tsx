import * as Yup from "yup";

export const partnerSchema = Yup.object({
    name: Yup.string().min(3).max(25).required("Name Required"),
    contact: Yup.string().required("Contact Required")
         .matches(/^\d{11}$/, "Contact number must be exactly 12 digits"),
    email: Yup.string().email().required("Email Required"),
    company: Yup.string().required("Company Required"),
    designation: Yup.string().required("Designation Required"),
    message: Yup.string().required("Message Required")

})




