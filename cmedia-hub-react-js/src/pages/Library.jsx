import React from 'react';
// import { Link } from 'react-router-dom';
import Media from '../components/Media'

const Library = () => {
    return(
        
        <>
             <section class="library flex-wr">
        <div class="library-heading">Library Heading and some texts</div>
        <div class="library-card clay5">
            <div class="library-illustration library-card-overlay">
                Create New Library Collection
                <span class="plus-icon">+</span>
            </div>
            <div class="library-info flex-sb">
                <p class="library-title"></p>
                <i class="fa-solid fa-ellipsis-vertical library-options">
                    <div class="library-options-hidden flex-col">
                        <i class="fa-solid fa-bookmark library-icon">Save</i>
                        <i class="fa-solid fa-clock library-icon">Watch Later</i>
                        <i class="fa-solid fa-pen-nib library-icon">Pin</i>
                        <i class="fa-solid fa-trash-can library-icon">Remove</i>
                    </div>
                </i>     
            </div>
        </div>
        <div class="library-card clay5">
            <div class="library-illustration library-card-overlay">
                <img src="../statics/images/music (2).png" alt="" />
            </div>
            <div class="library-info flex-sb">
                <p class="library-title">Musics</p>
                <i class="fa-solid fa-ellipsis-vertical library-options">
                    <div class="library-options-hidden flex-col">
                        <i class="fa-solid fa-bookmark library-icon">Save</i>
                        <i class="fa-solid fa-clock library-icon">Watch Later</i>
                        <i class="fa-solid fa-pen-nib library-icon">Pin</i>
                        <i class="fa-solid fa-trash-can library-icon">Remove</i>
                    </div>
                </i>     
            </div>
        </div>
        <div class="library-card clay5">
            <div class="library-illustration library-card-overlay">
                <img src="../statics/images/popcorn6.png" alt="" />
            </div>
            <div class="library-info flex-sb">
                <p class="library-title">Videos</p>
                <i class="fa-solid fa-ellipsis-vertical library-options">
                    <div class="library-options-hidden flex-col">
                        <i class="fa-solid fa-bookmark library-icon">Save</i>
                        <i class="fa-solid fa-clock library-icon">Watch Later</i>
                        <i class="fa-solid fa-pen-nib library-icon">Pin</i>
                        <i class="fa-solid fa-trash-can library-icon">Remove</i>
                    </div>
                </i>     
            </div>
        </div>
        <div class="library-card clay5">
            <div class="library-illustration library-card-overlay">
                <img src="../statics/images/music.png" alt="" />
            </div>
            <div class="library-info flex-sb">
                <p class="library-title">Audios</p>
                <i class="fa-solid fa-ellipsis-vertical library-options">
                    <div class="library-options-hidden flex-col">
                        <i class="fa-solid fa-bookmark library-icon">Save</i>
                        <i class="fa-solid fa-clock library-icon">Watch Later</i>
                        <i class="fa-solid fa-pen-nib library-icon">Pin</i>
                        <i class="fa-solid fa-trash-can library-icon">Remove</i>
                    </div>
                </i>     
            </div>
        </div>
        <div class="library-card clay5">
            <div class="library-illustration library-card-overlay">
                <img src="../statics/images/collection.svg" alt="" />
            </div>
            <div class="library-info flex-sb">
                <p class="library-title">Collections/Playlists</p>
                <i class="fa-solid fa-ellipsis-vertical library-options">
                    <div class="library-options-hidden flex-col">
                        <i class="fa-solid fa-bookmark library-icon">Save</i>
                        <i class="fa-solid fa-clock library-icon">Watch Later</i>
                        <i class="fa-solid fa-pen-nib library-icon">Pin</i>
                        <i class="fa-solid fa-trash-can library-icon">Remove</i>
                    </div>
                </i>     
            </div>
        </div>
        <div class="library-card clay5">
            <div class="library-illustration library-card-overlay">
                <img src="../statics/images/movies.png" alt="" />
            </div>
            <div class="library-info flex-sb">
                <p class="library-title">Movies</p>
                <i class="fa-solid fa-ellipsis-vertical library-options">
                    <div class="library-options-hidden flex-col">
                        <i class="fa-solid fa-bookmark library-icon">Save</i>
                        <i class="fa-solid fa-clock library-icon">Watch Later</i>
                        <i class="fa-solid fa-pen-nib library-icon">Pin</i>
                        <i class="fa-solid fa-trash-can library-icon">Remove</i>
                    </div>
                </i>     
            </div>
        </div>
        <div class="library-card clay5">
            <div class="library-illustration library-card-overlay">
                <img src="../statics/images/favourites.png" alt="" />
            </div>
            <div class="library-info flex-sb">
                <p class="library-title">Favourites</p>
                <i class="fa-solid fa-ellipsis-vertical library-options">
                    <div class="library-options-hidden flex-col">
                        <i class="fa-solid fa-bookmark library-icon">Save</i>
                        <i class="fa-solid fa-clock library-icon">Watch Later</i>
                        <i class="fa-solid fa-pen-nib library-icon">Pin</i>
                        <i class="fa-solid fa-trash-can library-icon">Remove</i>
                    </div>
                </i>     
            </div>
        </div>
        <div class="library-card clay5">
            <div class="library-illustration library-card-overlay">
                <img src="../statics/images/collection.svg" alt="" />
            </div>
            <div class="library-info flex-sb">
                <p class="library-title">Collections/Playlists</p>
                <i class="fa-solid fa-ellipsis-vertical library-options">
                    <div class="library-options-hidden flex-col">
                        <i class="fa-solid fa-bookmark library-icon">Save</i>
                        <i class="fa-solid fa-clock library-icon">Watch Later</i>
                        <i class="fa-solid fa-pen-nib library-icon">Pin</i>
                        <i class="fa-solid fa-trash-can library-icon">Remove</i>
                    </div>
                </i>     
            </div>
        </div>
       
      
             </section>
            <section class="video-list">
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />      
             </section>
        </>

    );
};

export default Library ;