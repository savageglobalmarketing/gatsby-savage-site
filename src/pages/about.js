import React from 'react';
import {Link} from "gatsby";

const About = () => {
  return (
    <div className="flex-center">
      <div className="mw800">
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto atque
          dicta eligendi labore minus natus nisi placeat provident reprehenderit? Ab accusamus,
          accusantium assumenda at blanditiis ex similique. Dolore, tempora.</p>
        <Link to={"/"}>Home</Link>
        <br/>
        <Link to={"/test"}>Test</Link>

      </div>
    </div>
  );
};

export default About;
