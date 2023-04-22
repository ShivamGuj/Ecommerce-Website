import React, { useState } from 'react'
import logo from "../assets/logo.jpg"
import {Link} from "react-router-dom"
import {BiUserCircle} from "react-icons/bi"
import {BsCart4,BsCartFill} from "react-icons/bs"
import {useDispatch,useSelector} from 'react-redux'
import { logoutRedux } from '../redux/userSlice'
import { toast } from 'react-hot-toast'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const userData = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleShowMenu = ()=>{
        setShowMenu(preve=>!preve)
    }
    const handleLogout = () => {
        dispatch(logoutRedux());
        toast("Logout successfully");
      };
    
      const cartItemNumber = useSelector((state)=>state.product.cartItem)
  return (
    <header className='fixed shadow-md w-full h-20 px-4 md:px-3 z-50 bg-white'>

        <div className='flex items-center h-full justify-between'>
            <Link to={""}>
            <div className='h-20'>
                <img src={logo} className="h-full"/>
            </div>
            </Link>
        
            <div className="flex items-center gap-7">
                <nav className='flex gap-4 text-lg'>
                    <Link to={""}>Home</Link>
                    <Link to={"about"}>About</Link>
                    <Link to={"contact"}>Contact</Link>
                </nav>
                
       
                <div className="text-2xl text-slate-600 relative">
                    <Link to={"cart"}>
                    <BsCart4 />
                    <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
                        {cartItemNumber.length}
                    </div>
                    </Link>
                </div>
                <div className='text-2xl text-slate-700' onClick={handleShowMenu}>
                    <div className='border-2 border-solid border-slate-700 p-0 cursor-pointer'>
                    <BiUserCircle/>
                    </div>
                    {
                        showMenu && (<div className='absolute right-1 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col'>
                        <Link to={"newProduct"} className='whitespace-nowrap cursor-pointer text-sm'>New Product</Link>
                        {}
                        <Link to={"login"}  className='whitespace-nowrap cursor-pointer text-sm'>Login</Link>
                        </div>)
                    }
                </div>

        </div>

        
        </div>
    </header>
  )
}

export default Header
