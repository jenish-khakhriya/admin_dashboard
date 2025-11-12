import { memo, useState } from 'react'
import Button from '../Button'

const LogoutModel = ({ handleClose } : {handleClose : () => void}) => {
    const [isLoading, setIsLoading] = useState(false);
    const handleLogout = async () => {
    try {
      setIsLoading(true);

      await fetch('/api/logout');

      handleClose();

      window.location.href = '/login';
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
    return (
        <div className='w-full h-screen flex justify-center items-center fixed top-0 left-0 backdrop-blur-sm bg-black/15'>
            <div className='sm:w-[400px] w-full p-5 flex flex-col gap-5 bg-white rounded-lg'>
                <p>Are you sure you want to Logout?</p>
                <div className='w-full flex justify-end items-center gap-3'>
                    <Button
                        onClick={handleLogout}
                        isLoading={isLoading}
                        className="bg-green-500 hover:bg-green-600 text-white"
                    >
                        Logout
                    </Button>

                    <Button
                        type="button"
                        onClick={handleClose}
                        className="bg-red-500 hover:bg-red-600 text-white"
                    >
                        cancel
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default memo(LogoutModel)