export const FETCH_FIRST_STARSHIPS_QUERY = `
query ($quantity: Int){
	allStarships(first: $quantity) {
		starships {
			id
			name
			manufacturers
			costInCredits
		}
	}
}`

export const FETCH_REST_STARSHIPS_QUERY = `
query ($quantity: Int){
	allStarships(last: $quantity) {
		starships {
			id
			name
			manufacturers
			costInCredits
		}
	}
}`

export const FETCH_PRODUCTS_COUNT = `
{
	allStarships {
		totalCount
	}
}`
