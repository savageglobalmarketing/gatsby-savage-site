import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Index = ({title, content}) => {
  return (
    <div className="infobox">
      <div className="infobox__image">
        <StaticImage src="../../images/feature-icon.png" alt="icon" className="image" />
      </div>
      <div className="infobox__content">
        <h4 className="headline">{title}</h4>
        <p className="paragraph">{content}</p>
      </div>
    </div>
  );
};

export default Index;
