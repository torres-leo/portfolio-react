import React, { useEffect } from 'react';
import Navegacion from './Navegacion';
import SectionProjects from './SectionProjects';
import AboutMe from './AboutMe';
import Contact from './Contact';

const Main = () => {
	return (
		<>
			<Navegacion />
			<div className='w-full bg-gray-900'>
				<AboutMe />
				<SectionProjects />
				<Contact />
			</div>
		</>
	);
};

export default Main;
