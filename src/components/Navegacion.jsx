import React, { useEffect } from 'react';

const Navegacion = () => {
	useEffect(() => {
		const scrollNav = () => {
			const enlaces = document.querySelectorAll('.enlace a');

			enlaces.forEach(function (enlace) {
				enlace.addEventListener('click', function (e) {
					e.preventDefault();
					const seccion = document.querySelector(e.target.attributes.href.value);
					seccion.scrollIntoView({
						behavior: 'smooth',
					});
				});
			});
		};
		scrollNav();
	}, []);

	return (
		<nav className='p-1 bg-black/70 sm:bg-black sticky top-0 overflow-x-visible nav z-40'>
			<ul className='sm:flex sm:items-center sm:justify-evenly text-center uppercase '>
				<li className='font-bold rounded text-white  hover:cursor-pointer text-center text-xs enlace'>
					<a href='#home' className='inline-block'>
						Home
					</a>
				</li>
				<li className='font-bold tracking-wide rounded  text-white hover:cursor-pointer block text-xs enlace'>
					<a href='#aboutme' className='inline-block'>
						About me
					</a>
				</li>
				<li className='font-bold tracking-wide rounded  text-white hover:cursor-pointer block text-xs enlace'>
					<a href='#projects' className='inline-block'>
						Projects / skills
					</a>
				</li>
				{/* <li className='font-bold tracking-wide rounded  text-white hover:cursor-pointer block text-xs enlace'>
					<a href='#' className='block'>
						Skills
					</a>
				</li> */}
				<li className='font-bold tracking-wide rounded  text-white hover:cursor-pointer block text-xs enlace'>
					<a href='#contact' className='inline-block'>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navegacion;
