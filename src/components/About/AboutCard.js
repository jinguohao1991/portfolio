import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kumi Yeoo </span>
            from <span className="purple"> ShenYang, China.</span>
            <br />I am a Senior Web and Mobile app developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Violin
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Tenis, and Football
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Everything is Beautiful only when it is completed!"{" "}
          </p>
          <footer className="blockquote-footer">李日敏</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
