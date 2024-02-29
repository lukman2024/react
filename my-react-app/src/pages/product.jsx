import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CartProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/product1.jpg" />
        <CardProduct.Body title="fixie new spect">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nihil quibusdam doloribus.</CardProduct.Body>
        <CardProduct.Footer price="Free!!!" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/product1.jpg" />
        <CardProduct.Body title="fixie new spect">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nihil quibusdam doloribus.</CardProduct.Body>
        <CardProduct.Footer price="Free!!!" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
