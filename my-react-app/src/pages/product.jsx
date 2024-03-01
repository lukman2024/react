import { Fragment } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CartProduct";
import Counter from "../components/Fragments/counter";

const products = [
  {
    id: 1,
    name: "fixie Baru",
    price: "freee!!",
    image: "/images/product1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Ad nihile`,
  },
  {
    id: 2,
    name: "fixie Baru",
    price: "Bayar satt!!",
    image: "/images/product1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur 
  adipisicing elit.`,
  },
  {
    id: 3,
    name: "fixie Baru",
    price: "Bayar satt!!",
    image: "/images/product1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur 
  adipisicing elit.`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <Fragment>
      <div
        className="flex justify-end h-20
      bg-blue-600 text-white items-center px-10"
      >
        {email}
        <Button className="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
      <div className="flex w-100 justify-center">
        <Counter></Counter>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
