import { url } from "inspector";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Cards from "./cards";

export interface Menu {
  icon: any;
  title: string;
  href: string;
}

export default function MainMenu(propps: Menu) {
  return (
    <div>
      <li className="text-black">
        <Link href="#" className={`relative flex rounded py-3 px-4 hover:bg-gray-100 active:bg-gray-100`}>
          <propps.icon className="mr-4 justify-between" />
          {propps.title}
        </Link>
      </li>
    </div>
  );
}
