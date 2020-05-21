import React from 'react'
import { Col } from 'react-bootstrap'
import styles from './ProductItem.module.scss'

const ProductItem = ({ item }) => {
	const renderProductItem = () => {
		const availability = () => {
			if (item.costInCredits === null) {
				return (
					<>
						<span className={styles.product__credits_info}>Product unavailable</span>
					</>
				)
			} else {
				return (
					<>
						<span className={styles.product__credits_info}>Cr:</span>
						<span className={styles.product__credits_price}>{item.costInCredits}</span>
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
					<div className={styles.product__credits}>
						{availability()}
					</div>
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