import AuthLayout from "../components/Layout/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayout title="register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
