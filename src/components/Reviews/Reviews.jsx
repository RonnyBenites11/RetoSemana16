import React, { useState, useEffect } from 'react';
import { Star, X } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', text: '' });

  const fetchReviews = () => {
    fetch('https://endpoind-semana17.vercel.app/reviews')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  };

  useEffect(() => {
    fetchReviews(); 
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name.trim() && newReview.text.trim()) {
      const reviewToAdd = { ...newReview, rating: 5 };
      
      fetch('https://endpoind-semana17.vercel.app/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reviewToAdd),
      })
        .then(response => response.json())
        .then(addedReview => {
          setReviews(prev => [...prev, addedReview]); 
          setNewReview({ name: '', text: '' }); 
        })
        .catch(error => console.error('Error adding review:', error));
    }
  };
  const handleDelete = (id) => {
    fetch(`https://endpoind-semana17.vercel.app/reviews/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setReviews(prev => prev.filter(review => review.id !== id)); 
      })
      .catch(error => console.error('Error deleting review:', error));
  };

  return (
    <div className="customer-reviews">
      <h2>Customer Reviews</h2>
      <div className="reviews-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
            placeholder="Your name..."
            required
          />
          <input
            type="text"
            name="text"
            value={newReview.text}
            onChange={handleInputChange}
            placeholder="Reviews..."
            required
          />
          <button type="submit">SEND</button>
        </form>
        <div className="reviews-list">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                  ))}
                </div>
                <X size={16} onClick={() => handleDelete(review.id)} className="delete-icon" />
              </div>
              <p>{review.text}</p>
              <p className="review-author">{review.name}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;