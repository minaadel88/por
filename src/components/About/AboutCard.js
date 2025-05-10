import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mina Adel </span>
            from <span className="purple"> Cairo, Egypt.</span>
            <br />
            I am currently employed as a software developer <br />

             at Ministry of interior.
            <br />
           After completing a Bachelor's degree in Commerce<br />
            I transitioned into programming and pursued <br />
             a career in software development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem-Solving
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155, 126, 172)", whiteSpace: "nowrap" }}>
           "Driven by a passion to create meaningful solutions through code."
          </p>

          <footer className="blockquote-footer">Mina Adel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
