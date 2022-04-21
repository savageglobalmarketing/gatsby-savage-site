import React, {Component} from 'react';
import {Link} from "gatsby";

class Test extends Component {
  render() {
    return (
      <div className="flex-center">
       <div className="mw800">
         <h1>Test - Class</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto atque
           dicta eligendi labore minus natus nisi placeat provident reprehenderit? Ab accusamus,
           accusantium assumenda at blanditiis ex similique. Dolore, tempora.</p>
         <Link to={"/"}>Home</Link>
         <br/>
         <Link to={"/about"}>About</Link>
       </div>

      </div>
    );
  }
}

export default Test;
