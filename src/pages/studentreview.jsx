import React, { useState, useEffect } from 'react';
import './StudentReviews.css';

// --- Firebase imports ---
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, query, orderBy } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMmNfuUt_8Y4PAtfInYXC8h-eeQhSXEnk",
  authDomain: "muragadoss-279dc.firebaseapp.com",
  projectId: "muragadoss-279dc",
  storageBucket: "muragadoss-279dc.firebasestorage.app",
  messagingSenderId: "1062338117229",
  appId: "1:1062338117229:web:19df8fae1dd2dd57420964",
  measurementId: "G-RFEQ3H6EQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Emoji icons for avatars
const AVATAR_ICONS = [
  "🦉", "🦁", "🐼", "🦊", "🐧", "🐸", "🐻", "🐨", "🐯", "🦄", "🐶", "🐱", "🐰", "🐵", "🐢", "🐙", "🦋", "🦜", "🦩", "🦔"
];

function getRandomIcon() {
  return AVATAR_ICONS[Math.floor(Math.random() * AVATAR_ICONS.length)];
}

const StudentReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    comment: '',
  });
  const [current, setCurrent] = useState(0);

  // Fetch reviews from Firestore on mount
  useEffect(() => {
    const fetchReviews = async () => {
      const q = query(collection(db, "studentReviews"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      const fetched = [];
      querySnapshot.forEach((doc) => {
        fetched.push(doc.data());
      });
      setReviews(fetched);
      setCurrent(0);
    };
    fetchReviews();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.course && formData.comment) {
      const newReview = {
        ...formData,
        icon: getRandomIcon(),
        timestamp: Date.now(),
      };
      await addDoc(collection(db, "studentReviews"), newReview);
      setReviews([newReview, ...reviews]);
      setFormData({ name: '', course: '', comment: '' });
      setCurrent(0);
    }
  };

  // Carousel navigation
  const prevReview = () => setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  const nextReview = () => setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));

  return (
    <div className="reviews-main-wrapper">
      <section className="reviews-section">
        <h2>Student Feedback on Faculty</h2>
        <p className="section-subtitle">Read what students are saying about their faculty experience.</p>
        <div className="review-carousel">
          {reviews.length > 0 && (
            <div className="card">
              <div className="review-avatar">{reviews[current].icon}</div>
              <h3>{reviews[current].name}</h3>
              <h4>{reviews[current].course}</h4>
              <p>"{reviews[current].comment}"</p>
            </div>
          )}
          {reviews.length > 1 && (
            <div className="carousel-controls">
              <button onClick={prevReview} className="carousel-btn">&#8592;</button>
              <span className="carousel-index">{current + 1} / {reviews.length}</span>
              <button onClick={nextReview} className="carousel-btn">&#8594;</button>
            </div>
          )}
        </div>
      </section>
      <section className="review-form-section">
        <h2>Submit Your Review About a Faculty Member</h2>
        <p className="section-subtitle">Your feedback helps us improve and appreciate great teaching.</p>
        <form onSubmit={handleSubmit} className="review-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="course"
            placeholder="Course / Subject Name"
            value={formData.course}
            onChange={handleChange}
            required
          />
          <textarea
            name="comment"
            placeholder="Write your review about the faculty..."
            value={formData.comment}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit Review</button>
        </form>
      </section>
    </div>
  );
};

export default StudentReviews;
