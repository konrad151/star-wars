import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import styles from './ShoppingCart.module.scss'

const ShoppingCart = () => {
	const { shoppingCart } = useContext(ProductsContext)

	return (
		<div className={styles.shoppingCart} onClick={() => console.log('clicked')}>
			<i className="fas fa-shopping-cart">
				<div className={styles.shoppingCart__quantityWrapper}>
					<div className={styles.shoppingCart__quantityText}>{shoppingCart.length}</div>
				</div>
			</i>
		</div>
	)
}

export default ShoppingCart
