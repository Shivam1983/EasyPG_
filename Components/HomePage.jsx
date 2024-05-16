import React, { useState,useEffect } from "react";
import "./HomePage.css";
import IndividualIntervalsExample from "./IndividualIntervalsExample";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogCard from "./BlogCard";
import CustomerReview from "./CustomerReview";
import UsersList from "./UsersList";
import Test from "./Test";
import {fetchReviews} from "./APIs/reviewApi";
import {fetchblogs} from "./APIs/blogApi";
import AddPg from "./addPG";
const HomePage = () => {
  const [reviews, setReviews] = useState([]);
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    fetchReviewsData();
    fetchBlogsData();
  }, []);

  const fetchReviewsData = async () => {
    try {
      const reviewsData = await fetchReviews();
      setReviews(reviewsData);
    } catch (error) {
     console.log("oops error in fetching reviews");
    }
  };
  const fetchBlogsData = async () => {
    try {
      const blogsData = await fetchblogs();
      setblogs(blogsData);
    } catch (error) {
     console.log("oops error in fetching blogs");
    }
  };
  
  const submitReview = () => {
    const userName = document.getElementById("userName").value;
    const userReview = document.getElementById("userReview").value;

    if (userName.trim() === "" || userReview.trim() === "") {
      alert("Please enter your name and review.");
      return;
    }
    const newReview = {
      name: userName,
      review: userReview,
    };
    setReviews([...reviews, newReview]);
    document.getElementById("userName").value = "";
    document.getElementById("userReview").value = "";
  };

  const handleSearch = () => {
    const searchValue = document.getElementById("search").value;
    alert("You searched for: " + searchValue);
  };

  return (
    <div className="home-page-body ">
      <div>
        <h1 className="home-page-h1 text-3xl font-bold underline">
          Welcome to EASY PG
        </h1>
       {/* <Test/> */}
        <p style={{ color: "rgb(96, 96, 96)" }}>Finding PG is now easy</p>
        <div className="home-page-image">
          <a href="#">
            <img
              src="https://i.ibb.co/RzcZN78/EP-3.png"
              alt="EP-3"
            />
          </a>
        </div>
        {/* <div><AddPg/></div> */}
        <div className="home-page-search-container">
          <input
            type="text"
            id="search"
            className="home-page-search"
            placeholder="Search location.."
          />
          <button
            id="search-button"
            className="home-page-search-button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div>
          <hr />
          <div className="trial">
            <IndividualIntervalsExample />
          </div>
          {/* <div><HomeCard/></div> */}
          <div className="home-page-blogs">
            <div className="container my-4">
              <br />
              <br />
              <h2 className="section-title">Featured Blog</h2>
              <br />
              <br />
              <div className="row mb-2">
              {blogs.map((blog, index) => (
                <BlogCard
                  key={index}
                  title={blog.title}
                  text={blog.text}
                  category={blog.category}
                  imgSrc={blog.imgsrc}
                  date={blog.date}
                />
              ))}
              </div>
            </div>
          </div>
          <div className="home-page-alert alert alert-warning text-center">
            <h4 className="alert-heading">Book by Call Now!</h4>
            <p>
              Our friendly staff is ready to assist you. Call us at{" "}
              <strong>(123) 456-7890</strong>.
            </p>
            <a href="tel:+1234567890" className="btn btn-success">
              Call Now
            </a>
          </div>
          <div className="home-page-customer-reviews">
            <h2>Customer Reviews</h2>
            <div className="home-page-reviews">
              {reviews.map((review, index) => (
                <CustomerReview
                  key={index}
                  name={review.name}
                  rating={review.rating}
                  stayLocation={review.stayLocation}
                  dateOfStay={review.dateOfStay}
                  review={review.review}
                  imgSrc={review.imgSrc}
                />
              ))}
            </div>
            <form className="home-page-add-review-form">
              <h3 className="text-3xl font-bold underline">Add Your Review</h3>
              <input
                type="text" 
                id="userName"
                placeholder="Your Name"
                className="form-control"
              />
              <br />
              <textarea
                id="userReview"
                rows="4"
                cols="50"
                placeholder="Your Review"
                className="form-control"
              ></textarea>
              <br />
              <button
                type="button"
                onClick={submitReview}
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
