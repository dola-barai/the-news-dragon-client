import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({news}) => {
    const {_id, title, details, image_url, author, total_view, rating} = news;
    return (
        <Card className="mb-4">
          <Card.Header  className='d-flex align-items-center'>
          <Image className='me-3' style={{height: '40px'}} src={author?.img} roundedCircle />
          <div className='flex-grow-1'>
            <h4>{author?.name}</h4>
            <p><small> {moment(author?.published_date).format("D MMMM, YYYY")} </small></p>
          </div>
          <div>
             <FaRegBookmark></FaRegBookmark>
             <FaShareAlt></FaShareAlt>
          </div>
          </Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={image_url} />
            <Card.Text>
              {details.length < 250 ? <>{details}</> : 
              <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>
              }
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted d-flex">
            <div className='flex-grow-1'>
            <Rating
              placeholderRating={rating.number}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className='text-warning'></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
            <span className='ps-2'>{rating.number}</span>
            </div>
            <div>
                <FaEye></FaEye> {total_view}
            </div>
          </Card.Footer>
        </Card>
    );
};

export default NewsCard;