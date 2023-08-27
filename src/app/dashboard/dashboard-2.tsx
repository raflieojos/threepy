"use client";
import React, { useState } from "react";
import Usersicon from "@/components/svgs/users-icon";
import { Users } from "./users";
import Table from "./table";
import Search from "./search";

export default function Dashboard2() {
  // const [query, setQuery] = useState("");

  // const search = (data: any) => {
  //   return data.filter((item: any) => item.first_name.toLocaleLowerCase().includes(query));
  // };

  // console.log(Users.filter((user) => user.first_name.toLocaleLowerCase().includes("fe")));

  return (
    <div className="relative">
      <Usersicon className="absolute right-4" />
      <div>
        <div>
          <Search />
        </div>
      </div>
    </div>
  );
}
