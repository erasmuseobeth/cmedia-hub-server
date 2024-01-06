import React from 'react';
// import { Link } from 'react-router-dom';
import Media from '../components/Media'


const Explore = () => {
    return(
        <>
         <div className="chips-wrapper flex-sb">
            <div className="chips-container flex">
                <div className="chip">Action</div>
                <div className="chip">Comedy</div>
                <div className="chip">Drama</div>
                <div className="chip">Science Fiction</div>
                <div className="chip">Horror</div>
                <div className="chip">Adventure</div>
                <div className="chip">Fantasy</div>
                <div className="chip">Romance</div>
                <div className="chip">Animation</div>
                <div className="chip">Thriller</div>
            </div>
            <div className="filter-container-trigger"><span className="trigger-text">Filters</span><i className="fas fa-sliders"></i></div>    
        </div>
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
            
            <div className="filter-group flex-wr">
                <h3 className="filter-label">Duration:</h3>
                <span className="filter">0-10 min</span>
                <span className="filter">11-40 min</span>
                <span className="filter">Less than 1hr</span>
                <span className ="filter">40min to 2hrs</span>
                <span className="filter">Above 1hr</span>
            </div>
        
            <div className="filter-group flex-wr">
                <h3 className="filter-label">Type:</h3>
                <span className="filter">Video</span>
                <span className="filter">Movie</span>
                <span className="filter">Audio</span>
            </div>
        
            <div className="filter-group flex-wr">
                <h3 className="filter-label">Features:</h3>
                <span className="filter">Popular</span>
                <span className="filter">User Channel</span>
                <span className="filter">Collection</span>
                <span className="filter">Views</span>
            </div>
        
            <button className="apply-button">Apply Filters</button>
        </div>
        

       <section className="video-list">
        <Media />
        <Media />
        <Media />
        <Media />
        <Media />    
       </section>

        </>

    );
};

export default Explore ;