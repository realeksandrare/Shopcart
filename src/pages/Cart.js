import { useCart } from '../context/CartContext'
import { useTitle } from '../hooks/useTitle'
import { CartItemCard } from '../components'

export const Cart = ({ title }) => {
	useTitle(`${title}`)
	const { total, cartList } = useCart()
	console.log(cartList)

	return (
		<main className='mt-20'>
			<p className='text-2xl py-6 text-center'>
				Cart Items: {cartList.length} /${total}{' '}
			</p>

			{cartList.map(product => (
				<CartItemCard key={product.id} product={product} />
			))}
		</main>
	)
}
