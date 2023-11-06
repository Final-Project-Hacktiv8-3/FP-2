import { Card, NavBar } from "@components/organisms";
import { useFetchData } from "@hooks/useFetchData";
import { useEffect, useState } from "react";

const categories = [
  {
    id: 1,
    name: "men's clothing",
  },
  {
    id: 2,
    name: "women's clothing",
  },
  {
    id: 3,
    name: "electronics",
  },
  {
    id: 4,
    name: "jewelery",
  },
];

export const Products = () => {
  const { data } = useFetchData("products");

  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState(data);

  useEffect(() => {
    if (category === "all") {
      setProducts(data);
    } else {
      const filtered = data.filter((item) => item.category === category);
      setProducts(filtered);
    }
  }, [category, data]);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="mt-[10vh] flex flex-col px-6 md:px-12">
        <div className="my-5 flex justify-center ">
          <h1 className="border-b border-secondary text-3xl font-semibold capitalize text-primary shadow-md">
            All Products
          </h1>
        </div>
        <div className="my-4 flex w-full items-center gap-x-2 text-primary">
          <span>Category:</span>
          <select
            value={category}
            onChange={handleCategory}
            className="rounded-lg text-slate-900"
          >
            <option value="all" className="">
              All
            </option>
            {categories.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products?.map((product) => (
            <div key={product.id}>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
