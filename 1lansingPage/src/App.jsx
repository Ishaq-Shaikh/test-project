import './App.css'
import mountain from './assets/mountain.jpg'

function App() {

  return (
    <>
      <div className="fixed z-55 bg-white h-14 w-full flex justify-between">
      <h1 className='pt-[12px] pl-4 font-black text-2xl'>Pavilion</h1>
      <ul className='flex'>
        <li className='pr-4 pt-[13px] font-semibold text-gray-700 hover:text-gray-400 hover:cursor-pointer'>Membership</li>
        <li className='pr-4 pt-[13px] font-semibold text-gray-700 hover:text-gray-400 hover:cursor-pointer'>Community</li>
        <li className='pr-4 pt-[13px] font-semibold text-gray-700 hover:text-gray-400 hover:cursor-pointer'>PavilionU</li>
        <li className='pr-4 pt-[13px] font-semibold text-gray-700 hover:text-gray-400 hover:cursor-pointer'>Events</li>
        <li className='pr-4 pt-[13px] font-semibold text-gray-700 hover:text-gray-400 hover:cursor-pointer'>Stay Informed</li>
      </ul>
      <div className='flex justify-between'>
      <button className='pt-1 pb-1 pr-5 pl-5 rounded-2xl bg-[#143c57] text-center mt-[10px] mb-[10px] mr-5 font-bold text-white hover:cursor-pointer hover:bg-[#2d4554]'>JOIN NOW</button>
      <button className='pt-1 pb-1 pr-5 pl-5 rounded-2xl border-[2px] border-solid border-[#143c57] text-center mt-[10px] mb-[10px] mr-5 font-bold text-[#143c57] hover:cursor-pointer hover:text-[#55819f] hover:border-[#55819f]'>Log in</button>
      </div>
    </div>
    <div className='relative w-full h-screen bg-cover bg-center bg-[url(https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]'>
    <p className='absolute inset-0 flex items-center justify-center text-black text-8xl z-10 font-black h-[500px]'>
      Unlock Your
      <br />
      Professional
      <br />
      Potential
      </p>
      <p className='absolute inset-0 flex item-center justify-center text-black text-2xl z-12 mt-110 font-semibold ml-5'>A trusted space for GTM professionals to learn, share, and grow.
      Access actionable insights, world-class education, and meaningful connections that help you succeed at every stage of your career.</p>
     <div className='absolute inset-0 flex item-center justify-center z-auto '>
     <button className='pt-1 pb-1 pr-5 pl-5 h-10 text-white font-medium bg-[#112532] mt-130 mr-5 rounded-2xl hover:cursor-pointer hover:bg-[#2d4554]'>BECOME A MEMBER</button>
     <button className='pt-1 pb-1 pr-5 pl-5 h-10 text-[#112532] font-medium border-solid border-[2px] border-[#112532] mt-130 rounded-2xl hover:cursor-pointer hover:text-[#2d4554] hover:border-[#2d4554]'>OUR COMMUNITY</button>
     </div>
    </div>
    </>
  )
}

export default App
