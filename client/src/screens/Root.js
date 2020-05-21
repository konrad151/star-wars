import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import Header from '../components/Header/Header'
import Home from '../screens/Home/Home'
import NotFound from '../screens/NotFound/NotFound'

const Root = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path={ROUTES.HOME} exact component={Home} />
					<Route path={ROUTES.NOT_FOUND} component={NotFound} />
				</Switch>
			</BrowserRouter>
		</>
	)
}

export default Root
