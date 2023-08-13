import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export const ItemCard = ({ product }) => {
	const { id, name, price, image } = product
	const { addToCart, removeFromCart, cartList } = useCart()
	const [isInCart, setIsInCart] = useState(false)

	useEffect(() => {
		const productIsInCart = cartList.find(cartItem => cartItem.id === id)
		productIsInCart ? setIsInCart(true) : setIsInCart(false)
	}, [cartList, id])

	return (
		<div className='w-full max-w-sm  bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
			<Link to=':id'>
				<img className='rounded-t-lg' src={image} alt={name} />
			</Link>
			<div className='px-5 pb-5'>
				<Link to=' :id'>
					<h5 className='text-xl mt-4 font-semibold tracking-tight text-gray-900 dark:text-white px-2'>{name}</h5>
				</Link>

				<div className='flex items-center justify-between pt-5 px-2'>
					<span className='text-2xl font-bold text-gray-900 dark:text-white'>${price}</span>
					{isInCart ? (
						<button
							onClick={() => removeFromCart(product)}
							className='text-white remove focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
							Remove from cart
						</button>
					) : (
						<button
							onClick={() => addToCart(product)}
							className='text-white add focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-buttonBg dark:focus:ring-blue-800'>
							Add to cart
						</button>
					)}
				</div>
			</div>
		</div>
	)
}
