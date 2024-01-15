import React from "react";
import ApplyFilterBtn from './ApplyFilterBtn';
import FilterGroup from './FilterGroup';



const FilterContainer = () => {
    return ( 
        <div id="filter-container" className="filter-container">
        <button className="filter-cancel">X</button>
        <h2>Filter Options</h2>
    
        <div className="filter-group flex-wr">
            <h3 className="filter-label">Upload Date:</h3>
            <span className="filter">Last hour</span>
            <span className="filter">Today</span>
            <span className="filter">This week</span>
            <span className="filter">This month</span>
            <span className="filter">This year</span>
            <span className="filter">Above 1 year</span>
        </div>
        <FilterGroup />

        
        <div className="filter-group flex-wr">
            <h3 className="filter-label">Duration:</h3>
            <span className="filter">0-10 min</span>
            <span className="filter">11-40 min</span>
            <span className="filter">Less than 1hr</span>
            <span className ="filter">40min to 2hrs</span>
            <span className="filter">Above 1hr</span>
        </div>
        <FilterGroup filterLabel="gg" />

    
        <div className="filter-group flex-wr">
            <h3 className="filter-label">Type:</h3>
            <span className="filter">Video</span>
            <span className="filter">Movie</span>
            <span className="filter">Audio</span>
        </div>
        <FilterGroup />

    
        <div className="filter-group flex-wr">
            <h3 className="filter-label">Features:</h3>
            <span className="filter">Popular</span>
            <span className="filter">User Channel</span>
            <span className="filter">Collection</span>
            <span className="filter">Views</span>
        </div>
        <FilterGroup />
    
        {/* <button className="apply-button">Apply Filters</button> */}
        <ApplyFilterBtn name="Apply Filters"/>
    </div>
     );
}
 
export default FilterContainer;