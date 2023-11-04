import React from "react";
import { Search } from "./Search";

export function Header({ movie, setSearch, search, addMovie }) {
  return (
    <div>
      <header>
        <div className="Header-section main">
          <ul className="header-list">
            <li style={{ color: "white" }}>🍿 My Movies List 🥤</li>
            <li>
              <Search setSearch={setSearch} search={search}></Search>
            </li>
            <li>🎬 {movie.length}</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
