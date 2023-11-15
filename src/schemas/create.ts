import * as yup from "yup";

export const createScheme = yup.object().shape({
    title: yup.string().required('This field is required')
})