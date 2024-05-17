import React, { useState } from 'react';
import './AddYourPG.css';

function AddYourPG() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [city, setCity] = useState('');
  const [title, setTitle] = useState('');
  const [count, setCount] = useState('');
  
  const handleFileSelect = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('city', city);
      formData.append('title', title);
      formData.append('count', count);
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
        setCount('');
      } else {
        console.error('Error uploading image:', response.statusText);
        window.alert('Error uploading image:', response.statusText);
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
          <div className="column">
            <div className="input-group">
              <div style={{ width: '100%' }}>
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
              </div>
            </div>

            <div style={{ width: '100%', marginTop: '1em' }}>
              <label className="add-your-pg-label" htmlFor="title">Title:</label>
              <input
                className="add-your-pg-input"
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div style={{ width: '100%', marginTop: '1em' }}>
              <label className="add-your-pg-label" htmlFor="count">Count:</label>
              <input
                className="add-your-pg-input"
                type="number"
                id="count"
                name="count"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                required
                min="1"
              />
            </div>

            <div className="dropzone">
              <input type="file" onChange={(e) => handleFileSelect(e.target.files)} />
              {selectedFile ? (
                <p>Selected file: {selectedFile.name}</p>
              ) : (
                <>
                  <p>Upload Image of PG/Hostel Room</p>
                  <p>Drag 'n' drop an image here or click to select a file</p>
                </>
              )}
            </div>

            <input className="add-your-pg-submit" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddYourPG;
