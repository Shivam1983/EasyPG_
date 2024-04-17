import React, { useEffect } from 'react';
import './AddYourPG.css';

function AddYourPG() {
    useEffect(() => {
        function handleSubmit(event) {
            event.preventDefault(); // Prevent form submission
            document.body.style.backgroundImage = "url('https://i.ibb.co/1ztdgWf/Whats-App-Image-2023-12-03-at-18-47-47-808541a1.jpg')";
        }

        const form = document.getElementById('addPropertyForm');
        form.addEventListener('submit', handleSubmit);

        return () => {
            form.removeEventListener('submit', handleSubmit);
        };
    }, []); // Empty dependency array ensures that this effect runs only once after component mount

    return (
        <div className="AddYourPG-body">
        <div className="container">
            <br /><br /><br /><br /><br />
            <h1>Add Property</h1>

            <form className="add-your-pg-form" id="addPropertyForm" action="process_property.php" method="post">
                <label className="add-your-pg-label" htmlFor="propertyType">Property Type:</label>
                <input className="add-your-pg-input" type="text" id="propertyType" name="propertyType" required />

                <label className="add-your-pg-label" htmlFor="location">Location:</label>
                <input className="add-your-pg-input" type="text" id="location" name="location" required />

                <label className="add-your-pg-label" htmlFor="price">Price:</label>
                <input className="add-your-pg-input" type="text" id="price" name="price" required />

                <label className="add-your-pg-label" htmlFor="description">Description:</label>
                <textarea className="add-your-pg-textarea" id="description" name="description" rows="4" required></textarea>

                <input className="add-your-pg-submit" type="submit" value="Submit" />
            </form>
        </div>
    </div>  
    );
}

export default AddYourPG;
