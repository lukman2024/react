const Button = (props) => {
  const { children, variant = "bg-black" } = props;
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${props.variant} text-white`} type="submit">
      {props.children}
    </button>
  );
};

export default Button;
