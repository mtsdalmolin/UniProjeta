import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main';
import Org from './pages/Org';

export default function Routes() {
	return (
		<BrowserRouter>
			<Route path="/" exact component={Main} />
			<Route path="/orgs/:id" component={Org} />
		</BrowserRouter>
	);
}