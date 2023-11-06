import { useSelector } from 'react-redux'
import { NavBar } from '@components/organisms';
export const Rekapan = () => {

    const rekapan = useSelector((state)=> state.rekapan)
    const totalHarga = rekapan.rekapan.reduce((total, item) => total + item.price * item.quantity, 0);
    
    return (
      <>
      <NavBar/>
        
<div className="relative overflow-x-auto mt-32">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
        {rekapan.rekapan.map(rekapans => (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {rekapans.title}
                </th>
                <td className="px-6 py-4">
                {rekapans.price}
                </td>
                <td className="px-6 py-4">
                {rekapans.quantity}
                </td>
                <td className="px-6 py-4">
                    ${(rekapans.price*rekapans.quantity).toFixed(2)}
                </td>
            </tr>
            
            
        </>


        ))}
        </tbody>
        <tr className='font-bold text-lg'>
        Total yang di dapat : $ {totalHarga}
      </tr>
    </table>
</div>

      </>
    );
  };
  