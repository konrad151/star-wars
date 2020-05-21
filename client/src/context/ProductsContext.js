import React, { createContext, useReducer, useEffect } from 'react'
import ProductsReducer from '../reducers/ProductsReducer'
import starWars from '../apis/starWars'
import * as QUERIES from '../constants/queries'

const initialState = {
	products: [],
	shoppingCart: []
}

export const ProductsContext = createContext(initialState)

export const ProductsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ProductsReducer, initialState)

	useEffect(() => {
		fetchProducts()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const fetchProducts = async () => {
		try {
			const res = await starWars.post('/', {query: QUERIES.FETCH_STARSHIPS_QUERY})
			dispatch({
				type: 'FETCH_PRODUCTS',
				payload: res.data.data.allStarships.starships
			})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<ProductsContext.Provider value={{ products: state.products, shoppingCart: state.shoppingCart }}>
			{children}
		</ProductsContext.Provider>
	)
}
