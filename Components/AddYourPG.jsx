// AddYourPG.js

import React, { useState } from 'react';
import './AddYourPG.css';

function AddYourPG() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [city, setCity] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [count, setCount] = useState('');

  const handleFileSelect = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('city', city); // Assuming title is the title
      formData.append('title', title);
      formData.append('count', count); // Assuming count is the count
      formData.append('file', selectedFile);
  
      const response = await fetch('http://localhost:8080/pg/rooms/', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        console.log('Image uploaded successfully!');
        window.alert('Property added successfully!');
        setSelectedFile(null);
        setCity('');
        setTitle('');
        setPrice('');
        setCount('');
        // Handle success (e.g., show a success message)
      } else {
        console.error('Error uploading image:', response.statusText);
        window.alert('Error uploading image:', response.statusText);
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };  
  return (
    <div className="AddYourPG-body">
      <div className="container">
        <br /><br /><br /><br /><br />
        <h1>Add Property</h1>

        <form className="add-your-pg-form" onSubmit={handleSubmit}>
          <label className="add-your-pg-label" htmlFor="city">City:</label>
          <input
            className="add-your-pg-input"
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />

          <label className="add-your-pg-label" htmlFor="title">Title</label>
          <input
            className="add-your-pg-input"
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label className="add-your-pg-label" htmlFor="price">Price:</label>
          <input
            className="add-your-pg-input"
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <label className="add-your-pg-label" htmlFor="count">Number Of Rooms:</label>
          <textarea
            className="add-your-pg-textarea"
            id="count"
            name="count"
            rows="4"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            required
          ></textarea>

          <div className="dropzone">
            <input type="file" onChange={(e) => handleFileSelect(e.target.files)} />
            {selectedFile ? (
              <p>Selected file: {selectedFile.name}</p>
            ) : (
              <>              <p>Upload Image of Pg/Hostel Room..</p>
              <p>Drag 'n' drop an image here or click to select a file</p></>

            )}
          </div>

          <input className="add-your-pg-submit" type="submit" value="Submit" onClick={handleSubmit}/>
        </form>
      </div>
    </div>
  );
}

export default AddYourPG;
