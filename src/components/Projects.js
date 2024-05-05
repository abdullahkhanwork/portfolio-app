import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-1a.png";
import projImg2 from "../assets/img/project-2a.png";
import projImg3 from "../assets/img/project-3b.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Electric Piano design using Xilinx FPGA’s",
            description: "Employed Digilent Basys 3 Artix-7 FPGA to transmit specific frequencies to a speaker. Programmed 'Despacito' via VHDL, integrating quarter, half, and full notes for comprehensive implementation.",
            imgUrl: projImg1,
            links: [
                {
                    title: "Github",
                    url: "https://github.com/SyedMRaza786/portfolio/blob/main/FPGA_Piano/working_despacito.vhd"
                },
                {
                    title: "Lab Report",
                    url: "https://drive.google.com/file/d/1sWOvnobIkXRFAW5kpvz7jwSZbKQwinNb/view?usp=sharing"
                },
                {
                    title: "Video",
                    url: "https://drive.google.com/file/d/1kjcrLffSbXsJacXvyEwAUZ1GMbXf_mH5/view?usp=sharing"
                }
            ]
        },
        {
            title: "Photoresistor Controlled Phasers",
            description: "This project creates a phase shifter using photoresistors for audio effects. Experimented with positioning and brightness for optimal results. Applied phase effect to voice, showcasing digital music modulation.",
            imgUrl: projImg2,
            links: [
                {
                    title: "Lab Report",
                    url: "https://drive.google.com/file/d/1gHo1al5kFwJD6FmGF7w7OL7XDOkNO33a/view?usp=share_link"
                },
                {
                    title: "Video",
                    url: "https://www.youtube.com/watch?v=hG3kVY613Wk"
                }
            ]
        },
        {
            title: "Digital Counter",
            description: "This schematic depicts a digital counter displaying 0-9 count, restarting from 0. Utilizes S-R flip flop for switch debouncing, ensuring steady state on button press. Clocks HCF4511B counter, outputting 4-bit binary count. NAND gate resets counter sequentially on 10th press, decoding binary to 7-segment LED display. Vcc set to 5 volts for IC power.",
            imgUrl: projImg3,
            links: [
                {
                    title: "Video",
                    url: "https://drive.google.com/file/d/1smIwaYxkKk2RslD9MZ8_f_0g2kdn7JTI/view?usp=sharing"
                }
            ]
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Explore our team's innovative projects, where we leverage cutting-edge technologies such as Digilent Basys 3 Artix-7 FPGAs. Dive into our programming endeavors, such as the rendition of 'Despacito' through VHDL, featuring intricate implementations of quarter notes, half notes, and full notes.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="section">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="none"></img>
        </section>
    )
}
