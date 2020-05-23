import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Header.module.scss'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<Row>
					<Col xs={12} sm={12} md={'auto'}>
						<Logo />
					</Col>
					<Col xs={12} sm={12} md>
						<nav className={styles.header__nav}>
							<Link to={'#!'} className={styles.header__navItem}>TestNavLink</Link>
							<Link to={'#!'} className={styles.header__navItem}>TestNavLink</Link>
							<Link to={'#!'} className={styles.header__navItem}>TestNavLink</Link>
						</nav>
					</Col>
				</Row>
			</Container>
		</header>
	)
}

export default React.memo(Header)
