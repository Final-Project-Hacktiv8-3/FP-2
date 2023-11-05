import { BsImage } from "react-icons/bs";
import { useDispatch,useSelector } from 'react-redux';
import { useState } from "react";
import { plusQuantity,minQuantity } from "../../../redux/adding/action";

export const CartPage = ({dataCart}) => {
    const [quantityStuff, setQuantityStuff] = useState(dataCart?.quantity)
    const carts = useSelector((state)=> state.addChart)
    const latest = useSelector((state)=> state.latestUpdate)
    const dispatch = useDispatch()
    
    const matchedProduct = latest.latest.find(latestData => latestData.id === dataCart.id);

    const handleAddStuff =(title,image,id,price,quantity,restQuantity)=>{

      setQuantityStuff(prev => prev + 1);
      dispatch(plusQuantity(title,image,id,price,quantity,restQuantity));

    }

    const handleSubtractStuff =(title,image,id,price,quantity,restQuantity)=>{
      setQuantityStuff((prev)=> prev-1)
      quantityStuff <= 0 && setQuantityStuff(0)
      dispatch(minQuantity(title,image,id,price,quantity,restQuantity));
      

    }
  return (
    <>
        
        <th scope="row" className="px-6 py-4 bg-transparent font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
            <img className='h-52 w-32  ' src={dataCart?.image}/>
        
        </th>
        <td className="px-6 py-4">
            {dataCart?.title}
            {matchedProduct && quantityStuff > matchedProduct.quantity ? <><p className='ml-28 text-red-800' >(Jumlah yang and input melebihi stock)</p></> : ''}
        </td>
        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
        {carts.cartItems.length ? (
                carts.cartItems.map(dataCarts => (
                  dataCarts.id === dataCart.id ?  <>
                  <div className="flex-auto flex space-x-4">
                   <button type="button" className="text-white bg-color hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={()=> handleSubtractStuff(dataCarts.title,dataCarts.image,dataCarts.id,dataCarts.price,quantityStuff,dataCart.restQuantity)}  >-</button>
                      <input className="required:border-red-500 bg-transparent text-center w-5" value={quantityStuff} /> <br/>
                    <button type="button" className="text-white bg-color hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={()=> handleAddStuff(dataCarts.title,dataCarts.image,dataCarts.id,dataCarts.price,quantityStuff,dataCart.restQuantity)} >+</button>

                  </div>

                  
                  </> :''
                ))
            ):(
                ''
            ) }
        </td>
        <td className="px-6 py-4">
            ${dataCart?.quantity * dataCart?.price }
        </td>
    
    </>
    

        

           
           


  );
};
