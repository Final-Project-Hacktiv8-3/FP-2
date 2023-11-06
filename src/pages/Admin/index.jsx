import { CartPage, NavBar } from "@components/organisms";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "@redux/products/action";

export const Admin = () => {

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const latest = useSelector((state) => state.latestUpdate);

  useEffect(() => {
    dispatch(fetchProducts())


}, [])

  return (
    <>
      <NavBar />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

        {latest.latest.map(productsLatest => (
            products.data.map(dataProducts => (
                productsLatest.id === dataProducts.id && 

                <>

                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">

                  <CartPage dataCart={dataProducts} productsLatest={productsLatest}  />

                </tr>

                </>



            ))
        ))}

        </table>
    </div>


    </>
  );
};