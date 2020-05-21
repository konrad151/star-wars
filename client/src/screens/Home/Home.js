import React from 'react'
import { Container } from 'react-bootstrap'
import Products from '../../components/Products/Products'
import { ProductsContextProvider } from '../../context/ProductsContext'

const Home = () => {
	return (
		<main>
			<Container>
				<ProductsContextProvider >
					<Products />
				</ProductsContextProvider>
			</Container>
		</main>
	)
}

export default Home
