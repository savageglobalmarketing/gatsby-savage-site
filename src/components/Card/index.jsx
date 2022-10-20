import React from 'react';

const Index = ({quote, author, position}) => {
  return (
      <div className="box">
        <p className="quote">{quote}</p>
        <p className="author">{author}</p>
        <p className="position">{position}</p>
      </div>
  );
};

export default Index;
