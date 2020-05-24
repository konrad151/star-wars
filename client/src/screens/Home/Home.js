import React from 'react'
import { Container } from 'react-bootstrap'
import Products from '../../components/Products/Products'
import { ProductsContextProvider } from '../../context/ProductsContext'
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'

const Home = () => {
	return (
		<main>
			<Container>
				<ProductsContextProvider >
					<Products />
					<ShoppingCart />
				</ProductsContextProvider>
			</Container>
		</main>
	)
}

export default Home
