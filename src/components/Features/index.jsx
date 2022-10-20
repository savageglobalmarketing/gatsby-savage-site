import React from 'react';
import FeatureItem from '../FeatureItem';

const Index = () => {
  return (
    <div className="features d-flex-column">
      <div className="container">
        <div className="features__content">
          <span className="subheadline">subheadline</span>
          <h2 className="headline">Top Features</h2>
          <p className="paragraph">Lorem ipsum dolor sit amet, dicta excepturi fugit libero nihil non, numquam odio optio quae quis quos sapiente sed sit sunt tempora.</p>
        </div>

        <div className="features__grid">
          <FeatureItem
            subheadline="Step 1"
            title="Feature 1"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            // image="https://placekitten.com/555/355"
          />

          <FeatureItem
            flow="row-reverse"
            subheadline="Step 2"
            title="Feature 2"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            // image="https://placekitten.com/555/355"
          />

          <FeatureItem
            subheadline="Step 3"
            title="Feature 3"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            // image="https://placekitten.com/555/355"
          />

          <FeatureItem
            flow="row-reverse"
            subheadline="Step 4"
            title="Feature 4"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            // image="https://placekitten.com/555/355"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
