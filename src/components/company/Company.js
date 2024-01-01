import React from "react";
import administraionImage from "../../assets/admin_image.png";
import companyImage from "../../assets/company_image.png";
import { Container } from "react-bootstrap";

const Company = () => {
  return (
    <>
      <div class="image-container">
        <img
          src={administraionImage}
          class="img-fluid"
          alt="administraionImage"
        ></img>
        <div class="overlay-text">Company</div>
      </div>
      <Container>
        <div style={{ margin: "50px" }}>
          <p>
            Being a critical sector Consaint creates business value by adopting
            and understanding client’s business needs to help expertise and
            seize the change-driven across the banking and finance in managing
            transactions, mitigating risks and ensuring regulatory compliance
            using sophisticated technologies.
          </p>
          <h4>Strategy and transformation</h4>
          <p>
            We are expertise in technology, data science, and creative design to
            provide strategy, innovation, and transformation consulting.
          </p>

          <h4>Applications and Technology</h4>
          <p>
            We at Consaint develop, modernize, extend, and secure IT and digital
            environments using the latest technologies to develop, optimize, and
            maintain applications.
          </p>

          <h4>Consulting and Resourcing</h4>
          <p>
            We are your premier destination for IT consulting and resourcing
            solutions. Our expert team is dedicated to crafting tailored
            strategies for your digital transformation and optimizing IT
            infrastructure. Whether you need strategic guidance or specialized
            talent, our comprehensive services ensure timely access to the right
            skills. Partner with us for innovative and efficient IT solutions
            that propel your business forward.
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "20%" }}
              src={companyImage}
              alt="companyimage"
            />
          </div>
          <p>We at Consaint ensure to follow the methodologies:</p>
          <ol>
            <li style={{ marginTop: "10px" }}>
              <span style={{ fontWeight: "600" }}>People to Process:</span>
              &nbsp; Bridging the gap between individuals and workflows, the
              people-to-process connection is the heartbeat of efficient
              operations. Harnessing human expertise and insights, organizations
              design seamless processes to drive productivity and innovation.
            </li>
            <li style={{ marginTop: "10px" }}>
              <span style={{ fontWeight: "600" }}>Process to Technology:</span>
              &nbsp; Transforming structured workflows into technological
              realities, the process-to-technology link ensures that operations
              are streamlined and optimized. Leveraging automation, analytics,
              and cutting-edge tools, businesses amplify their capabilities and
              responsiveness.
            </li>
            <li style={{ marginTop: "10px" }}>
              <span style={{ fontWeight: "600" }}>Technology to People:</span>
              &nbsp; The technology-to-people nexus marks the integration of
              innovation into everyday lives. Empowering individuals with
              advanced solutions, this connection fosters collaboration,
              enhances communication, and propels societies towards a more
              connected and intelligent future.
            </li>
            <li style={{ marginTop: "10px" }}>
              <span style={{ fontWeight: "600" }}>
                People, Process, Technology Synergy:
              </span>
              &nbsp; In the harmonious interplay of people, process, and
              technology, synergies emerge to redefine how organizations
              operate. As individuals adapt to technological advancements,
              processes evolve, creating a dynamic ecosystem where innovation
              thrives.
            </li>
            <li style={{ marginTop: "10px" }}>
              <span style={{ fontWeight: "600" }}>
                Continuous Feedback Loop:
              </span>
              &nbsp; Forming a continuous feedback loop, the dynamic
              relationship between people, process, and technology drives a
              cycle of improvement. Insights from individuals shape processes,
              which, in turn, influence the evolution of technology, creating a
              perpetual loop of innovation and refinement.
            </li>
          </ol>
          <p>
            We prioritize client satisfaction, upholding confidentiality and
            integrity in all interactions. It values innovation, fostering a
            culture of creativity and embracing cutting-edge technologies. The
            firm is committed to long-term relationships, emphasizing
            responsibility in delivering sustainable solutions while adhering to
            high standards of professionalism. Adaptability is key, allowing the
            firm to respond flexibly to evolving client needs and industry
            shifts.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Company;
