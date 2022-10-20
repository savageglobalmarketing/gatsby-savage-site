import React from 'react';
import Infobox from "../Infobox";

const Index = () => {
  return (
    <div className="benefits d-flex-column">
       <div className="container">
         <div className="benefits__content">
           <span className="subheadline">subtitle</span>
           <h2 className="headline">Benefits</h2>
           <p className="paragraph">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis eius enim eum exercitationem
             magn, quisquam sint veniam!
           </p>
         </div>

         <div className="benefits__grid">
           <Infobox
             title="Benefit 1"
             content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
             image="../../images/feature-icon.png"
           />
           <Infobox
             title="Benefit 2"
             content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
             image="../../images/feature-icon.png"
           />
           <Infobox
             title="Benefit 3"
             content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
             image="../../images/feature-icon.png"
           />
           <Infobox
             title="Benefit 4"
             content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
             image="../../images/feature-icon.png"
           />
           <Infobox
             title="Benefit 5"
             content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
             image="../../images/feature-icon.png"
           />
           <Infobox
             title="Benefit 6"
             content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
             image="../../images/feature-icon.png"
           />
         </div>
       </div>
    </div>
  );
};

export default Index;
