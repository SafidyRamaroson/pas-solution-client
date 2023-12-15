import * as yup from  'yup';


export const validationSchema = yup.object({
firstName:yup
    .string("enter your first name")
    .required("first name is required"),
lastName:yup
    .string("enter your last name")
    .required("last is required"),
email:yup
    .string("enter your email")
    .email("enter a valid emaiil")
    .required("Email address is required"),
subjectEmail:yup
    .string("enter your object message")
    .required("Subject email is required"),
message:yup
    .string("type your message")
    .required("message is required")
})