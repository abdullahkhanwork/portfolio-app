import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, links }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="none" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className="navbar-text">
                        {
                            links.map((item, index) => {
                                return (
                                    <a
                                        key={index}
                                        href={item.url} target="_blank" rel="noreferrer">
                                        <button className="vvd p-1"><span>{item.title}</span></button>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Col>
    )
}
