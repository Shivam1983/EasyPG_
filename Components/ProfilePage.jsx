import React, { useState } from 'react';
import axios from 'axios';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageFile: null, // Initialize with null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, imageFile: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the data
    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('image', formData.imageFile);

    try {
      // Make a POST request to your API endpoint
      await axios.post('/api/upload', data);

      // Handle success (e.g., show a success message)
      console.log('Data uploaded successfully!');
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('Error uploading data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleInputChange}
      />
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
