import { TestimonialsSectionStyles } from "./TestimonialsSectionStyles.styles";

const testimonialList = [
  {
    id: 1,
    name: "Lacy",
    rating: 5,
    review: "The food here is simply amazing! I can't stop coming back.",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    review: "Great atmosphere and delicious food. Highly recommend!",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 3,
    name: "Mark Taylor",
    rating: 4.5,
    review: "I love the variety of dishes. Everything is flavorful and fresh.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 4,
    name: "Emily Davis",
    rating: 5,
    review:
      "Excellent service and top-notch meals. My favorite restaurant in town.",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
];

const TestimonialsSection = () => (
  <TestimonialsSectionStyles>
    <h1>Testimonials</h1>
    <div className="testimonial-grid">
      {testimonialList.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-card">
          <p className="rating">Rating: {testimonial.rating} ⭐</p>
          <div className="testmonial-body">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="avatar"
            />
            <h3>{testimonial.name}</h3>
          </div>
          <p className="review">"{testimonial.review}"</p>
        </div>
      ))}
    </div>
  </TestimonialsSectionStyles>
);

export default TestimonialsSection;
