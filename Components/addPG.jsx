import React, { useState } from 'react';

const AddPg = () => {
  const [id, setId] = useState('');
  const [roomDetails, setRoomDetails] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const API = "http://localhost:8080/pg/rooms/";

  const handleSearch = () => {
    // Make API call to fetch room details
    fetch(API + id)
      .then(response => response.json())
      .then(data => {
        // Extract room details from API response
        const roomDetails = data.roomDetails;
        const base64Image = roomDetails.image; // Assuming the image is returned as base64 encoded string

        // Decode base64 image to binary data
        const binaryImageData = atob(base64Image);

        // Convert binary data to blob
        const blob = new Blob([new Uint8Array(Array.from(binaryImageData).map(c => c.charCodeAt(0)))], { type: 'image/jpeg' });

        // Create URL for the blob
        const imageUrl = URL.createObjectURL(blob);

        // Set room details and image URL
        setRoomDetails(roomDetails);
        setImageUrl(imageUrl);
      })
      .catch(error => {
        console.error('Error fetching room details:', error);
      });
  }

  return (
    <>
      <input
        type="text"
        id="id"
        name="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <input type="submit" value="Submit" onClick={handleSearch} />
      
      {/* Display room details and image */}
      {roomDetails && (
        <div id="room-details-container">
          <h2>{roomDetails.name}</h2>
          <img src={imageUrl} alt={roomDetails.name + ' Image'} />
          <p>{roomDetails.description}</p>
        </div>
      )}
    </>
  );
};

export default AddPg;
