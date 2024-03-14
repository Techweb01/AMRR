import React from 'react'
import LogoImage from '../Images/Logo.png'

const Navbar = () => {
  return (
		<div className="flex flex-row items-center justify-between mx-52">
			<div>
				<img src={LogoImage} alt="Logo" height={50} width={50} />
			</div>
			<div className='flex gap-9 text-3xl font-bold '>
                <p className='hover:text-blue-400'>Home</p>
                <p>About</p>
                <p>Contact</p>
            </div>
		</div>
  );
}

export default Navbar
