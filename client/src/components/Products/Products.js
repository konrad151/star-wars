import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { ProductsContext } from '../../context/ProductsContext'
import ProductItem from '../ProductItem/ProductItem'

const Products = () => {
	const { products } = useContext(ProductsContext)

	const renderProducts = () => {
		return (
			products.map((item) => {
				return (
					<ProductItem
						key={item.id}
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
