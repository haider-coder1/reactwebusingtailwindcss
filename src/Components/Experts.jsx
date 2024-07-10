import React from 'react'
import laptop from '../assets/laptop.png'

const Experts = () => {
  return (
    <div className='max-w-[1240px] p-2  my-10 mx-auto  md:grid grid-cols-2'>
        <div className='  col-span-1 md:w-[80%] text-center'>
   <img src={laptop} alt="" className='inline'/>
        </div>
        <div className=' col-span-1 flex flex-col justify-center '>
 <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPERTS</h1>
 <p className='my-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Doloremque quisquam dignissimos beatae molestias in assumenda
      cumque, modi praesentium officia asperiores ex labore sit neque
     ut laboriosam voluptatum pariatur ducimus maiores!</p>
     <button className='w-[30%] bg-black text-white p-3 rounded'>Get Started</button>
</div>
    
    </div>
  )
}

export default Experts