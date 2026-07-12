import { NativeSelect, Slider, TextField } from "@mui/material";
import React, { useState } from "react";

function Search({search, setSearch}) {


  const handleSearch = (e) =>
    setSearch({ ...search, [e.target.name]: e.target.value });

  function valuetext() {
    return `${search.priceRange}°C`;
  }
  return (
    <div className="search-container">
      <h4>search for a specific items :</h4>
      <form>
        <div>
          <label htmlFor=""> product name</label>
          <TextField
            id="standard-basic"
            label="Standard"
            name="title"
            variant="standard"
            onChange={handleSearch}
          />
        </div>
        <div>
          <label htmlFor=""> products categories :</label>
          <NativeSelect
            defaultValue={30}
            onChange={handleSearch}
            inputProps={{
              name: "category",
              id: "uncontrolled-native",
            }}
          >
            <option value={""}>all</option>
            <option value={"keybord"}>keybord</option>

            <option value={"mouse"}>mouse</option>
            <option value={"headphone"}>headphone</option>
            <option value={"monitor"}>monitor</option>
            <option value={"webcam"}>webcam</option>


          </NativeSelect>
        </div>

        <div>
          <label htmlFor=""> products price: </label>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={search.priceRange}
            onChange={handleSearch}
            name="priceRange"
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
