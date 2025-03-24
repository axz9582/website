import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Linkedin } from 'react-feather';
import { GitHub } from 'react-feather';

import '../assets/css/Home.css';
import headshot from "../assets/headshot.jpg";

const Socials = [
    {
        id: 'linkedin',
        url: 'https://www.linkedin.com/in/axz9582',
        icon: Linkedin
    },
    {
        id: 'github',
        url: 'https://github.com/axz9582',
        icon: GitHub
    }
]

function Home () {
    const downloadPdf = () => {
        const pdfUrl = "andrew_zhang_resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "az_resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className='profile-container'>
                            <img id="headshot" src={headshot} alt="That's me!"></img>
                        </div>
                    </Col>
                    <Col className='text-center align-self-center'>
                        <Container >
                            <header>
                                <p>Hello, I am</p>
                                <h1>Andrew Zhang</h1>
                                <h4>Software Engineer</h4>
                            </header>
                            <div>
                                <div>
                                    <Button className="mx-1 my-2 rounded-pill" variant="outline-secondary" onClick={downloadPdf}>Download CV</Button>
                                    <Button className="mx-1 my-2 rounded-pill" variant="outline-secondary" href='#contact'>Contact Info</Button>
                                </div>
                                <div>
                                    {Socials.map((social) => {
                                        return (
                                            <Button className='mx-2 my-3' variant="dark" style={{borderRadius:50}} href={social.url} target="_blank" rel="noreferrer">
                                                <social.icon color='White' width={20} height={32} />
                                            </Button>
                                        );
                                    })}
                                </div>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;