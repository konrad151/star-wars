export const FETCH_STARSHIPS_QUERY = `
{
	allStarships {
		starships {
			id
			name
			manufacturers
			costInCredits
		}
	}
}`
