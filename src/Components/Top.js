import React from "react";
import "./top.css";
import { useState } from "react";

function Top(Props) {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = async (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    Props.onChange(e.target.value);
  };

  return (
    <div className="top-panel">
      <div>
        <h4 className="tt">
          Total: <span className="digit">{Props.total}</span>
        </h4>
        <h4 className="tt">
          Discharged: <span className="digit">{Props.discharged}</span>
        </h4>
        <h4 className="tt">
          Deaths: <span className="digit">{Props.deaths}</span>
        </h4>
      </div>
      <div class="input-group rounded search-box">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search for a State"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={handleChange}
          value={searchInput}
        />
      </div>
    </div>
  );
}

export default Top;
