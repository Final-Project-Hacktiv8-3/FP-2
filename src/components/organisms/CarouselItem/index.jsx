import { carouselImage } from "@lib/constant";
import { Carousel } from "flowbite-react";

export const CarouselItem = () => {
  return (
    <section className="container mx-auto my-4 mt-[12vh] h-72 px-4 md:px-8">
      <Carousel pauseOnHover className="h-full">
        {carouselImage.map((item, idx) => {
          return (
            <img
              key={idx}
              className="h-full w-full object-cover"
              src={item.src}
              alt={"image carousel"}
            />
          );
        })}
      </Carousel>
    </section>
  );
};
