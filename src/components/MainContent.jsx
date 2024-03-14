import React from 'react'
import firstImg from '../Images/firstImg.jpg'

const MainContent = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${firstImg})` }}>

    <div className="flex flex-col items-center justify-center text-rose-500 ">

     <div className='font-extrabold text-4xl w-[600px] mt-32 content-center text-center '>
     <p className='mb-5'>AMRR </p>
     <p className='mb-5'>OIL & GAS</p>
     <p>EXPORT IMPORT </p>
     </div>
     <div className="">
				<p className="text-2xl font-bold mt-64 text-center text-white">VISION</p>
				<p className='text-[1rem] text-white'>
					To become a leader for innovation and sustainability in the
					energy sector.
				</p>
			</div>
    </div>
  </div>
  )
}

export default MainContent
