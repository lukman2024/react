import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Fullname" type="text" placeholder="insert your name here..." nama="fullname" />
      <InputForm label="email" type="email" placeholder="example@mail.com" nama="Email" />
      <InputForm label="Password" type="Password" placeholder="******" nama="Password" />
      <InputForm label="Confirm Password" type="Password" placeholder="******" nama="confirmPassword" />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
