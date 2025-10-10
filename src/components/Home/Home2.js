import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import profile from "../../Assets/profile.jpg"
import Tilt from "react-parallax-tilt"
import { AiFillGithub } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"
import { FaWhatsapp } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate developer who loves building modern web
              applications and learning new technologies every day. 🚀
              <br />I have solid experience in
              <i>
                <b className="purple">
                  {" "}
                  Java, JavaScript, PHP, and the MERN Stack.
                </b>
              </i>
              <br />
              My main interests include developing{" "}
              <i>
                <b className="purple">
                  full-stack web applications, Spring Boot backends,
                </b>
              </i>{" "}
              and exploring areas like{" "}
              <i>
                <b className="purple">AI & Cloud Technologies.</b>
              </i>
              <br />I enjoy creating products with{" "}
              <b className="purple">React.js, Node.js, and Spring Boot</b>, and
              designing systems that are both scalable and efficient.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <div className="avatar-container">
                <img src={profile} alt="avatar" className="avatar-img" />
              </div>
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Nkugavarathan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kugavarathan-navaraththinarasa-7ab094267/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:kugavarathan28@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://wa.me/94775019192"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Home2
