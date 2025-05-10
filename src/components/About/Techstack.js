import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <div>
      <h1 className="project-heading">
        <strong className="purple">Tech Stack</strong> I Use
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" title="C++">
          <CgCPlusPlus />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="JavaScript">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Go">
          <TbBrandGolang />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Node.js">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="React">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Solidity">
          <SiSolidity />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="MongoDB">
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Next.js">
          <SiNextdotjs />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Git">
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Firebase">
          <SiFirebase />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Redis">
          <SiRedis />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
          <SiPostgresql />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Python">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Java">
          <DiJava />
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;
