import React from 'react';
import './Booking.css';

function Booking() {
    return (
        <div className="booking-body">
            <div className="container booking-container">
                <div className="booking-searchbox">
                    <input type="text" className="booking-search-bar" placeholder="Search On EasyPG" />
                </div>
                <ul>
                    <li>
                        <div className="booking-room">
                            <div className="booking-image">
                                <img src="https://i.ibb.co/dfXwM23/room1.jpg" alt="Hotel Image" />
                            </div>
                            <div className="booking-info">
                                <h2>Taj Hotel</h2>
                                <p>Nestled in the heart of a serene landscape, our luxury resort offers an unparalleled experience of relaxation and comfort. With elegantly designed rooms and world-class amenities, we ensure a stay that feels like a home away from home.</p>
                                <div className="booking-amenities">
                                    <h4>Amenities: </h4> Wi-Fi, 24/7 Room Service, Fitness Center, Swimming Pool, Spa Services, Restaurant On-Site, Free Parking, Laundry Service.
                                    <div className="booking-booking">
                                        <br />
                                        <button type="button" className="booking-check-availability">Check Availability</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                <li>
                <div className="booking-room">
                    <div className="booking-image">
                        <img src="https://i.ibb.co/f92QLb9/room5.jpg" alt="Hotel Image"/>
                    </div>
                    <div className="booking-info">
                        <h2>Beachfront Hotel</h2>
                        <p>Wake up to the sound of waves at our beachfront hotel. With stunning ocean views from every room, direct beach access, and a range of water sports activities, its the perfect getaway for beach lovers.</p>
                        <div className="booking-amenities"><h4>Amenities: </h4> Wi-Fi, 24/7 Room Service, Fitness Center, Swimming Pool, Spa Services, Restaurant On-Site, Free Parking, Laundry Service.
                            <div className="booking"><br/>   
                            <button type="button" className="booking-check-availability">Check Availability</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className="booking-room">
                    <div className="booking-image">
                        <img src="https://i.ibb.co/mttxvfg/room6.jpg" alt="Hotel Image" />
                    </div>
                    <div className="booking-info">
                        <h2>Mountain Lodge</h2>
                        <p>Located in the heart of the mountains, our lodge offers breathtaking views and easy access to hiking trails. After a day of adventure, relax in our cozy rooms or by the roaring fire in our communal lounge.</p>
                        <div className="booking-amenities"><h4>Amenities: </h4> Wi-Fi, 24/7 Room Service, Fitness Center, Swimming Pool, Spa Services, Restaurant On-Site, Free Parking, Laundry Service.
                            <div className="booking-booking"><br/>   
                            <button type="button" className="booking-check-availability">Check Availability</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className="booking-room">
                    <div className="booking-image">
                        <img src="https://i.ibb.co/mttxvfg/room6.jpg" alt="Hotel Image" />
                    </div>
                    <div className="booking-info">
                        <h2>Mountain Lodge</h2>
                        <p>Located in the heart of the mountains, our lodge offers breathtaking views and easy access to hiking trails. After a day of adventure, relax in our cozy rooms or by the roaring fire in our communal lounge.</p>
                        <div className="booking-amenities"><h4>Amenities: </h4> Wi-Fi, 24/7 Room Service, Fitness Center, Swimming Pool, Spa Services, Restaurant On-Site, Free Parking, Laundry Service.
                            <div className="booking-booking"><br/>   
                            <button type="button" className="booking-check-availability">Check Availability</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className="booking-room">
                    <div className="booking-image">
                        <img src="https://i.ibb.co/mttxvfg/room6.jpg" alt="Hotel Image" />
                    </div>
                    <div className="booking-info">
                        <h2>Mountain Lodge</h2>
                        <p>Located in the heart of the mountains, our lodge offers breathtaking views and easy access to hiking trails. After a day of adventure, relax in our cozy rooms or by the roaring fire in our communal lounge.</p>
                        <div className="booking-amenities"><h4>Amenities: </h4> Wi-Fi, 24/7 Room Service, Fitness Center, Swimming Pool, Spa Services, Restaurant On-Site, Free Parking, Laundry Service.
                            <div className="booking-booking"><br/>   
                            <button type="button" className="booking-check-availability">Check Availability</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            </ul>
        </div>
    
    </div>
    );
}

export default Booking;