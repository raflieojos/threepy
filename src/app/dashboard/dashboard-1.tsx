import React from "react";
import { Menu } from "./main-menu";
import Cards from "../dashboard/cards";
export default function Dashboard1() {
  return (
    // Headline Tanggal
    <div>
      <h1 className="font-semibold">Stattistic</h1>
      <span className="text-sm text-gray-03">
        {new Date().toLocaleString("id-ID", {
          weekday: "long",
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </span>
      <div className="mt-10">
        <Cards />
      </div>
    </div>
  );
}
