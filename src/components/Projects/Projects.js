import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fourth from "../../Assets/Projects/fourth.jpg";
import third from "../../Assets/Projects/third.jpg";
import frist from "../../Assets/Projects/frist.jpeg";
import second from "../../Assets/Projects/second.jpg";

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
              imgPath={frist}
              isBlog={false}
              title="Call Jesus"
              description=" Religious Application

This is my first application, where I have applied various skills I have learned, including routing, page navigation, and adding interactive text features. I have also implemented text formatting and integrated videos corresponding to each text section, enhancing the user experience and providing a more dynamic way to engage with the content."
              ghLink="https://github.com/minaadel88/first-project"
              demoLink="https://first-project-psi-silk.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={second}
              isBlog={false}
              title="Kero Player"
              description="Kero Player is a modern audio streaming application built with Vite.js, Firebase, and the YouTube API. This app provides a seamless audio experience by leveraging YouTube's vast library for content streaming. The app is designed for fast performance with Vite.js, while Firebase handles real-time data synchronization and secure user authentication. Users can browse, listen, and create personalized playlists, all with smooth navigation and an intuitive interface."
              ghLink="https://github.com/minaadel88/Kero-Player"
              demoLink="https://audio-player-nu-seven.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={third}
              isBlog={false}
              title="E-Commerce App"
              description="This is a React-based e-commerce application that integrates with the Fake Store API to display products, handle shopping cart functionality, and manage user interactions. The app features a clean and modern design, with a 5% discount popup and dynamic cart updates."
              ghLink="https://github.com/minaadel88/e-commerce-app"
              demoLink="https://e-commerce-app-chi-ten.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fourth}
              isBlog={false}
              title="Kiro Game"
              description="Rock, Paper, Scissors is a classic and interactive online game designed for quick and fun gameplay. Built with modern web technologies, this app allows users to challenge the computer in the traditional game of Rock, Paper, Scissors. The game features smooth animations, intuitive controls, and a simple yet engaging user interface. Perfect for a quick break or testing your luck, the game provides instant feedback on each round and tracks your wins and losses."
              ghLink="https://github.com/minaadel88/kiro-game"
              demoLink="https://kiro-game.vercel.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
