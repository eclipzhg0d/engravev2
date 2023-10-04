import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  fullname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export default SignUpSchema;
