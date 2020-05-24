export default (state, action) => {
	switch (action.type) {
	case 'FETCH_PRODUCTS':
		return {
			...state,
			products: action.payload
		}
	case 'ADD_TO_CARD':
		return {
			...state,
			shoppingCart: [...state.shoppingCart, ...action.payload]
		}
	default:
		return state
	}
}
