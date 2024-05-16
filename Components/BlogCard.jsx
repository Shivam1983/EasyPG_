import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./BlogCard.css";
function BlogCard({ category, title, date, text, imgSrc }) {
  return (
    <div className="col-md-6 w-">
      <div className="home-page-box row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static bg-white">
            <strong className={`d-inline-block mb-2 text-${category.toLowerCase()}`}>{category}</strong>
            <h3 className="mb-0">{title}</h3>
            <div className="mb-1 text-muted">{date}</div>
            <p className="card-text mb-auto">{text}</p>
            <a href="#" className="stretched-link">Continue reading</a>
          </div>
          <div className="col-auto d-none d-lg-block" id='image'>
            <div className='image'><Card.Img variant="top" src={imgSrc} /></div>
          </div>
      </div>
    </div>
  );
}


export default BlogCard;
