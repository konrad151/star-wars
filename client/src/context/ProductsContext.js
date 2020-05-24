import React, { createContext, useReducer, useEffect } from 'react'
import ProductsReducer from '../reducers/ProductsReducer'
import starWars from '../apis/starWars'
import * as QUERIES from '../constants/queries'

const initialState = {
	isDataLoading: true,
	isMoreProducts: true,
	productsForFirstFetch: 12,
	totalCount: null,
	products: [],
	shoppingCart: []
}

export const ProductsContext = createContext(initialState)

export const ProductsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ProductsReducer, initialState)

	useEffect(() => {
		fetchProductsCount(QUERIES.FETCH_PRODUCTS_COUNT)
		fetchProducts(QUERIES.FETCH_FIRST_STARSHIPS_QUERY, { quantity: initialState.productsForFirstFetch })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const fetchProducts = async (query, variables) => {
		try {
			const res = await starWars.post(starWars.baseURL, {
				query,
				variables
			})
			dispatch({
				type: 'FETCH_PRODUCTS',
				payload: res.data.data.allStarships.starships
			})
			setIsDataLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	const fetchProductsCount = async query => {
		try {
			const res = await starWars.post(starWars.baseURL, {
				query
			})
			dispatch({
				type: 'FETCH_PRODUCTS_COUNT',
				payload: res.data.data.allStarships.totalCount
			})
		} catch (error) {
			console.log(error)
		}
	}

	const addToCard = (item, quantity) => {
		const items = []
		for (let i = 1; i <= quantity; i++) {
			items.push(item)
		}
		console.log(items)
		dispatch({
			type: 'ADD_TO_CARD',
			payload: items
		})
	}

	const setIsMoreProducts = (state) => {
		dispatch({
			type: 'SET_IS_MORE_PRODUCTS',
			payload: state
		})
	}

	const setIsDataLoading = (state) => {
		dispatch({
			type: 'SET_IS_DATA_LOADING',
			payload: state
		})
	}

	return (
		<ProductsContext.Provider value={{
			products: state.products,
			shoppingCart: state.shoppingCart,
			addToCard,
			fetchProducts,
			totalCount: state.totalCount,
			productsForFirstFetch: state.productsForFirstFetch,
			isMoreProducts: state.isMoreProducts,
			setIsMoreProducts,
			isDataLoading: state.isDataLoading,
			setIsDataLoading
		}}>
			{children}
		</ProductsContext.Provider>
	)
}
