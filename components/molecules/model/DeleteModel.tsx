import { memo, useCallback, useState } from 'react'
import Button from '../Button'
import { apiPut } from '@/utils/api';
import { DeleteModelProps, User } from '@/utils/type';

const DeleteModel = ({ handleClose, handleUpdateUserData, userData, id, userId } : DeleteModelProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const handleDelete = useCallback(async () => {
        try {
            setIsLoading(true)
            let updatedData: User[] = [];

            updatedData = [...(userData ?? [])];
            updatedData.splice(id ?? 0, 1);


            await apiPut(`/${userId}`, { data: updatedData, dataCount: (userData?.length ?? 0) - 1 });

            handleUpdateUserData();
            handleClose();
        } catch (err: any) {
        } finally {
            setIsLoading(false);
        }
    }, [isLoading, setIsLoading, handleUpdateUserData, handleClose])
    return (
        <div className='w-full h-screen flex justify-center items-center fixed top-0 left-0 backdrop-blur-sm bg-black/15'>
            <div className='sm:w-[400px] w-full p-5 flex flex-col gap-5 bg-white rounded-lg'>
                <p>Are you sure you want to delete?</p>
                <div className='w-full flex justify-end items-center gap-3'>
                    <Button
                        onClick={handleDelete}
                        isLoading={isLoading}
                        className="bg-green-500 hover:bg-green-600 text-white"
                    >
                        Yes
                    </Button>

                    <Button
                        type="button"
                        onClick={handleClose}
                        className="bg-red-500 hover:bg-red-600 text-white"
                    >
                        No
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default memo(DeleteModel)