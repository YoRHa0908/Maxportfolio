import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import NetGuardXAI_nids from "../../Assets/Projects/NetGuardXAI_nids.png";
import typescript from "../../Assets/Projects/typescript.png";
import AI_Social from "../../Assets/Projects/AI_Social.png";
import realtime_chat_app from "../../Assets/Projects/realtime-chat-app.png";
import Feedback_Widget from "../../Assets/Projects/Feedback_Widget.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={typescript}
              isBlog={false}
              title="NLW"
              description="NLW Return project: feedback app with screenshot capture. Built with React.js, TypeScript, Tailwind CSS, Headless UI, focused on accessibility and testing (Jest). Backend with Node.js and Prisma."
              ghLink="https://github.com/YoRHa0908/feedback-backend-nodejs-ts"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Feedback_Widget}
              isBlog={false}
              title="Feedback-Widget"
              description="The project is called Feedback Widget. It is a tool where the user can leave feedback in case of a problem, an idea or other, this tool allows the user to describe his problem/idea/other along with the screenshot functionality."
              ghLink="https://github.com/YoRHa0908/Feedback-Widget"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NetGuardXAI_nids}
              isBlog={false}
              title="NetGuardXAI_nids"
              description="A full-stack application for network intrusion detection using Explainable AI (XAI). The project combines a Flask backend for processing network features and generating XAI visualizations with a Next.js frontend for user interaction and result display. Deployment Links and Screenshots"
              ghLink="https://github.com/YoRHa0908/NetGuardXAI_nids"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realtime_chat_app}
              isBlog={false}
              title="Chat Application"
              description="This project is a full-fledged realtime messaging application with a user interface inspired by WhatsApp. It enables users to exchange messages individually or within groups."
              ghLink="https://github.com/YoRHa0908/chat-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AI_Social}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/YoRHa0908/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/YoRHa0908/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
