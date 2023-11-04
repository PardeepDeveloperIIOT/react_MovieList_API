import React from "react";

export function Search({ setSearch, search }) {
  return (
    <input
      type="text"
      placeholder="Search Movie"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
