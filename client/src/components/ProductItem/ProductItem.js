import React, { useState, useContext } from 'react'
import { Col, Form, Button, Row } from 'react-bootstrap'
import { ProductsContext } from '../../context/ProductsContext'
import classNames from 'classnames'
import styles from './ProductItem.module.scss'

const ProductItem = ({ item }) => {
	const { addToCard } = useContext(ProductsContext)

	const [validated, setValidated] = useState(false)
	const [quantity, setQuantity] = useState('')
	const handleSubmit = (e) => {
		const form = e.currentTarget
		if (form.checkValidity() === false) {
			e.preventDefault()
			setValidated(true)
		} else {
			e.preventDefault()
			addToCard(item, quantity)
			setQuantity('')
			setValidated(false)
		}
	}

	const unavailableClass = classNames(styles.product__credits, styles.product__unavailable)

	const renderProductItem = () => {
		const renderDependingOnAvailability = () => {
			if (item.costInCredits === null) {
				return (
					<>
						<div className={unavailableClass}>
							<span className={styles.product__credits_info}>Product unavailable</span>
						</div>
					</>
				)
			} else {
				return (
					<>
						<div className={styles.product__credits}>
							<span className={styles.product__credits_info}>Cr:</span>
							<span className={styles.product__credits_price}>{item.costInCredits}</span>
						</div>
						<Form className={styles.product__form} noValidate validated={validated} onSubmit={handleSubmit}>
							<Form.Group className={styles.product__formGroup} controlId="quantity">
								<Row noGutters={true}>
									<Col xs={'auto'}>
										<Form.Control
											required
											type="tel"
											pattern="[1-9][0-9]*"
											placeholder="Quantity"
											autoComplete="off"
											value={quantity}
											onChange={(e) => setQuantity(e.target.value)}
											className={styles.product__formQuantityControl}
										/>
									</Col>
									<Col xs={'auto'}>
										<Button className={styles.product__formButton} variant="primary" type="submit">
											<i className="fas fa-shopping-cart"></i>
										</Button>
									</Col>
								</Row>
							</Form.Group>
						</Form>
					</>
				)
			}
		}

		return (
			<div className={styles.product}>
				<div className={styles.product__top}>
					<div className={styles.product__name}>{item.name}</div>
					<div className={styles.product__manufacturer}>{item.manufacturers}</div>
				</div>
				<div className={styles.product__bottom}>
					{renderDependingOnAvailability()}
				</div>
			</div>
		)
	}

	return (
		<Col xs={12} lg={3}>
			{renderProductItem()}
		</Col>
	)
}

export default ProductItem
