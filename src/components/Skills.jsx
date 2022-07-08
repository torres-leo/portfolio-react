import React from 'react';
import html5 from '../assets/images/html.png';
import css3 from '../assets/images/css.png';
import js from '../assets/images/js.png';
import logoReact from '../assets/images/react-brands.svg';
import vuejs from '../assets/images/vue.png';
import bootstrap from '../assets/images/bootstrap.webp';
import sass from '../assets/images/sass.png';
import tailwind from '../assets/images/tailwind.png';
import nodejs from '../assets/images/nodejs.png';
import php from '../assets/images/php.png';
import mongo from '../assets/images/mongo.png';

const Skills = () => {
	return (
		<div className='mt-2 rounded-lg px-10'>
			{/* <div className='block'> */}
			<h2 className='text-4xl font-bold tracking-wide uppercase mb-6 arima text-gray-300'>Frontend</h2>
			<div className='flex flex-wrap items-center justify-center text-lg text-white mt-2 gap-14'>
				<div>
					<div className='border-4 border-orange-600 rounded-full p-3 bg-gradient-to-br from-orange-500 to-yellow-300'>
						<img src={html5} alt='html5 image' className='iconos' />
					</div>
					<p className='text-center mt-2 font-normal tracking-widest'>HTML5</p>
				</div>
				<div>
					<div className='border-4 border-cyan-500 rounded-full p-3 bg-gradient-to-br from-cyan-700 to-blue-400'>
						<img src={css3} alt='css3 image' className='iconos' />
					</div>
					<p className='text-center mt-2 font-normal tracking-widest'>CSS3</p>
				</div>
				<div>
					<div className='border-4 border-orange-400 rounded-full p-3 bg-yellow-300'>
						<img src={js} alt='JS image' className='iconos rounded-full' />
					</div>
					<p className='text-center mt-2 font-normal tracking-widest'>JavaScript</p>
				</div>
				<div>
					<div className='border-4 border-cyan-500 rounded-full p-3 bg-gray-800'>
						<img src={logoReact} alt='react image' className='iconos logo-react' />
					</div>
					<p className='text-center mt-2 font-normal tracking-widest'>React.js</p>
				</div>
				<div>
					<div className='border-4 border-green-700 rounded-full p-3 bg-gray-700/50 to-green-400'>
						<img src={vuejs} alt='' className='iconos rounded-full' />
					</div>
					<p className='text-center mt-2 font-normal tracking-widest'>Vue.js</p>
				</div>
				<div>
					<div className='border-4 border-gray-700 rounded-full py-3 px-2 bg-indigo-700'>
						<img src={bootstrap} alt='bootstrap image' className='iconos rounded-full' />
					</div>
					<p className='text-center mt-2 font-normal tracking-widest'>Bootstrap</p>
				</div>
				<div>
					<div className='border-4 border-red-500/70 rounded-full p-3 bg-gradient-to-br from-pink-400 to-pink-500'>
						<img src={sass} alt='sass image' className='iconos rounded-full' />
					</div>
					<p className='text-center mt-2 font-normal tracking-wide'>Saas</p>
				</div>
				<div>
					<div className='border-4 border-green-500/90 rounded-full p-3 bg-gray-800/70'>
						<img src={tailwind} alt='tailwind image' className='iconos rounded-full' />
					</div>
					<p className='text-center mt-2 font-normal tracking-wide'>TailwindCSS</p>
				</div>
			</div>

			<div className='mt-8'>
				<h2 className='text-4xl font-bold tracking-wide uppercase arima text-gray-300 mb-6'>Backend</h2>
				<div className='flex flex-wrap items-center justify-center text-lg text-white mt-2 gap-14'>
					<div>
						<div className='border-4 border-gray-600 p-3 rounded-full bg-gradient-to-br from-green-700 to-white/10'>
							<img src={nodejs} alt='html5 image' className='iconos rounded-full' />
						</div>
						<p className='text-center mt-2 font-normal tracking-widest'>node.js</p>
					</div>
					<div>
						<div className='border-4 border-indigo-700 rounded-full p-3 bg-gradient-to-br from-indigo-400 to-indigo-600'>
							<img src={php} alt='html5 image' className='rounded-full php bg-cover bg-center' />
						</div>
						<p className='text-center mt-2 font-normal tracking-widest'>PHP</p>
					</div>
					<div>
						<div className='border-4 border-gray-600 rounded-2xl bg-gradient-to-br from-green-400 to-green-700 mb-4'>
							<img src={mongo} alt='html5 image' className='p-2 iconos bg-cover bg-center ' />
						</div>
						<p className='text-center font-normal tracking-widest'>MongoDB</p>
					</div>
				</div>
			</div>
			{/* </div> */}
		</div>
	);
};

export default Skills;
