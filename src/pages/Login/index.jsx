import { Label, TextInput } from "flowbite-react";
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Login = () => {
    const navigate = useNavigate();
    const [tempData, setTempData] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get('https://fakestoreapi.com/users')
            setTempData(res.data);
            
        }
        fetchUser();
    }, [])
    

    const [form, setForm] = useState({
        username:'',
        password:'',

    })
    console.log(form.password);

    const handleSubmit = async() =>{
        if(form.username === 'admin@bukapedia.com'&& form.password === 'admin123'){
            navigate('/home/admin');
            localStorage.setItem('token',"credentials");
        }else{
            const res = await axios.post('https://fakestoreapi.com/auth/login',form)
            .then(resp=> {
                tempData.forEach((dataUser)=>{
                    if(dataUser.username === form.username){
                        resp.status === 200 && navigate(`/home`)
                        localStorage.setItem('token',resp.data.token);
                        localStorage.setItem('userId',dataUser.id);
                    }
                })
                
            })
        }
        
    }
   
    const handleChange = (e) =>{
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    return (
      <>
         <div className='grid h-screen place-items-center'>

<div className="w-full max-w-sm  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6 " action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
        <div>
            <Label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</Label>
            <TextInput type="text" name="username" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" value={form.username} onChange={(e)=>handleChange(e)} required/>
        </div>
        <div>
            <Label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</Label>
            <TextInput type="password" name='password' value={form.password} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={(e)=>handleChange(e)} required/>
        </div>
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
               
                </div>
               
            </div>
            
        </div>
    </form>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>handleSubmit()} >Login to your account</button>
       
</div>


</div>
      </>
    );
  };
  