import * as yup from "yup";

export const createScheme = yup.object().shape({
    title: yup.string().trim().required('This field is required')
})