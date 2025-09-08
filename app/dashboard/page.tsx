"use client"
import Analytics from '@/components/Analytics';
import { DabangSidebar} from '@/components/Sidebar'
import { useDebugValue, useState } from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import axios from 'axios'
import { ArrowDown, Search } from 'lucide-react'
import React from 'react'
import { FaRegBell } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { DashboardData } from '@/types/AnalyticsTypes';
import { DashboardProvider } from '@/Context/DashboardContext';
type Props = {}



const page: React.FC = () => {







  return (
    <div  >
      <DashboardProvider>
    <div className='flex w-full h-full'>



        <DabangSidebar/>



        <div className='w-full h-full'>
          {/* header */}
<div className='w-full p-8  flex justify-between items-center h-[120px] bg-white'>

<div className='text-4xl font-semibold'>
Dashboard 

</div>


<div className='flex items-center h-fulljustify-between '>

<div className='flex  p-4 py-3 rounded-2xl  w-[513px] h-[60px] bg-neutral-50   items-center '> <Search fontSize={'3px'} style={{padding:'1px' ,margin:'2px'}} color='#5D5FEF'></Search><input className=' w-[523px] focus:outline-none text-xl  rounded-2xl bg-neutral-50' placeholder='search '></input></div>

<div className='h-[60px] px-3 rounded-2xl cursor-pointer hover:bg-neutral-100 transition-all  mx-6 flex items-center   justify-between gap-4  font-semibold text-[18px]'>
    <div className='flex  items-center gap-3 '>



       <Image

                            src="/United.svg"
                alt="Next.js logo"
                width={18}
                height={18}
                priority
              />

  
    Eng (us)
    </div>
   <div className='text-neutral-500 px-0'>
     <IoIosArrowDown></IoIosArrowDown>
    
    </div>
</div>




{/* belll */}

<div className='flex items-center gap-4'>

<div

style={{

  backgroundColor:'#FFFAF1'
}}

className='bg-yellow-100 
relative
w-[48px]
h-[48px]
rounded-xl size-[48px] flex justify-center items-center '>
  <div 
  style={{backgroundColor:'#EB5757'}}
  className='w-[7px] h-[7px] absolute rounded-full  top-[6px] right-[6px]'></div>
  <div style={{

    color:'#FFA412'
  }}>

<FaRegBell size={24}></FaRegBell>

  </div>

  
</div>





<div className='flex gap-10  '>
<div className='flex items-center gap-6 cursor-pointer hover:bg-neutral-100 transition-all  px-4 py-2 rounded-2xl'>

<div className='w-[60px] h-[60px] bg-blue-400 rounded-xl wrap'>

  <img  className='w-[60px] h-[60px] rounded-xl' src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg'></img>
</div>

<div>

<div>
  <div className='text-[16px] ' style={{fontWeight:'500'}}>Musfiq</div>
  <div className='text-[14px] ' style={{fontWeight:'400',lineHeight:'20px', color:'#737791'}}>admin</div>

</div>
</div>

</div>

</div>



<div className='ml-6 mr-8'>

  <IoIosArrowDown color='#151D48' size={16}></IoIosArrowDown>
</div>

</div>

</div>


</div>

<div className='flex-1 flex justify-center items-start py-0'>
              <div className='w-full max-w-[1600px] px-0'>
                <Analytics />
              </div>
            </div>








        </div>

    </div>


</DashboardProvider>
</div>
  )
}

export default page