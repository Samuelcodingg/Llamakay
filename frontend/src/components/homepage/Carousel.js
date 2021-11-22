import React from 'react';
import { EventCard } from './EventCard';


export const Carousel =()=>{
    return(
        <div>
            <div id="carouselExampleControls1" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" style={{paddingTop:"2rem", paddingBottom:"1rem"}}>
                    <div className="carousel-item active">
                        <div className="container d-block">
                            <div className="row">
                                <EventCard />
                                <EventCard />
                                <EventCard />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container d-block">
                            <div className="row">
                                <EventCard />
                                <EventCard />
                                <EventCard />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container d-block">
                            <div className="row">
                                <EventCard />
                                <EventCard />
                                <EventCard />
                            </div>
                        </div>                    
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}