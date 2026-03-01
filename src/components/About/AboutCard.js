import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Oleksii Shcherbyna</span>{" "}
            from <span className="purple">Viktorivka, Ukraine </span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Senior Software Developer</span>
            <br />
             I thrive in fast-paced teams, deliver robust solutions, and enjoy mentoring engineers to raise the bar.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
