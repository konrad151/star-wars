export default (state, action) => {
	switch (action.type) {
	case 'FETCH_PRODUCTS':
		return {
			...state,
			products: [...state.products, ...action.payload]
		}
	case 'FETCH_PRODUCTS_COUNT':
		return {
			...state,
			totalCount: action.payload
		}
	case 'ADD_TO_CARD':
		return {
			...state,
			shoppingCart: [...state.shoppingCart, ...action.payload]
		}
	case 'SET_IS_MORE_PRODUCTS':
		return {
			...state,
			isMoreProducts: action.payload
		}
	case 'SET_IS_DATA_LOADING':
		return {
			...state,
			isDataLoading: action.payload
		}
	default:
		return state
	}
}
