
import React from "react";

interface NoDataProps {
  colSpan?: number; 
  message?: string;
}

const NoData: React.FC<NoDataProps> = ({ colSpan = 6, message = "No Data Found" }) => {
  return (
    <tbody className="w-full h-full">
      <tr className="w-full h-full">
        <td colSpan={colSpan} className="h-full text-center py-10 text-gray-500">
          <div className="h-full flex justify-center items-center w-full">
                 {message}
          </div>  
        </td>
      </tr>
    </tbody>
  );
};

export default NoData;
