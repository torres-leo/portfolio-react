import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	const handleClick = () => {
		console.log('Diste Click');
	};
	return (
		<>
			<header id='home'>
				<div className='context'>
					<h1 className='text-5xl font-black arima'>
						Hi, I'm <span className='text-green-500 tracking-wider'>Leonardo Torres</span>.
					</h1>
					<h2 className='typing text-5xl tracking-wider font-bold arima mt-4 md:mt-1'>I'm a Frontend Developer.</h2>
					<svg className='md:mt-44 mt-40 ease-out animate-bounce w-24 h-14'>
						<FontAwesomeIcon icon={faCircleArrowDown} size='3x' onClick={handleClick} className='cursor-pointer' />
					</svg>
				</div>

				<div className='area'>
					<ul className='circles'>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</header>
		</>
	);
};

export default Header;
