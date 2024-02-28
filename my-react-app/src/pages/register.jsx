import AuthLayout from "../components/Layout/AuthLayouts";
import FormLogin from "../components/Fragments/FromLogin";
import FormRegister from "../components/Fragments/FormRegister";
const RegisterPage = () => {
  return (
    <AuthLayout title="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
