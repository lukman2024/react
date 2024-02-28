import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm label="email" type="email" placeholder="example@mail.com" nama="Email" />
      <InputForm label="Password" type="Password" placeholder="******" nama="Password" />
      <Button classname="bg-blue-600 w-full">login</Button>
    </form>
  );
};

export default FormLogin;
