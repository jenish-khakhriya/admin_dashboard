
"use client";
import { apiGet } from '@/utils/api';
    import { User } from '@/utils/type';
import React, { useCallback, useState } from 'react'

    const useUserData = (data : User[],count : number,userId : string) => {
        console.log(data);
        
        const [userData,setUserData] = useState({data : data ?? [],count : count ?? 0});
        const [isLoading,setIsLoading] = useState(false);
        const [isAdd,setIsAdd] = useState<{toggle : boolean; index ?: number}>({toggle : false});
         const [isDelete,setIsDelete] = useState<{toggle : boolean; index ?: number}>({toggle : false});

        const handleEdit = useCallback(async (id : number) =>{
               setIsAdd({toggle : true,index : id}); 
        },[]);

        const handleDelete = useCallback(async (id : number) =>{
            setIsDelete({toggle : true,index : id})
        },[]);

        // add

         const handleAdd = useCallback(async () =>{
            setIsAdd({toggle : true});
        },[]);



        // update user
        const handleUpdateUserData = useCallback(async () =>{
            try {
                setIsLoading(true);
                if (userId) {
                  const response = await apiGet({}, `/${userId}`);
                    if(response){
                        setUserData({data : response?.data ?? [],count : response?.dataCount ?? 0})
                    }
                    
                }
              } catch (err) {
                console.error("Error fetching data:", err);

              }
              finally{
                setIsLoading(false);
              }
        },[userData,setIsLoading,isLoading,setUserData]);

        // handleClose popUp
        const handleClose = useCallback(async () =>{
            setIsAdd({toggle : false});
            setIsDelete({toggle : false})
        },[isAdd]);


    return (
        {   
            handleClose,
            handleUpdateUserData,
            isAdd,
            handleAdd,
            handleEdit,
            handleDelete,
            userData,
            isLoading,
            isDelete
        }
    )
    }

    export default useUserData