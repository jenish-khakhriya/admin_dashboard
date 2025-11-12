"use client";

import useUserData from "@/hook/useUserData";
import { User } from "@/utils/type";
import Loader from "../atom/loader";
import Button from "./Button";
import ManageUser from "./model/ManageUser";
import DeleteModel from "./model/DeleteModel";
import NoData from "../atom/NoDataFound";

export default function UsersTable({ data, count, userId }: { data: User[]; count: number, userId: string }) {
    const { userData, handleEdit, handleDelete, isLoading, handleAdd, isAdd, handleUpdateUserData, handleClose, isDelete } = useUserData(data, count, userId);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-full w-full">
                <Loader />
            </div>
        );
    }

    return (
        <>
            {isAdd?.toggle && <ManageUser id={isAdd?.index} isEdit={typeof isAdd?.index === 'number'} userId={userId} handleUpdateUserData={handleUpdateUserData} handleClose={handleClose} userData={userData?.data} data={typeof isAdd?.index === 'number' ? userData?.data[isAdd?.index] : undefined} />}
            {isDelete?.toggle && <DeleteModel handleClose={handleClose} handleUpdateUserData={handleUpdateUserData} id={isDelete?.index} userData={userData?.data} userId={userId} />}
            <div className="lg:w-full w-[1000px] h-full flex flex-col overflow-auto border border-gray-100 bg-green-50 shadow-custom">
                <div className="h-16 w-full bg-white flex justify-between px-5 items-center">
                    <h1 className="text-2xl font-semibold text-black">User</h1>
                    <Button onClick={handleAdd} className="">Add</Button>
                </div>
                <table className="border-collapse text-left">
                    <thead>
                        <tr className="bg-green-200 text-gray-800">
                            <th className="p-3 border-b">#</th>
                            <th className="p-3 border-b">Created Date</th>
                            <th className="p-3 border-b">Full Name</th>
                            <th className="p-3 border-b">Email</th>
                            <th className="p-3 border-b">Mobile Number</th>
                            <th className="p-3 border-b text-center">Actions</th>
                        </tr>
                    </thead>

                    {userData?.data?.length > 0 ? (
                        <tbody>
                            {userData?.data?.map((user, index: number) => (
                                <tr
                                    key={index}
                                    className="hover:bg-green-100 transition-colors duration-150"
                                >
                                    <td className="p-3 border-b">{index + 1}</td>
                                    <td className="p-3 border-b">
                                        {new Date(user.createdDate).toLocaleString()}
                                    </td>
                                    <td className="p-3 border-b">{user.fullName}</td>
                                    <td className="p-3 border-b">{user.Email}</td>
                                    <td className="p-3 border-b">{user.mobileNumber}</td>
                                    <td className="p-3 border-b text-center space-x-3">
                                        <button
                                            onClick={() => handleEdit(index as number)}
                                            className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(index)}
                                            className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    ) : (
                        <NoData />
                    )}
                </table>
            </div>
        </>
    );
}
