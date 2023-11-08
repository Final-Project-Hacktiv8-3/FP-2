import { NavBar, DetailProduct, Footer } from "@components/organisms";
import { useFetchData } from "@hooks/useFetchData";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { id } = useParams();
  const { data } = useFetchData(`products/${id}`);

  return (
    <>
      <NavBar />
      <div className="mt-[10vh]">
        <div className="my-5 flex justify-center ">
          <h1 className="border-b border-secondary text-3xl font-semibold text-primary shadow-md">
            Detail Product
          </h1>
        </div>
        <section className="my-12">
          {data && <DetailProduct product={data} />}
        </section>
      </div>
      <Footer />
    </>
  );
};
