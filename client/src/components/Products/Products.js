import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { ProductsContext } from '../../context/ProductsContext'
import ProductItem from '../ProductItem/ProductItem'

const Products = () => {
	const { products } = useContext(ProductsContext)

	const renderProducts = () => {
		return (
			products.map((item, index) => {
				return (
					<ProductItem
						key={index}
						item={item}
					/>
				)
			})
		)
	}

	return (
		<Row>
			{renderProducts()}
		</Row>
	)
}

export default Products
