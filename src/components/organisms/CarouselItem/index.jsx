import { Carousel } from "flowbite-react";

export const CarouselItem = () => {
  return (
    <section className="container mx-auto my-4 mt-[12vh] h-64 px-4 md:px-8">
      <Carousel indicators={false} pauseOnHover className="h-full">
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        />
      </Carousel>
    </section>
  );
};
