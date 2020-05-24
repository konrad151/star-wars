import React, { useContext } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { ProductsContext } from '../../context/ProductsContext'
import ProductItem from '../ProductItem/ProductItem'
import styles from './Products.module.scss'
import * as QUERIES from '../../constants/queries'
import Loader from '../Loader/Loader'

const Products = () => {
	const {
		products,
		fetchProducts,
		productsForFirstFetch,
		totalCount,
		isMoreProducts,
		setIsMoreProducts,
		isDataLoading,
		setIsDataLoading
	} = useContext(ProductsContext)

	const btnClick = () => {
		const restProductsCount = totalCount - productsForFirstFetch
		setIsDataLoading(true)
		setIsMoreProducts(false)
		fetchProducts(QUERIES.FETCH_REST_STARSHIPS_QUERY, { quantity: restProductsCount })
	}

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

	const renderButton = () => {
		return (
			<Col>
				<div className={styles.btnLoad}>
					<Button
						onClick={btnClick}
						variant="primary">
						Load all Starships
					</Button>
				</div>
			</Col>
		)
	}

	const renderContent = () => {
		if (isDataLoading === true && isMoreProducts === true) {
			return (
				<>
					<Row>
						<Loader specialClass={'loaderTop'}/>
					</Row>
				</>
			)
		} else if (isDataLoading === false && isMoreProducts === true) {
			return (
				<>
					<Row className={styles.products}>
						{renderProducts()}
					</Row>
					<Row>
						{renderButton()}
					</Row>
				</>
			)
		} else if (isDataLoading === true && isMoreProducts === false) {
			return (
				<>
					<Row className={styles.products}>
						{renderProducts()}
						<Loader specialClass={'loaderBottom'}/>
					</Row>
				</>
			)
		} else if (isDataLoading === false && isMoreProducts === false) {
			return (
				<>
					<Row className={styles.products}>
						{renderProducts()}
					</Row>
				</>
			)
		}
	}

	return (
		renderContent()
	)
}

export default Products
