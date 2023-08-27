import React from "react";

export default function Cards() {
  return (
    <div className="p-6  bg-white rounded ">
      <p className="font-extrabold">Support Tiket</p>
      <div className="mt-4">
        <ul className="space-y-3 ">
          <li className="border rounded p-4 ">
            <img src="./rounded.png" alt="rounded" className="flex flex-row bg-slate-100 rounded-full w-10 float-left items-center" />
            <p className=" text-center font-mono">Incident IdPro</p>
            <p className=" text-center text-sm">#IdProwskt02240</p>
          </li>
          <li className="border rounded p-4 ">
            <img src="./rounded.png" alt="rounded" className="flex flex-row bg-slate-100 rounded-full w-10 float-left items-center" />
            <p className=" text-center font-mono">Incident IdPro</p>
            <p className=" text-center text-sm">#IdProwskt02240</p>
          </li>
          <li className="border rounded p-4 ">
            <img src="./rounded.png" alt="rounded" className="flex flex-row bg-slate-100 rounded-full w-10 float-left items-center" />
            <p className=" text-center font-mono">Incident IdPro</p>
            <p className=" text-center text-sm">#IdProwskt02240</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
