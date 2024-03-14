import React from 'react';
import img3 from '../Images/img3.png';

const About2 = () => {
  return (
		<div className="container">
			{' '}
			{/* Container div with class 'container' */}
			<div
				className="bg-cover"
				style={{
					backgroundImage: `url(${img3})`,
					width: '100vw',
					height: '100vh',
				}}>
				{/* Content */}
				<div className='pt-48'>
					<p className='text-center font-serif font-semibold pt-14 text-2xl'>EMPLOYEE FIRST</p>

					<p className='text-center font-mono font-semibold mt-4'>
 						"In the words of our founder: “We are only as good as
						our people.”
					</p>
				</div>
			</div>
		</div>
  );
};

export default About2;
