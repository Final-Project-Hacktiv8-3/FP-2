import { useSelector } from "react-redux";
import { Footer, NavBar } from "@components/organisms";
export const Rekapan = () => {
  const rekapan = useSelector((state) => state.rekapan);
  const totalHarga = rekapan.rekapan.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <>
      <NavBar />

      <div className="relative mt-32 overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Harga
              </th>
              <th scope="col" className="px-6 py-3">
                Terjual
              </th>
              <th scope="col" className="px-6 py-3">
                Pendapatan
              </th>
            </tr>
          </thead>
          <tbody>
            {rekapan.rekapan.map((rekapans) => (
              <>
                <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {rekapans.title}
                  </th>
                  <td className="px-6 py-4">{rekapans.price}</td>
                  <td className="px-6 py-4">{rekapans.quantity}</td>
                  <td className="px-6 py-4">
                    ${(rekapans.price * rekapans.quantity).toFixed(2)}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
          <tr className="text-lg font-bold">
            Total yang di dapat : $ {totalHarga}
          </tr>
        </table>
      </div>
      <Footer />
    </>
  );
};
