import React from 'react';
import Card from "../Card";

const Index = () => {
  return (
    <div className="testimonials d-flex-column">
      <div className="container">
        <div className="testimonials__content">
          <h2 className="headline">Testimonials</h2>
          <p className="paragraph">Lorem ipsum dolor sit amet. Autem dolore eius harum illo impedit in mollitia porro reiciendis sapiente similique sunt, velit voluptas, voluptatum. Amet earum illo iusto recusandae sint!</p>
        </div>
        <div className="testimonials__grid">
          <Card
            quote="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore eius harum illo impedit in"
            author="John Doe"
            position="CEO of ASD"
          />
          <Card
            quote="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore eius harum illo impedit in"
            author="John Doe"
            position="CEO of ASD"
          />
          <Card
            quote="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore eius harum illo impedit in"
            author="John Doe"
            position="CEO of ASD"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
