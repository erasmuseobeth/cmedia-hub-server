import React from "react";


const FilterGroup = ( { filterLabel, filters } ) => {
    return ( 
        <div className="filter-group flex-wr">
            <h3 className="filter-label">{ filterLabel } </h3>
            {/* <span className="filter">Last hour</span>
            <span className="filter">Today</span>
            <span className="filter">This week</span>
            <span className="filter">This month</span>
            <span className="filter">This year</span>
            <span className="filter">Above 1 year</span> */}
            { filters }
        </div>
     );
}
 
export default FilterGroup;