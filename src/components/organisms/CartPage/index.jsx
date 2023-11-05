import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import PropTypes from "prop-types";

import { plusQuantity, minQuantity } from "../../../redux/adding/action";

export const CartPage = ({ dataCart }) => {
  const [quantityStuff, setQuantityStuff] = useState(dataCart?.quantity);
  const carts = useSelector((state) => state.addChart);
  const latest = useSelector((state) => state.latestUpdate);
  const dispatch = useDispatch();

  const matchedProduct = latest.latest.find(
    (latestData) => latestData.id === dataCart.id,
  );

  const handleAddStuff = (title, image, id, price, quantity, restQuantity) => {
    setQuantityStuff((prev) => prev + 1);
    dispatch(plusQuantity(title, image, id, price, quantity, restQuantity));
  };

  const handleSubtractStuff = (
    title,
    image,
    id,
    price,
    quantity,
    restQuantity,
  ) => {
    setQuantityStuff((prev) => prev - 1);
    quantityStuff <= 0 && setQuantityStuff(0);
    dispatch(minQuantity(title, image, id, price, quantity, restQuantity));
  };
  return (
    <>
      <th
        scope="row"
        className="whitespace-nowrap bg-gray-50 bg-transparent px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
      >
        <img className="h-44 w-32  " src={dataCart?.image} />
      </th>
      <td className="px-6 py-4">
        {dataCart?.title}
        {matchedProduct && quantityStuff > matchedProduct.quantity ? (
          <div
            className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span className="font-medium">Danger alert!</span> Change a few
            things up and try submitting again.
          </div>
        ) : (
          ""
        )}
      </td>
      <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
        {carts.cartItems.length
          ? carts.cartItems.map((dataCarts) =>
              dataCarts.id === dataCart.id ? (
                <>
                  <div className="flex flex-auto space-x-4">
                    <button
                      type="button"
                      className="mb-2 mr-2 rounded-lg bg-color px-3 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                      onClick={() =>
                        handleSubtractStuff(
                          dataCarts.title,
                          dataCarts.image,
                          dataCarts.id,
                          dataCarts.price,
                          quantityStuff,
                          dataCart.restQuantity,
                        )
                      }
                    >
                      -
                    </button>
                    <input
                      className="w-5 bg-transparent text-center required:border-red-500"
                      value={quantityStuff}
                    />{" "}
                    <br />
                    <button
                      type="button"
                      className="mb-2 mr-2 rounded-lg bg-color px-3 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                      onClick={() =>
                        handleAddStuff(
                          dataCarts.title,
                          dataCarts.image,
                          dataCarts.id,
                          dataCarts.price,
                          quantityStuff,
                          dataCart.restQuantity,
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </>
              ) : (
                ""
              ),
            )
          : ""}
      </td>
      <td className="px-6 py-4">
        ${(dataCart?.quantity * dataCart?.price).toFixed(2)}
      </td>
    </>
  );
};
CartPage.propTypes = {
  dataCart: PropTypes.object,
};
