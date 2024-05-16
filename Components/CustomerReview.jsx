import React from 'react';
import "./CustomerReview.css";
function CustomerReview({ name, rating, stayLocation, dateOfStay, review, imgSrc }) {
  return (
    <div className="home-page-review" style={{ backgroundColor: 'white' }}>
      <img src={imgSrc} alt="" />
      <h4>{name}</h4><br />
      <p>
        Rating: {rating}/5 <br />
        Stayed at: {stayLocation} <br />
        Date of Stay: {dateOfStay} <br />
        Review: {review}
      </p>
    </div>
  );
}
CustomerReview.defaultProps={
  name: 'Anonymous',
  rating: 0,
  stayLocation: 'Unknown',
  dateOfStay: 'N/A',
  review: 'No review available',
  imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM4He3CR4PfO9qxZxTKyOjsCM8H_8qEvXEMQ&usqp=CAU",
}
export default CustomerReview;
