import React from 'react'

const About = () => {
  return (
		<div className="w-[80%] mx-auto flex-1 justify-center items-center">
			<div className="bg-slate-100 rounded-lg shadow-md p-6">
				<p className="text-3xl font-bold mb-4">ABOUT AMRR:</p>
				<p className="text-black">
					AMRR Exim Oil & Gas LLC with License No.: 1312982,
					Membership No. 521213 specializes in the purchase and supply
					of products for the international oil and gas industry. We
					are focused on providing innovative solutions and superior
					quality at competitive prices while offering premium
					customer service. With over 10 years’ experience, we have
					high-level partnerships with our manufacturers that go
					beyond the distribution element; we act as an extension of
					their business and carefully select who we represent.
				</p>
				<p className="text-xl font-semibold mt-3">INNOVATION</p>
				<p>
					{' '}
					AMRR encourages and supports innovation in all areas of our
					business. By embracing the creativity and originality within
					our team and suppliers, we can generate the most added value
					for our customers.{' '}
				</p>
				<p className="text-xl font-semibold mt-3">SUSTAINABILITY</p>
				<p className="mb-2">
					We believe today’s solutions must positively influence
					tomorrows goals and firmly believe sustainability can
					benefit your bottom line. We are curating a portfolio of
					products from across the globe that focus on operational
					efficiencies first and foremost, but have the added benefit
					of helping you become more carbon neutral. “The innovative
					manufacturers we have partnered with offer simple, low-cost
					and quick fixes that can be easily integrated into your
					operations, and can have a high impact from both an
					efficiencies and sustainability perspective.”
				</p>
			</div>
			<div className="flex justify-center">
				<div className="flex flex-col justify-between bg-slate-100 rounded-lg shadow-md p-6 m-4">
					<p className="text-lg font-semibold mb-4">INTEGRITY</p>
					<p className="text-gray-800 mb-6">
						We conduct ourselves professionally, safely, and believe
						in fairness in all aspects of our business.
					</p>
				</div>
				<div className="flex flex-col justify-between bg-slate-100 rounded-lg shadow-md p-6 m-4">
					<p className="text-lg font-semibold mb-4">RELIABILITY</p>
					<p className="text-gray-800 mb-6">
						We know there is no room for error in the industry in
						which we operate, and we strive to ensure the job is
						done right, every time.
					</p>
				</div>
				<div className="flex flex-col justify-between bg-slate-100 rounded-lg shadow-md p-6 m-4">
					<p className="text-lg font-semibold mb-4">CLIENT DRIVEN</p>
					<p className="text-gray-800 mb-6">
						We are listeners and passionately seek solutions that
						will positively affect our client’s business. We have a
						20,00,000 MT monthly purchase buyer.
					</p>
				</div>
				
			</div>
      {/* <div className='bg-slate-100 rounded-lg shadow-md p-3 text-center'>
					<p className='text-center font-serif font-semibold'>EMPLOYEE FIRST</p>
					<p className='font-mono font-semibold'>
						In the words of our founder: “We are only as good as our
						people.”
					</p>
				</div> */}
		</div>
  );
}

export default About
