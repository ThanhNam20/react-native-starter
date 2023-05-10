import * as yup from 'yup'

export const authSchema = yup.object({
  email: yup.string().required('Email is required').email('Email is not valid'),
  password: yup.string().required('Password is required'),
  fname: yup.string().required('First Name is required'),
  lname: yup.string().required('Last Name is required'),
  confirm_password: yup.string().oneOf([yup.ref('password')], 'Confirm password must match'),
})

export const loginSchema = authSchema.pick(['email', 'password'])
export const registerSchema = authSchema.pick(['email', 'password', 'confirm_password', 'fname', 'lname'])


export type LoginSchema = yup.InferType<typeof loginSchema>
export type RegisterSchema = yup.InferType<typeof registerSchema>
