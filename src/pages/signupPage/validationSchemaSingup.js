import * as yup from  'yup';


export const validationSchema = yup.object({
name:yup
    .string("enter your first name")
    .required("name is required"),
email:yup
    .string("enter your email")
    .email("enter a valid email")
    .required("email address is required"),
password:yup
    .string()
    .min(8,"must be at least 8 characters long")
    .required()
})