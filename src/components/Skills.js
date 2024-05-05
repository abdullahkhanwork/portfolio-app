import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';

export const Skills = ({ title, skills }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        // <section className="skill" id="skills">
        <section className="project" id="skills">

            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                                    <div className="skill-bx wow zoomIn">
                                        <h2>{title}</h2>
                                        <p>________________</p>
                                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                            {
                                                skills.map((item, index) => {
                                                    const images = [meter1, meter2, meter3];
                                                    const randomIndex = Math.floor(Math.random() * images.length);
                                                    const randomMeter = images[randomIndex];
                                                    return (
                                                        <div
                                                            key={index}
                                                            className="item">
                                                            <img src={randomMeter} alt="" />
                                                            <h5>{item}</h5>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Carousel>
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    )
}
