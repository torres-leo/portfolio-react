import React from 'react';
import foto from '../assets/images/fotoFB.jpg';
import resume from '../assets/pdf/CV Leonardo Torres - en.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {
	return (
		<>
			<div className='flex justify-center items-center uppercase mb-4'>
				<h2
					className='arima p-2 rounded text-4xl md:text-6xl font-medium mt-6 underline underline-offset-8 text-white tracking-widest shadow-gray-400'
					id='aboutme'>
					About me
				</h2>
			</div>
			<div className='lg:flex block lg:items-center w-3/4 mx-auto p-6 gap-8'>
				<div className='bg-gradient-to-br from-indigo-600/80 to-green-600/80 p-1.5 w-5/6 sm:w-3/5 md:w-1/2 lg:w-2/6 lg:p-2 rounded-full shadow mx-auto lg:order-none'>
					<img src={foto} alt='Foto perfil' className='rounded-full' />
				</div>
				{/* REDES SOCIALES */}
				<ul className='mt-4 gap-2 lg:gap-0 flex justify-center lg:flex-col cursor-pointer'>
					{/* LINKEDIN */}
					<li
						className='p-2 bg-gradient-to-bl from-indigo-600/80 to-green-600/80 hover:animate-bounce lg:hover:animate-pulse rounded-full lg:rounded-none lg:rounded-t-xl'
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
						className='p-2 bg-gradient-to-br from-indigo-600/80 to-green-600/80 hover:animate-bounce lg:hover:animate-pulse rounded-full lg:rounded-none'
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
						className='p-2 bg-gradient-to-bl from-indigo-600/80 to-green-600/80 hover:animate-bounce lg:hover:animate-pulse rounded-full lg:rounded-none'
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
						className='p-2 bg-gradient-to-br from-indigo-600/80 to-green-600/80 hover:animate-bounce lg:hover:animate-pulse rounded-full lg:rounded-none'
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
						className='p-2 bg-gradient-to-br from-indigo-600/80 to-green-600/80 hover:animate-bounce lg:hover:animate-pulse rounded-full lg:rounded-none lg:rounded-b-xl'
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
				<ul className='mt-4 lg:mt-2 flex justify-center lg:flex-col font-bold text-xs animate-pulse'>
					<li className='text-center bg-slate-300 p-2 rounded-l-xl pl-3 lg:rounded-none lg:pl-2 lg:rounded-t-xl lg:mt-4'>
						S
					</li>
					<li className='text-center bg-slate-300 p-2'>O</li>
					<li className='text-center bg-slate-300 p-2'>C</li>
					<li className='text-center bg-slate-300 p-2'>I</li>
					<li className='text-center bg-slate-300 p-2'>A</li>
					<li className='text-center bg-slate-300 p-2'>L</li>
					<li className='text-center bg-slate-300 p-2 rounded-r-xl pr-3 lg:rounded-none lg:pr-2 lg:rounded-b-xl'>S</li>
				</ul>
				{/* DESCRIPCION */}
				<div className='flex-1 items-start mt-10 lg:mt-0 order-first text-center'>
					{/* <div className=''> */}
					<h3 className='anton text-center lg:text-start text-2xl sm:text-4xl text-gray-400 tracking-wider flex items-center justify-center lg:justify-start gap-3 font-light'>
						Hello, I'm Leonardo Torres
						{/* <span className='shadow-2xl rounded-full shadow-yellow-400'>
								<img src={emojiFace} alt='thinking' className='w-12 h-12 animate-spin-slow ' />
							</span> */}
					</h3>
					<p className='mt-8 text-center lg:text-start text-gray-400 tracking-wide text-xl'>
						I'm a Frontend Developer. I am passionate about technology and programming, I always try to improve as
						programmer, I really enjoy coding. Currently I'm using{' '}
						<span className='text-cyan-500 font-bold hover:text-cyan-600 transition-colors hover:underline hover:underline-offset-4'>
							<a href='https://reactjs.org' target='_blank'>
								{' '}
								React.js
							</a>
						</span>{' '}
						to develop my apps and following the{' '}
						<span className='font-bold text-green-500 hover:underline hover:underline-offset-4'>
							<a href='https://www.mongodb.com/mern-stack' target='_blank'>
								MERN
							</a>
						</span>{' '}
						stack.
					</p>
					<p className='mt-8 text-center lg:text-start text-gray-400 tracking-wide text-xl mb-6'>
						Also, I like to learn about new things for the web, so you should never limit your learning ;)
					</p>
					<div className='flex justify-center lg:justify-start'>
						<a
							download='CV-Leonardo-Torres'
							href={resume}
							className='p-2 bg-gradient-to-br from-cyan-600 to-emerald-500 rounded-xl hover:from-cyan-600/80 hover:to-emerald-500/80 transition-colors text-white font-bold flex items-center justify-center gap-2 w-full xs:w-2/3 md:w-1/2 lg:w-2/3 uppercase tracking-wider shadow-2xl shadow-cyan-600'>
							Resume
							<FontAwesomeIcon icon={faCloudArrowDown} size='2x' className='m-0' />
						</a>
					</div>
					{/* </div> */}
				</div>
			</div>
		</>
	);
};

export default AboutMe;
