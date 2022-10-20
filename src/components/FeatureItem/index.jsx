import React from 'react';
import {StaticImage} from "gatsby-plugin-image";

const Index = ({title, subheadline, content, flow}) => {
  return (
    <div className="feature__item" style={{flexFlow: flow}}>
        <div className="feature__image">
          <StaticImage src="../../images/feature-image.png" alt="feature image" />
        </div>
        <div className="feature__content">
          <span className="subheadline">{subheadline}</span>
          <h3 className="headline">{title}</h3>
          <p className="paragraph">{content}</p>
        </div>
    </div>
  );
};

export default Index;
