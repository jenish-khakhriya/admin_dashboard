

import { cookies } from 'next/headers';
import React from 'react'

const Header = async () => {
  
    const cookieStore = await cookies();
  const userName = cookieStore.get("fullName")?.value || null;
  console.log(userName);
  
  return (
    <div className='w-full bg-[#3af1e2] h-20 flex justify-between items-center px-10'>
          <div className='text-3xl font-semibold text-white'>
              Hii , {userName}
          </div>
    </div>
  )
}

export default Header