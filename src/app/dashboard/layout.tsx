import Dahsboard from "@/components/svgs/dashboard-menu-icon";
import Logo from "@/components/logo";
import Link from "next/link";
import Page from "../dashboard/page";
import Dashboard1 from "./dashboard-1";
import { useRouter } from "next/navigation";
import Dashboard2 from "./dashboard-2";

export default function dahsboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row h-screen w-screen">
      <Page />
      {/* Main Menu */}
      <div className=" flex bg-white flex-none flex-col justify-between p-6 text-white"></div>

      {/* Dashboard1 */}
      <div className="flex flex-col w-80 px-7 py-12 space-y-4 bg-accent-3">
        <Dashboard1 />
      </div>
      <div className="flex-1 px-7 py-12 space-y-4 bg-accent-3">
        <Dashboard2 />
      </div>
    </div>
  );
}
