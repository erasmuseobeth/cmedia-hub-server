import React from "react";

const Chips = ( { chips }) => {
    return ( 
        <div className="chips-wrapper flex-sb">
           <div className="chips-container flex">
               {/* <div className="chip">Action</div>
               <div className="chip">Comedy</div>
               <div className="chip">Drama</div>
               <div className="chip">Science Fiction</div>
               <div className="chip">Horror</div>
               <div className="chip">Adventure</div>
               <div className="chip">Fantasy</div>
               <div className="chip">Romance</div>
               <div className="chip">Animation</div>
               <div className="chip">Thriller</div> */}
               {
                chips
               }
           </div>
           <div className="filter-container-trigger">
               <span className="trigger-text">Filters</span>
               <FontAwesomeIcon icon={faFilter} className='icon social-icon'/>
           </div>    
       </div>
     );
}
 
export default Chips;