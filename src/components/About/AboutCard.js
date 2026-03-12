import React from "react";
import Card from "react-bootstrap/Card";
import {User} from "../../config";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">{User.userName}</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">{User.Title}</span>
            <br />
             {User.bio}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
