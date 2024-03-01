import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CartProduct";

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

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
