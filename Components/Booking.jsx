import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Booking.css';

function Booking() {
    const [rooms, setRooms] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/pg/rooms/')
            .then(response => {
                setRooms(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the room data!', error);
            });
    }, []);

    const filteredRooms = rooms.filter(room =>
        room.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        room.city.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="booking-body">
            <div className="container booking-container">
                <div className="booking-searchbox">
                    <input
                        type="text"
                        className="booking-search-bar"
                        placeholder="Search by Title or Location"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="button" className="booking-search-button">Search</button>
                </div>
                <ul>
                    {filteredRooms.map(room => (
                        <li key={room.roomId}>
                            <div className="booking-room">
                                <div className="booking-image">
                                    <img src={`http://localhost:8080/pg/rooms/${room.fileModel.fileId}`} alt={room.title} />
                                </div>
                                <div className="booking-info">
                                    <h2>{room.title}</h2>
                                    <p>{room.count} rooms available</p>
                                    <div className="booking-amenities">
                                        <h4>Location: </h4>{room.city}
                                        <div className="booking-booking">
                                            <br />
                                            <button type="button" className="booking-check-availability">Check Availability</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Booking;
