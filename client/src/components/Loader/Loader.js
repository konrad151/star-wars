import React from 'react'
import styles from './Loader.module.scss'
import classNames from 'classnames'

const Loader = ({ specialClass }) => {
	const loaderClasses = classNames(styles.loader, specialClass === 'loaderTop' ? styles.loader__top : styles.loader__bottom)
	return (
		<div className={loaderClasses}>
			<img src={require('../../assets/loader.svg')} alt='Loader' title='Loader' />
		</div>
	)
}

export default Loader
