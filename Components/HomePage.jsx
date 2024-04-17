import React from 'react';
import './HomePage.css';

const HomePage = () => {
    const submitReview = () => {
        const userName = document.getElementById("userName").value;
        const userReview = document.getElementById("userReview").value;
        const newReview = document.createElement("div");
        newReview.className = "home-page-review";
        newReview.innerHTML = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM4He3CR4PfO9qxZxTKyOjsCM8H_8qEvXEMQ&usqp=CAU' alt=''>" + "<h4>" + userName + "</h4><p>" + userReview + "</p>";
        document.querySelector(".home-page-reviews-container").appendChild(newReview);

        document.getElementById("userName").value = "";
        document.getElementById("userReview").value = "";
    };

    const handleSearch = () => {
        const searchValue = document.getElementById("search").value;
        alert("You searched for: " + searchValue);
    };

    return (
        <div className="home-page-body">
            <div>
            <h1 className="home-page-h1">Welcome to EASY PG</h1>
            <p style={{ color: 'rgb(96, 96, 96)' }}>Finding PG is now easy</p>
            <div className="home-page-image">
                <a href="https://imgbb.com/"><img src="https://i.ibb.co/RzcZN78/EP-3.png" alt="EP-3" border="0" /></a>
            </div>
            <div className="home-page-search-container">
                <input type="text" id="search" className="home-page-search" placeholder="Search location.." />
                <button id="search-button" className="home-page-search-button" onClick={handleSearch}>Search</button>
            </div>

            <div>
            <hr />
            <div id="carouselExampleCaptions" className="home-page-carousel-container carousel slide carousel-fade" data-ride="carousel" data-interval="3000">
                <ol className="carousel-indicators">
                    <li data-slide-to="0" className="active"></li>
                    <li data-slide-to="1"></li>
                    <li data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1623625434462-e5e42318ae49?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9zdGVsfGVufDB8fDB8fHww"
                            className="home-page-carousel-slides d-block w-100" alt="..." width="536.8" height="407.5" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Taj Hotels</h2>
                            <p>Mall Road,Lucknow,Uttar Pradesh</p>
                            <button className="btn btn-success">View More</button>
                            <button className="btn btn-danger">Call</button>
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1619810230359-b2c2f61c49cd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9zdGVsfGVufDB8fDB8fHww"
                            className="home-page-carousel-slides d-block w-100" alt="..." width="536.8px" height="207.5" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Oberoi Hotels and Resorts</h2>
                            <p>sector-23, Swaroop Nagar,Kanpur-208009</p>
                            <button className="btn btn-success"><a href="http://127.0.0.1:5500/booking_easypg.html"></a>View More</button>
                            <button className="btn btn-danger">Call</button>
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1608198399988-341f712c3711?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvc3RlbHxlbnwwfHwwfHx8MA%3D%3D"
                            className="home-page-carousel-slides d-block w-100" alt="..." width="536.8" height="407.5" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Maurya Sheraton Hotels and Towers</h2>
                            <p>Sector-56, Sarojini Nagar,Delhi</p>
                            <button className="btn btn-success">View More</button>
                            <button className="btn btn-danger">Call</button>
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="home-page-blogs">
                <div className="container my-4"><br /><br />
                    <h2 className="section-title">Featured Blog</h2><br /><br />
                    <div className="row mb-2">
                        <div className="col-md-6">
                            <div className="home-page-box">
                                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static bg-white">
                                        <strong className="d-inline-block mb-2 text-primary">World</strong>
                                        <h3 className="mb-0">The Points Guy</h3>
                                        <div className="mb-1 text-muted">Nov 12</div>
                                        <p className="card-text mb-auto">Maximize your travel with expert insights on loyalty
                                            programs, credit card rewards, and travel hacks, ensuring you make the most of your
                                            hotel bookings for a rewarding journey...</p>
                                        <a href="#" className="stretched-link">Continue reading</a>
                                    </div>
                                    <div className="col-auto d-none d-lg-block">
                                        <img className="bd-placeholder-img" width="536.8" height="443.5"
                                            src="https://source.unsplash.com/500x400/?tech,code,laptop"
                                            alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home-page-box">
                                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static bg-white">
                                        <strong className="d-inline-block mb-2 text-success">Design</strong>
                                        <h3 className="mb-0">Hotelier Magazine</h3>
                                        <div className="mb-1 text-muted">Nov 11</div>
                                        <p className="mb-auto">Stay updated on hotel industry trends, management strategies, and
                                            news, gaining valuable insights that elevate your understanding of accommodations
                                            and enhance your hotel booking decisions.</p>
                                        <a href="#" className="stretched-link">Continue reading</a>
                                    </div>
                                    <div className="col-auto d-none d-lg-block">
                                        <img className="bd-placeholder-img" width="536.8" height="463.5"
                                            src="https://images.unsplash.com/photo-1623625434462-e5e42318ae49?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9zdGVsfGVufDB8fDB8fHww" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-6">
                            <div className="home-page-box" id="I1">
                                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static bg-white">
                                        <strong className="d-inline-block mb-2 text-danger">World</strong>
                                        <h3 className="mb-0">Lonely Planet Blog</h3>
                                        <div className="mb-1 text-muted">Nov 12</div>
                                        <p className="card-text mb-auto">Discover travel inspiration, destination guides, and
                                            cultural insights, enhancing your hotel booking experience with expert tips and
                                            recommendations from the renowned Lonely Planet travel blog..</p>
                                        <a href="#" className="stretched-link">Continue reading</a>
                                    </div>
                                    <div className="col-auto d-none d-lg-block">
                                        <img className="bd-placeholder-img" width="536.8" height="443.5"
                                            src="https://images.unsplash.com/photo-1520277739336-7bf67edfa768?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home-page-box">
                                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static bg-white">
                                        <strong className="d-inline-block mb-2 text-warning">Innovation</strong>
                                        <h3 className="mb-0">The Blonde Abroad </h3>
                                        <div className="mb-1 text-muted">Nov 11</div>
                                        <p className="mb-auto">oin Kiersten Rich on The Blonde Abroad, a solo female travel blog
                                            offering personal narratives, destination guides, and hotel recommendations, adding
                                            a personal touch to your travel planning and bookings.</p>
                                        <a href="#" className="stretched-link">Continue reading</a>
                                    </div>
                                    <div className="col-auto d-none d-lg-block">
                                        <img className="bd-placeholder-img" width="536.8" height="443.5"
                                            src="https://images.unsplash.com/photo-1557367184-663fba4b8b91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-page-alert alert alert-warning text-center">
                <h4 className="alert-heading">Book by Call Now!</h4>
                <p>Our friendly staff is ready to assist you. Call us at <strong>(123) 456-7890</strong>.</p>
                <a href="tel:+1234567890" className="btn btn-success">Call Now</a>
            </div>
            <div className="home-page-customer-reviews">
                <h2>Customer Reviews</h2>
                <div className="home-page-reviews">
                    <div className="home-page-review" style={{ backgroundColor: 'white' }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM4He3CR4PfO9qxZxTKyOjsCM8H_8qEvXEMQ&usqp=CAU" alt="" />
                        <h4>John Doe</h4><br />
                        <p>Rating: 5/5 <br />
                            Stayed at: Taj Hotels, Mall Road, Lucknow
                            Date of Stay: March 2023
                            Review: My experience at Taj Hotels was nothing short of exceptional. The staff was incredibly
                            welcoming and attentive, ensuring that every aspect of my stay was comfortable. The room was
                            elegantly furnished, offering a perfect blend of luxury and coziness. The location on Mall Road
                            provided easy access to the city's attractions. I particularly enjoyed the delicious meals at
                            the hotel's restaurant. I highly recommend Taj Hotels to anyone looking for a memorable and
                            luxurious stay in Lucknow.</p>
                    </div>
                    <div className="home-page-review" style={{ backgroundColor: 'white' }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM4He3CR4PfO9qxZxTKyOjsCM8H_8qEvXEMQ&usqp=CAU" alt="" />
                        <h4>Jane Smith</h4><br />
                        <p>Rating: 4/5 <br />
                            Stayed at: Oberoi Hotels and Resorts, Sector-23, Swaroop Nagar, Kanpur
                            Date of Stay: April 2023
                            Review: My stay at Oberoi Hotels and Resorts was delightful. The staff was courteous, and the
                            service was top-notch. The room was spacious, well-appointed, and provided a beautiful view of
                            the city. The hotel's attention to detail was evident in every aspect, from the cleanliness of
                            the facilities to the quality of the amenities. While I thoroughly enjoyed my stay, I believe a
                            wider variety of dining options would further enhance the overall experience</p>
                    </div>
                    <div className="home-page-review" style={{ backgroundColor: 'white' }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM4He3CR4PfO9qxZxTKyOjsCM8H_8qEvXEMQ&usqp=CAU" alt="" />
                        <h4>David Johnson</h4><br />
                        <p>Rating: 3/5 <br />
                            Stayed at: Maurya Sheraton Hotels and Towers, Sector-56, Sarojini Nagar, Delhi
                            Date of Stay: May 2023
                            Review: My experience at Maurya Sheraton Hotels and Towers was satisfactory overall. The room
                            was comfortable and equipped with all the necessary amenities. However, I found the service to
                            be somewhat lacking, as there were delays in fulfilling some of my requests. Additionally, the
                            location of the hotel, while convenient for business travelers, may not be ideal for those
                            looking to explore the city's tourist attractions.</p>
                    </div>
                </div>
                <form className="home-page-add-review-form">
                    <h3>Add Your Review</h3>
                    <input type="text" id="userName" placeholder="Your Name" className="form-control" /><br />
                    <textarea id="userReview" rows="4" cols="50" placeholder="Your Review" className="form-control"></textarea><br />
                    <button type="button" onClick={submitReview} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        </div>  
    </div>
    );
};

export default HomePage;
