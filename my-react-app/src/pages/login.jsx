import AuthLayout from "../components/Layout/AuthLayouts";
import FormLogin from "../components/Fragments/FromLogin";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
