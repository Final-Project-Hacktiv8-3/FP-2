import { CartPage, NavBar } from "@components/organisms";
import { useSelector } from "react-redux";
export const Cart = () => {
    const carts = useSelector((state)=> state.addChart)
    const userId  = localStorage.getItem('userId') 
    
    
    return (
        <>
        <NavBar/>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product Image
                </th>
                <th scope="col" class="px-6 py-3">
                    Product Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                    Each Price
                </th>
            </tr>
        </thead>
        <tbody>

            {carts.cartItems.length > 0 ? (
                carts.cartItems.map(carts => (
                    carts.userId === userId ? (
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <CartPage dataCart={carts} /> 
            
                    </tr>   

                    ):(
                        ''
                    )
                ))
            ):(
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                       <h1 classNameName='ml-52' >Barang tidak ditemukan</h1>
                    </tr>   
            )}

        </tbody>
        
        
        
    </table>
        </div>
        
        </>
    );
  };
  