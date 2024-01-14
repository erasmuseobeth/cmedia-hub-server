import React from 'react';
// import { Link } from 'react-router-dom';
import Image from '../components/Image';


const Home = () => {
    return(
        <>
        <section className="highlights flex">
        <div className="nt-container flex-col card1">
            <div className="illustration">
                <Image name='serv1.png' alt="image" />
            </div>
            <div className="illustration-text">
                <p>Connect Easily with devices</p>
                <p>Handle All your media in one place</p>
            </div>
        </div>
        <div className="nt-container card1">
            <div className="illustration">
                <Image name='serv1.png' alt="image" />
            </div>
            <div className="illustration-text">
                <p>Stream Media with Family and Friends <span>One Media Multiple Screens</span> <span>Better Streaming Experience on your own Home Server</span></p>
            </div>
        </div>
        <div className="nt-container card1">
            <div className="illustration">
                <Image name='serv2.png' alt="image" />
            </div>
            <div className="illustration-text">
                <p>Upload Store Download and Stream <span>All in your own personal Home Server</span></p>
                <p>Say bye to sending media to another device to watch just watch directly from any device of choice</p>
            </div>
        </div>
        <div className="nt-container card1">
            <div className="illustration">
                <Image name='serv1.png' alt="image" />
            </div>
            <div className="illustration-text">
                <p>Simple and Easy Media Experience across all Devices</p>
                <p>Sign up and login to start personalizing</p>
            </div>
        </div> 
        </section>
        <section className="features flex-col">
            <div className="nt-container card1 flex">
                <div className="illustration">
                    <Image name='serv2.png' alt="image" />
                </div>
                <div className="illustration-text">
                    <p>Connect Easily with devices,</p>
                    <p>Handle All your media in one place</p>
                </div>
            </div>
            <div className="nt-container card1 flex">
                <div className="illustration-text">
                    <p>Stream Media with Family and Friends <span>One Media Multiple Screens</span> <span>Better Streaming Experience on your own Home Server</span></p>
                </div>
                <div className="illustration">
                <Image name='img1.png' alt="image" />
                </div>
            </div>
            <div className="nt-container card1 flex">
                <div className="illustration">
                    <Image name='serv1.png' alt="image" />
                </div>
                <div className="illustration-text">
                    <p>Upload, Store, Download and Stream <span>All in your own personal Home Server</span></p>
                    <p>Say bye to sending media to another device to watch just watch directly from any device of choice</p>
                </div>
            </div>
            <div className="nt-container card1 flex">
                <div className="illustration">
                <Image name='illus14.png' alt="image" />
                </div>
                <div className="illustration-text">
                    <p>Simple and Easy Media Experience across all Devices</p>
                    <p>Sign up and login to start personalizing</p>
                </div>
            </div> 
        </section>
        </>   
    );
};

export default Home ;