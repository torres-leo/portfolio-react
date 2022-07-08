import React from 'react';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className='p-6 bg-black' id='contact'>
			<p className='text-center text-gray-400 tracking-wide font-medium '>
				<span className='block'>All rigths reserved &#169;</span>
				Leo Torres
			</p>
			<p className='text-center text-gray-500 font-medium italic text-sm'>{year}</p>
		</div>
	);
};

export default Footer;
