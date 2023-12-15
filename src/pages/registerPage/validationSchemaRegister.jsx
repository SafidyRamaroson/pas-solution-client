import * as yup from 'yup';


export const validationSchema = yup.object({
    email:yup
        .string().email("enter a valid email")
        .required("Email address is required"),
    password:yup
        .string()
        .required()
})