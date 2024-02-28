import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Fullname" type="text" placeholder="insert your name here..." name="fullname" />
      <InputForm label="email" type="email" placeholder="example@mail.com" name="Email" />
      <InputForm label="Password" type="Password" placeholder="******" name="Password" />
      <InputForm label="Confirm Password" type="Password" placeholder="******" name="confirmPassword" />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
