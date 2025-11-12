'use client'

import React, { useState } from 'react'
import Button from '../molecules/Button';
import LogoutModel from '../molecules/model/LogoutModel';

interface HeaderClientProps {
  userName: string | null;
}

const HeaderClient: React.FC<HeaderClientProps> = ({ userName }) => {
  const [isLogout, setIsLogout] = useState(false);

  return (
    <>
      {isLogout && <LogoutModel handleClose={() => setIsLogout(false)} />}
      <div className='w-full bg-[#3af1e2] h-20 flex justify-between items-center px-10'>
        <div className='text-3xl font-semibold text-white'>
          Welcome , {userName}
        </div>
        <Button
          className='bg-red-500 hover:bg-red-600'
          onClick={() => setIsLogout(true)}
        >
          Logout
        </Button>
      </div>
    </>
  )
}

export default HeaderClient;
