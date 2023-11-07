import {
  NavBar,
  CarouselItem,
  Category,
  HeroProduct,
  ProductCard,
  Footer,
} from "@components/organisms";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "@redux/products/action";

export const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <CarouselItem />
      <Category />

      <div className="flex items-center gap-4 px-6 md:px-12">
        <h3 className="text-center text-xl font-bold  md:text-left">
          Popular Products
        </h3>
        <Link to="/products" className="text-sm text-accent">
          See All
        </Link>
      </div>
      <div className="my-10 flex flex-wrap justify-center gap-8">
        {products.data.slice(0, 4).map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>

      <HeroProduct
        id={5}
        src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
        title="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
        desc="From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection."
      />
      <HeroProduct
        side
        id={12}
        src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
        title="WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive"
        desc="Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty"
        txtBtn="See Product"
      />
      <Footer />
    </>
  );
};
