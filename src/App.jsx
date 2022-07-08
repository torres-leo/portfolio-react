import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './assets/css/animation.css';
import './assets/css/styles.css';

function App() {
	return (
		<div className='w-full'>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
