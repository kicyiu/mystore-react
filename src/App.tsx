import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import classes from './App.module.scss';
import Footer from './components/footer/Footer';

function App() {
	return (
		<Router >
			<Header />
			<div className={`${classes.content}`}>
				<Routes >
					<Route path='/home' element={<Home />} />
					<Route path='/' element={<Navigate to='/home' />} />
				</Routes>
			</div>
			<Footer />
		</Router>
  	);
}

export default App;
