import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import profile from "../../Assets/profile.jpg"
import Tilt from "react-parallax-tilt"
import { AiFillGithub, AiOutlineMail } from "react-icons/ai"
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa"
import { motion } from "framer-motion"

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          {/* LEFT SIDE - Text */}
          <Col md={8} className="home-about-description">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="irishblue"> INTRODUCE </span> MYSELF
              </h1>
              {/* <p className="home-about-body">
                I’m a passionate developer who loves building modern web
                applications and learning new technologies every day. 🚀
                <br />I have solid experience in
                <i>
                  <b className="irishblue">
                    {" "}
                    Java, JavaScript, PHP, and the MERN Stack.
                  </b>
                </i>
                <br />
                My main interests include developing{" "}
                <i>
                  <b className="irishblue">
                    full-stack web applications, Spring Boot backends,
                  </b>
                </i>{" "}
                and exploring areas like{" "}
                <i>
                  <b className="irishblue">AI & Cloud Technologies.</b>
                </i>
                {/* <br />I enjoy creating products with{" "}
                <b className="irishblue">React.js, Node.js, and Spring Boot</b>,
                and designing systems that are both scalable and efficient.
                </p>
                */}

              {/* <p className="home-about-body">
                Motivated and detail-oriented 3rd-year BSc (Hons) Computing and
                Information Systems undergraduate with hands-on experience in
                full-stack development using{" "}
                <b className="irishblue">
                  MERN, Next.js, and Spring Boot, as well as AI-powered
                  applications.{" "}
                </b>{" "}
                Skilled in Object-Oriented Programming (OOP), MVC architecture,
                RESTful API design, and Data Structures & Algorithms (DSA).
                <br />
                Proven ability to build scalable web applications with secure
                authentication, responsive interfaces, and efficient workflows.
                Experienced in database management, cloud deployment (Vercel),
                version control, Agile methodologies, and workflow automation
                using n8n.
                <br />
                Passionate about delivering innovative, high-quality software
                solutions in collaborative environments.
              </p> */}
              <p className="home-about-body">
                Motivated and detail-oriented 3rd-year BSc (Hons) Computing and
                Information Systems undergraduate with hands-on experience in
                full-stack development using{" "}
                <b className="irishblue">
                  MERN, Next.js, Spring Boot, AI-powered applications
                </b>
                . Skilled in{" "}
                <b className="irishblue">Object-Oriented Programming (OOP)</b>,{" "}
                <b className="irishblue">MVC architecture</b>,
                <b className="irishblue"> RESTful API design</b>, and{" "}
                <b className="irishblue">Data Structures & Algorithms (DSA)</b>.
                <br />
                Proven ability to build{" "}
                <b className="irishblue">scalable web applications</b> with{" "}
                <b className="irishblue">secure authentication</b>,
                <b className="irishblue"> responsive interfaces</b>, and{" "}
                <b className="irishblue">efficient workflows</b>. Experienced in
                <b className="irishblue"> database management</b>,{" "}
                <b className="irishblue">cloud deployment (Vercel)</b>,{" "}
                <b className="irishblue">version control</b>,
                <b className="irishblue"> Agile methodologies</b>, and{" "}
                <b className="irishblue">workflow automation using n8n</b>.
                <br />
                Passionate about delivering innovative, high-quality software
                solutions in collaborative environments.
              </p>
            </motion.div>
          </Col>

          {/* RIGHT SIDE - Image */}
          <Col md={4} className="myAvtar">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Tilt>
                <div className="avatar-container">
                  <img src={profile} alt="avatar" className="avatar-img" />
                </div>
              </Tilt>
            </motion.div>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="irishblue">connect </span>with me!
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
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Home2
