import React, { memo, useState } from "react";
import { EntireFilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";

const EntireFilter = memo(() => {
  const [selectors, setSelectors] = useState([]);
  function handleClick(e, item) {
    const newSelectors = [...selectors];
    if (newSelectors.includes(item)) {
      const index = newSelectors.findIndex(selector => selector === item);
      newSelectors.splice(index, 1);
    } else {
      newSelectors.push(item);
    }
    setSelectors(newSelectors);
  }
  const isChecked = item => {
    return selectors.includes(item) ? "active" : "";
  };
  return (
    <EntireFilterWrapper>
      <div className="filter-list">
        {filterData.map(item => {
          return (
            <div
              key={item}
              className={`filter-item ${isChecked(item)}`}
              onClick={e => handleClick(e, item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </EntireFilterWrapper>
  );
});

export default EntireFilter;
