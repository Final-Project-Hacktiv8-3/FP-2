import {
  NavBar,
  CarouselItem,
  Category,
  HeroProduct,
} from "@components/organisms";

export const Home = () => {
  return (
    <>
      <NavBar />
      <CarouselItem />
      <Category />

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
    </>
  );
};
