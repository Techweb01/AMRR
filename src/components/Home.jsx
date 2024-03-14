import React from 'react'
import Navbar from './Navbar'
import MainContent from './MainContent'
import Main2 from './Main2'
import Main3 from './Main3'
import About from './About'
import About2 from './About2'
import Contact from './Contact'
const Home = () => {
  return (
    <div className='flex-1 w-screen h-screen overflow-x-hidden'>
      <div className='bg-green-700 py-4'><Navbar/></div>
      <div><MainContent/></div>
      <div className='bg-slate-300'><Main2/></div>
      <div><Main3/></div>
      {/* <div></div> */}
      <div className='bg-slate-300 p-3'><About/></div>
      <div><About2/></div>
      <div className='bg-slate-300'><Contact/></div>

    </div>
  )
}

export default Home
