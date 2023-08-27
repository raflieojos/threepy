import Logo from "@/components/logo";
import "../dashboard/index.css";
import React from "react";
import MainMenu, { Menu } from "./main-menu";
import Dahsboard from "@/components/svgs/dashboard-menu-icon";
import Apssmenu from "@/components/svgs/apps-menu-icon";
import Cards from "./cards";
import Server from "@/components/svgs/server-menu-icon";
import Documents from "@/components/svgs/documents-menu-icon";
import Support from "@/components/svgs/support-menu-icon";

const menus = [
  { icon: Dahsboard, title: "Dashboard", href: "/" },
  { icon: Apssmenu, title: "My Apss", href: "/" },
  { icon: Server, title: "Server Monitor", href: "/" },
  { icon: Documents, title: "Documents", href: "/" },
  { icon: Support, title: "Support", href: "/" },
] as Menu[];

export default function Page() {
  return (
    <div className=" flex w-60 bg-white flex-none flex-col justify-between p-6">
      <div className="flex flex-col space-y-6">
        <div>
          <Logo className="w-40 px-4" />
        </div>

        <ul className="flex flex-col space-y-2">
          {menus.map((menu, index) => (
            <MainMenu key={index} title={menu.title} href={menu.href} icon={menu.icon} />
          ))}
        </ul>
      </div>
    </div>
  );
}
