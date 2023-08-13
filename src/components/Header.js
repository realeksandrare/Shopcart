import { useCart } from '../context/CartContext'
import {NavLink, Link} from 'react-router-dom'
import Logo from '../assets/logo.png'

export const Header = () => {
const {cartList} = useCart()

  return (
	<header>
<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to="/" className="flex items-center">
      <img src={Logo} className="h-9 mr-3" alt="Shopping Cart Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shopping Cart</span>
  </Link>
  <div className="flex md:order-2">
      <NavLink to='/cart' type="button" className="hidden md:flex text-gray-900 text-base focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 text-center mr-3 md:mr-0 md:hover:text-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cart ({cartList.length}) </NavLink>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>

  </div>
</nav>
</header>

  )
}
