import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import Man1 from "../Assets/m1.png";
import Man2 from "../Assets/m2.jpg";
import Man3 from "../Assets/m3.jpg";
import Man4 from "../Assets/m4.jpg";
import Man5 from "../Assets/m5.png";

const Testimonial = () => {
  const testimonialData = [
    {
      image: ProfilePic,
      text: "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.",
      stars: 5,
      author: "David Doe",
    },
    {
      image: Man1,
      text: "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.",
      stars: 5,
      author: "John Doe",
    },
    {
      image: Man2,
      text: "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.",
      stars: 5,
      author: "Alvin Markod",
    },
    {
      image: Man3,
      text: "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.",
      stars: 5,
      author: "Bob Morley",
    },
    {
      image: Man4,
      text: "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.",
      stars: 5,
      author: "Jacky Ben",
    },
    {
      image: Man5,
      text: "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.",
      stars: 5,
      author: "Ronis Kalin",
    },
    // Add more testimonial data as needed
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Témoignages</p>
        <h1 className="primary-heading">Ce qu'ils disent</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>

      <div className="testimonial-slider">
        {testimonialData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt="" />
            <p>{testimonial.text}</p>
            <div className="testimonials-stars-container">
              {[...Array(testimonial.stars)].map((_, starIndex) => (
                <AiFillStar key={starIndex} />
              ))}
            </div>
            <h2>{testimonial.author}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
