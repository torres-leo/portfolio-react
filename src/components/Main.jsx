import React, { useEffect } from 'react';
import Navegacion from './Navegacion';
import SectionProjects from './SectionProjects';
import AboutMe from './AboutMe';

const Main = () => {
	return (
		<>
			<Navegacion />
			<div className='w-full bg-gray-900'>
				<AboutMe />

				<SectionProjects />
			</div>
		</>
	);
};

export default Main;
