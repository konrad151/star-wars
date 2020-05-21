export const FETCH_STARSHIPS_QUERY = `
{
	allStarships {
		starships {
			name
			manufacturers
			costInCredits
		}
	}
}`