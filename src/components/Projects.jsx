import React from 'react';
import logoReact from '../assets/images/react-brands.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faEye } from '@fortawesome/free-solid-svg-icons';
import uptaskImage from '../assets/images/uptask.png';
import guitarLaImagen from '../assets/images/guitarla.png';
import criptoImage from '../assets/images/cryptos.png';
import budgetImage from '../assets/images/budget.png';
import carImage from '../assets/images/car-insurence.png';
import todolist from '../assets/images/todolist.png';

const Projects = () => {
	return (
		<>
			<div className='flex items-center justify-center gap-2 animate-pulse'>
				<h3 className='text-4xl font-bold tracking-wide text-center text-sky-400/90 rounded my-4'>React</h3>
				<img src={logoReact} alt='icono' className='logo-react animate-spin-slow' />
			</div>
			{/* </div> */}
			<ul className='flex flex-wrap mt-2 mb-4 px-4 items-stretch justify-evenly gap-4'>
				{/* PROJECT #1*/}
				<li className='p-2 rounded-xl bg-gray-800/90 hover:bg-gray-700/80 cursor-text'>
					<div className='rounded-lg shadow-lg bg-transparent max-w-sm sm:max-w-xs flex flex-col relative'>
						<a href='https://github.com/torres-leo/Uptask_MERN-Frontend'>
							<img className='rounded-t-lg imagen bg-cover bg-center' src={uptaskImage} alt='' />
						</a>
						<div className='p-6'>
							<div className='flex items-center'>
								<h5 className='text-sky-400 text-xl font-medium flex-1'>Uptask MERN</h5>
								<p>
									<a
										className='flex items-center gap-3 p-1'
										href='https://github.com/torres-leo/Uptask_MERN-Frontend'
										target='_blank'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='icon icon-tabler icon-tabler-brand-github filtro'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='#009988'
											fill='none'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<path stroke='none' d='M0 0h24v24H0z' fill='none' />
											<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
										</svg>
										<FontAwesomeIcon
											icon={faUpRightFromSquare}
											className='text-lg text-teal-500/70 hover:text-lime-500'
										/>
									</a>
								</p>
							</div>
							<p className='text-white/80 text-base my-2'>
								Uptask is a project manager, where you can generate the tasks that are necessary for your project.
							</p>

							<p className='text-gray-500 flex flex-wrap gap-2 items-center leading-4 text-sm my-9'>
								<span>MongoDB</span>
								<span>Express</span>
								<span>React.js</span>
								<span>Node.js</span>
								<span>Tailwind</span>
								<span>Context API</span>
								<span>Hooks</span>
								<span>Socket io</span>
							</p>

							<div className='absolute inset-x-0 bottom-0'>
								<a
									className='flex justify-center items-center gap-2 p-2 bg-gradient-to-r from-green-400/50 to-sky-400/50 rounded text-sm font-medium text-white cursor-pointer hover:bg-green-400/30'
									href='https://github.com/torres-leo/Uptask_MERN-Frontend'
									target='_blank'>
									visit project
									<FontAwesomeIcon icon={faEye} className='text-lg m-0' />
								</a>
							</div>
						</div>
					</div>
				</li>

				{/* PROJECT #2*/}
				<li className='p-2 rounded-xl bg-gray-800/90 hover:bg-gray-700/80 cursor-text'>
					<div className='rounded-lg shadow-lg bg-transparent max-w-sm sm:max-w-xs flex flex-col relative'>
						<a href='https://guitarla-next-snowy.vercel.app'>
							<img className='rounded-t-lg imagen bg-cover bg-center' src={guitarLaImagen} alt='' />
						</a>
						<div className='p-6'>
							<div className='flex items-center justify-between'>
								<h5 className='text-sky-400 text-xl font-medium '>Guitar LA</h5>
								<div>
									<p className='flex items-center gap-3 p-1'>
										<a href='https://github.com/torres-leo/guitarla-next' target='_blank'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='icon icon-tabler icon-tabler-brand-github filtro'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												strokeWidth='1.5'
												stroke='#009988'
												fill='none'
												strokeLinecap='round'
												strokeLinejoin='round'>
												<path stroke='none' d='M0 0h24v24H0z' fill='none' />
												<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
											</svg>
										</a>
										<a href='https://guitarla-next-snowy.vercel.app' target='_blank'>
											<FontAwesomeIcon
												icon={faUpRightFromSquare}
												className='text-lg text-teal-500/70 hover:text-lime-500'
											/>
										</a>
									</p>
								</div>
							</div>
							<p className='text-white/80 text-base my-2'>
								This is a Guitar Shop, where all the information is getting from an API and CMS (strapi).
							</p>

							<p className='text-gray-500 flex flex-wrap gap-2 items-center leading-4 text-sm my-9'>
								<span>MongoDB</span>
								<span>Strapi(CMS)</span>
								<span>React.js</span>
								<span>Next.js</span>
								<span>Context API</span>
							</p>

							<div className='absolute inset-x-0 bottom-0'>
								<a
									className='flex justify-center items-center gap-2 p-2 bg-gradient-to-r from-green-400/50 to-sky-400/50 rounded text-sm font-medium text-white cursor-pointer hover:bg-green-400/30'
									href='https://guitarla-next-snowy.vercel.app'
									target='_blank'>
									visit project
									<FontAwesomeIcon icon={faEye} className='text-lg m-0' />
								</a>
							</div>
						</div>
					</div>
				</li>

				{/* PROJECT #3*/}
				<li className='p-2 rounded-xl bg-gray-800/90 hover:bg-gray-700/80 cursor-text'>
					<div className='rounded-lg shadow-lg bg-transparent max-w-sm sm:max-w-xs flex flex-col relative'>
						<a href='https://criptomoneda-react-leo-torres.netlify.app'>
							<img className='rounded-t-lg imagen bg-cover bg-center' src={criptoImage} alt='' />
						</a>
						<div className='p-6'>
							<div className='flex items-center'>
								<h5 className='text-sky-400 text-xl font-medium flex-1'>Cryptocurrencies</h5>
								<div>
									<p className='flex items-center gap-3 p-1'>
										<a href='https://github.com/torres-leo/criptomonedas-react' target='_blank'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='icon icon-tabler icon-tabler-brand-github filtro'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												strokeWidth='1.5'
												stroke='#009988'
												fill='none'
												strokeLinecap='round'
												strokeLinejoin='round'>
												<path stroke='none' d='M0 0h24v24H0z' fill='none' />
												<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
											</svg>
										</a>
										<a href='https://criptomoneda-react-leo-torres.netlify.app' target='_blank'>
											<FontAwesomeIcon
												icon={faUpRightFromSquare}
												className='text-lg text-teal-500/70 hover:text-lime-500'
											/>
										</a>
									</p>
								</div>
							</div>
							<p className='text-white/80 text-base my-2'>
								Get a number of top coins(15) by their market cap. Getting data from the web site:{' '}
								<a
									href='https://www.cryptocompare.com'
									className='font-medium italic underline underline-offset-4'
									target='_blank'>
									cryptocompare
								</a>
								.
							</p>

							<p className='text-gray-500 flex flex-wrap gap-2 items-center leading-4 text-sm my-9'>
								<span>React</span>
								<span>Styled Components</span>
								<span>Context API</span>
								<span>Hooks</span>
							</p>

							<div className='absolute inset-x-0 bottom-0'>
								<a
									className='flex justify-center items-center gap-2 p-2 bg-gradient-to-r from-green-400/50 to-sky-400/50 rounded text-sm font-medium text-white cursor-pointer hover:bg-green-400/30'
									href='https://criptomoneda-react-leo-torres.netlify.app'
									target='_blank'>
									visit project
									<FontAwesomeIcon icon={faEye} className='text-lg m-0' />
								</a>
							</div>
						</div>
					</div>
				</li>

				{/* PROJECT #4 */}
				<li className='p-2 rounded-xl bg-gray-800/90 hover:bg-gray-700/80 cursor-text'>
					<div className='rounded-lg shadow-lg bg-transparent max-w-sm sm:max-w-xs flex flex-col relative'>
						<a href='https://control-presupuesto-leo-torres.netlify.app'>
							<img className='rounded-t-lg imagen bg-cover bg-center' src={budgetImage} alt='' />
						</a>
						<div className='p-6'>
							<div className='flex items-center'>
								<h5 className='text-sky-400 text-xl font-medium flex-1'>Budget Control</h5>
								<div>
									<p className='flex items-center gap-3 p-1'>
										<a href='https://github.com/torres-leo/control-presupuesto-react' target='_blank'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='icon icon-tabler icon-tabler-brand-github filtro'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												strokeWidth='1.5'
												stroke='#009988'
												fill='none'
												strokeLinecap='round'
												strokeLinejoin='round'>
												<path stroke='none' d='M0 0h24v24H0z' fill='none' />
												<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
											</svg>
										</a>
										<a href='https://control-presupuesto-leo-torres.netlify.app' target='_blank'>
											<FontAwesomeIcon
												icon={faUpRightFromSquare}
												className='text-lg text-teal-500/70 hover:text-lime-500'
											/>
										</a>
									</p>
								</div>
							</div>
							<p className='text-white/80 text-base my-2'>
								Keep your budget in check, putting your expenses (according to their category) in the app.
							</p>

							<p className='text-gray-500 flex flex-wrap gap-2 items-center leading-4 text-sm my-8'>
								<span>React.js</span>
								<span>Context API</span>
								<span>Local Storage</span>
							</p>

							<div className='absolute inset-x-0 bottom-0'>
								<a
									className='flex justify-center items-center gap-2 p-2 bg-gradient-to-r from-green-400/50 to-sky-400/50 rounded text-sm font-medium text-white cursor-pointer hover:bg-green-400/30'
									href='https://control-presupuesto-leo-torres.netlify.app'
									target='_blank'>
									visit project
									<FontAwesomeIcon icon={faEye} className='text-lg m-0' />
								</a>
							</div>
						</div>
					</div>
				</li>

				{/* PROJECT #5*/}
				<li className='p-2 rounded-xl bg-gray-800/90 hover:bg-gray-700/80 cursor-text'>
					<div className='rounded-lg shadow-lg bg-transparent max-w-sm sm:max-w-xs flex flex-col relative'>
						<a href='https://cotizador-autos-leo-torres.netlify.app'>
							<img className='rounded-t-lg imagen bg-cover bg-center' src={carImage} alt='' />
						</a>
						<div className='p-6'>
							<div className='flex items-center justify-between'>
								<h5 className='text-sky-400 text-xl font-medium '>Auto Insurence</h5>
								<div>
									<p className='flex items-center gap-3 p-1'>
										<a href='https://github.com/torres-leo/seguro-autos' target='_blank'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='icon icon-tabler icon-tabler-brand-github filtro'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												strokeWidth='1.5'
												stroke='#009988'
												fill='none'
												strokeLinecap='round'
												strokeLinejoin='round'>
												<path stroke='none' d='M0 0h24v24H0z' fill='none' />
												<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
											</svg>
										</a>
										<a href='https://cotizador-autos-leo-torres.netlify.app' target='_blank'>
											<FontAwesomeIcon
												icon={faUpRightFromSquare}
												className='text-lg text-teal-500/70 hover:text-lime-500'
											/>
										</a>
									</p>
								</div>
							</div>
							<p className='text-white/80 text-base my-2'>
								A simple page where you can check the car insurance depending on the brand.
							</p>

							<p className='text-gray-500 flex flex-wrap gap-2 items-center leading-4 text-sm my-8'>
								<span>React.js</span>
								<span>Context API</span>
							</p>

							<div className='absolute inset-x-0 bottom-0'>
								<a
									className='flex justify-center items-center gap-2 p-2 bg-gradient-to-r from-green-400/50 to-sky-400/50 rounded text-sm font-medium text-white cursor-pointer hover:bg-green-400/30'
									href='https://cotizador-autos-leo-torres.netlify.app'
									target='_blank'>
									visit project
									<FontAwesomeIcon icon={faEye} className='text-lg m-0' />
								</a>
							</div>
						</div>
					</div>
				</li>

				{/* PROJECT #6*/}
				<li className='p-2 rounded-xl bg-gray-800/90 hover:bg-gray-700/80 cursor-text'>
					<div className='rounded-lg shadow-lg bg-transparent max-w-sm sm:max-w-xs flex flex-col relative'>
						<a href='https://github.com/torres-leo/Uptask_MERN-Frontend'>
							<img className='rounded-t-lg imagen bg-cover bg-center' src={todolist} alt='' />
						</a>
						<div className='p-6'>
							<div className='flex items-center'>
								<h5 className='text-sky-400 text-xl font-medium flex-1'>To-do List</h5>
								<div>
									<p className='flex items-center gap-3 p-1'>
										<a href='https://github.com/torres-leo/Todo-React' target='_blank'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='icon icon-tabler icon-tabler-brand-github filtro'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												strokeWidth='1.5'
												stroke='#009988'
												fill='none'
												strokeLinecap='round'
												strokeLinejoin='round'>
												<path stroke='none' d='M0 0h24v24H0z' fill='none' />
												<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
											</svg>
										</a>
										<a href='https://todo-react-leo-torres.netlify.app' target='_blank'>
											<FontAwesomeIcon
												icon={faUpRightFromSquare}
												className='text-lg text-teal-500/70 hover:text-lime-500'
											/>
										</a>
									</p>
								</div>
							</div>
							<p className='text-white/80 text-base my-2'>Simple to-do list page build on React.</p>

							<p className='text-gray-500 flex flex-wrap gap-2 items-center leading-4 text-sm my-11'>
								<span>React</span>
								<span>Styled Components</span>
								<span>Context API</span>
								<span>Hooks</span>
								<span>Local Storage</span>
							</p>

							<div className='absolute inset-x-0 bottom-0'>
								<a
									className='flex justify-center items-center gap-2 p-2 bg-gradient-to-r from-green-400/50 to-sky-400/50 rounded text-sm font-medium text-white cursor-pointer hover:bg-green-400/30'
									href='https://todo-react-leo-torres.netlify.app'
									target='_blank'>
									visit project
									<FontAwesomeIcon icon={faEye} className='text-lg m-0' />
								</a>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</>
	);
};

export default Projects;
