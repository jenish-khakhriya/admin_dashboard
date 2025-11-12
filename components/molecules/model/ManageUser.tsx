
import { UserFormProps } from '@/utils/type';
import UserForm from '@/components/form/UserForm';
import { memo } from 'react';


const ManageUser = ({ id, handleUpdateUserData, data, isEdit, userData, handleClose, userId } : UserFormProps) => {
    return (
        <div className='w-full h-screen flex justify-center items-center fixed top-0 left-0 backdrop-blur-sm bg-black/15'>
            <UserForm id={id} data={data} userId={userId} userData={userData} handleClose={handleClose} handleUpdateUserData={handleUpdateUserData} isEdit={isEdit ?? false} />
        </div>
    )
}

export default memo(ManageUser);