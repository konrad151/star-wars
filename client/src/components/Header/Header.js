import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import classNames from 'classnames'
import styles from './Header.module.scss'

const Header = () => {
	var shoppingCartClass = classNames(styles.header__navItem, styles.header__navItem_shoppingCart)

	return (
		<header className={styles.header}>
			<Container>
				<Row>
					<Col xs={12} sm={'auto'}>
						<h1 className={styles.header__logo}>Star Wars</h1>
					</Col>
					<Col xs={12} sm>
						<nav className={styles.header__nav}>
							{/* uncomment below line and import Link from react-router-dom to add more link nav items */}
							{/* <Link to={'#!'} className={styles.header__navItem}>TestNavLink</Link> */}
							<div className={shoppingCartClass} onClick={() => console.log('clicked')}>shoppingCart</div>
						</nav>
					</Col>
				</Row>
			</Container>
		</header>
	)
}

export default React.memo(Header)
