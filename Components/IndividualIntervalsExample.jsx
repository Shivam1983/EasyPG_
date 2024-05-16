import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="light" interval={1000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1623625434462-e5e42318ae49?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9zdGVsfGVufDB8fDB8fHww"
          alt="First slide" width="536.8px" height="407.5"
        />
        <Carousel.Caption>
        <h2>Taj Hotels</h2>
                            <p>Mall Road,Lucknow,Uttar Pradesh</p>
                            <button className="btn btn-success">View More</button>
                            <button className="btn btn-danger">Call</button>
                            <button className="btn btn-primary">Book Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://images.unsplash.com/photo-1619810230359-b2c2f61c49cd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9zdGVsfGVufDB8fDB8fHww"
          alt="Second slide" width="536.8px" height="407.5"
        />
        <Carousel.Caption>
        <h2>Oberoi Hotels and Resorts</h2>
                            <p>sector-23, Swaroop Nagar,Kanpur-208009</p>
                            <button className="btn btn-success"><a href="http://127.0.0.1:5500/booking_easypg.html"></a>View More</button>
                            <button className="btn btn-danger">Call</button>
                            <button className="btn btn-primary">Book Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1608198399988-341f712c3711?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvc3RlbHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Third slide" width="536.8px" height="407.5"
        />
        <Carousel.Caption>
        <h2>Maurya Sheraton Hotels and Towers</h2>
                            <p>Sector-56, Sarojini Nagar,Delhi</p>
                            <button className="btn btn-success">View More</button>
                            <button className="btn btn-danger">Call</button>
                            <button className="btn btn-primary">Book Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;