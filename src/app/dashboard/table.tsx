import React from "react";
import Search from "./search";
import Cards from "./cards";

export default function Table({ data }: any) {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700 normal-case bg-white border-b dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 ">
            <tr className="justify-items-center">
              <th className="px-6 py-4">Name</th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Operation System
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any) => (
              <tr key={item.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 justify-items-center">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.first_name}
                </th>
                <td className="px-6 py-4">{item.last_name}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.last_os}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
