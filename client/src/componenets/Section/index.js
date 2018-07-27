import React from 'react';

const Section = (props) => (
    <section className="section">
    <div className="container">
      {props.title ? <h1 className="title">{props.title}</h1> : ""}
      {props.subtitle ? <h2 className="subtitle">{props.subtitle}</h2> : ""}
      {props.children}
    </div>
  </section>
)

export default Section;