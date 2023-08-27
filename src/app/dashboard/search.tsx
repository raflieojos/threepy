import React, { useState } from "react";
import Table from "./table";
import { Users } from "./users";

export default function Search() {
  const [query, setQuery] = useState("");

  const search = (data: any) => {
    return data.filter((item: any) => item.first_name.toLocaleLowerCase().includes(query));
  };
  return (
    <div>
      <div>
        <div>
          <input type="text" placeholder="Search.." className="bg-white rounded-md py-2 w-1/2 pl-4 mt-20" onChange={(e) => setQuery(e.target.value.toLowerCase())} />
        </div>
        <Table data={search(Users)} />
      </div>
    </div>
  );
}
