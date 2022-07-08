import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Projects from './Projects';
import Skills from './Skills';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Panel = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<div className='mx-auto p-6' id='projects'>
			<Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
				<Tab.List className='w-full sm:w-3/4 lg:w-3/4 xl:w-1/2 mx-auto'>
					<div className='p-1 flex gap-2 around items-center bg-blue-900/30 text-white rounded-lg'>
						<Tab
							className={({ selected }) =>
								classNames(
									'w-full rounded-lg py-2.5 text-md font-bold leading-5 text-gray-700',
									'ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-700 focus:outline-none focus:ring-2 uppercase tracking-widest transition duration-100 delay-75 ease-in-out',
									selected ? 'bg-gray-200 shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
								)
							}>
							Projects
						</Tab>
						<Tab
							className={({ selected }) =>
								classNames(
									'w-full rounded-lg py-2.5 text-md font-bold leading-5 text-gray-700',
									'ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-700 focus:outline-none focus:ring-2 uppercase tracking-widest transition duration-100 delay-75 ease-in-out',
									selected ? 'bg-gray-200 shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
								)
							}>
							Skills
						</Tab>
					</div>
				</Tab.List>
				<Tab.Panels>
					{/* PANEL DE PROYECTOS */}
					<Tab.Panel className='mt-2'>
						<Projects />
					</Tab.Panel>
					{/* PANEL DE SKILLS */}
					<Tab.Panel className='w-full mx-auto mt-8'>
						<Skills />
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
};

export default Panel;
