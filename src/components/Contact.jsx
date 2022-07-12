import React from 'react';

const Contact = () => {
	return (
		<section className='bg-gradient-to-br from-gray-800/60 p-10' id='contact'>
			<h3 className='arima rounded text-4xl md:text-6xl font-medium underline underline-offset-8 text-white tracking-widest shadow-gray-400 relative flex justify-center'>
				Contact
			</h3>

			<div className='mt-10 w-full'>
				<p className='text-center text-sky-00 font-medium tracking-wide text-xl uppercase text-orange-400 '>
					You wanna build something? <span className='text-pink-600'>Or work together? ;)</span>
				</p>
				<p className='text-center text-cyan-300 text-xl mt-3'>Send me a message on my social networks ;)</p>
			</div>
			<ul className='mt-4 gap-2 flex justify-center cursor-pointer p-4 rounded-xl'>
				{/* LINKEDIN */}
				<li
					className='p-2 bg-gradient-to-bl from-indigo-600/80 to-green-600/80 hover:animate-bounce lg:hover:animate-pulse rounded-full'
					title='LinkedIn'>
					<a href='https://www.linkedin.com/in/leo-torres-solorzano' target='_blank'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='icon icon-tabler icon-tabler-brand-linkedin'
							width='36'
							height='36'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='#ffbf00'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<rect x='4' y='4' width='16' height='16' rx='2' />
							<line x1='8' y1='11' x2='8' y2='16' />
							<line x1='8' y1='8' x2='8' y2='8.01' />
							<line x1='12' y1='16' x2='12' y2='11' />
							<path d='M16 16v-3a2 2 0 0 0 -4 0' />
						</svg>
					</a>
				</li>
				{/* GITHUB */}
				<li
					className='p-2 bg-gradient-to-br from-indigo-600/80 to-green-600/80 hover:animate-bounce lg:hover:animate-pulse rounded-full '
					title='GitHub'>
					<a href='https://github.com/torres-leo' target='_blank'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='icon icon-tabler icon-tabler-brand-github'
							width='36'
							height='36'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='#ffbf00'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
						</svg>
					</a>
				</li>
				{/* GMAIL */}
				<li
					className='p-2 bg-gradient-to-bl from-indigo-600/80 to-green-600/80 hover:animate-bounce lg:hover:animate-pulse rounded-full '
					title='Send email'>
					<a href='mailto:leojts24@gmail.com'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='icon icon-tabler icon-tabler-mail'
							width='34'
							height='34'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='#ffbf00'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<rect x='3' y='5' width='18' height='14' rx='2' />
							<polyline points='3 7 12 13 21 7' />
						</svg>
					</a>
				</li>
				{/* TWITTER */}
				<li
					className='p-2 bg-gradient-to-br from-indigo-600/80 to-green-600/80 hover:animate-bounce lg:hover:animate-pulse rounded-full '
					title='Twitter'>
					<a href='https://twitter.com/LTSolorzano' target='_blank'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='icon icon-tabler icon-tabler-brand-twitter'
							width='36'
							height='36'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='#ffbf00'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path d='M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z' />
						</svg>
					</a>
				</li>
				{/* INSTAGRAM */}
				<li
					className='p-2 bg-gradient-to-br from-indigo-600/80 to-green-600/80 hover:animate-bounce lg:hover:animate-pulse rounded-full '
					title='Instagram'>
					<a href='https://www.instagram.com/torres_leo24' target='_blank'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='icon icon-tabler icon-tabler-brand-instagram'
							width='36'
							height='36'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='#ffbf00'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<rect x='4' y='4' width='16' height='16' rx='4' />
							<circle cx='12' cy='12' r='3' />
							<line x1='16.5' y1='7.5' x2='16.5' y2='7.501' />
						</svg>
					</a>
				</li>
			</ul>
		</section>
	);
};

export default Contact;
