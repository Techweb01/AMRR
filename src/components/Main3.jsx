import React from 'react';
import secondImg from "../Images/secondImg.jpeg";

const Main3 = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: `url(${secondImg})`} }></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-10 mt-6 text-center">
        <p className='text-white text-3xl font-semibold'>OUR ETHIOS</p>
        <p className="text-white text-lg mt-4">
          Our philosophy is simple: to partner with leading manufacturers focused on innovation, provide quality at competitive prices and deliver exceptional customer service through close collaboration with our clients. We act not only as a stockist and distributor, we provide industry expertise and dynamic operational solutions through our skilled and knowledgeable personnel to a diverse customer base throughout the GCC.
        </p>
      </div>
    </div>
  );
}

export default Main3;
