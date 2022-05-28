import { Container, Row, Col, Card } from "react-bootstrap";
import githubIcon from './github-icon.svg'

export function Portfolio() {
    return(
        <Container  id='portfolio' className="portfolio">
            <div>
                <h1>Portfolio</h1>
            </div>
            <Row xs={1} s={1} md={3}>
                <Col className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>
                                <div className='textLeft'>Wedd.io</div>
                                <a href="https://github.com/JInsalaco/CS554_Good_Nodels" target="_blank" rel="noreferrer">
                                    <img className='textRight' width='25' src={githubIcon} alt="GitHub" />
                                </a>
                                <div style={{clear: "both"}}></div>
                            </Card.Title>
                            <Card.Text>
                                Full-stack web application to assist with wedding planning and manage guest lists
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <p className='text-muted'>Node.js, MongoDB, Redis, React, AWS</p>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>
                                <div className='textLeft'>The Duck Pond</div>
                                <a href="https://github.com/JInsalaco/CS546_Group5" target="_blank" rel="noreferrer">
                                    <img className='textRight' width='25' src={githubIcon} alt="GitHub" />
                                </a>
                                <div style={{clear: "both"}}></div>
                            </Card.Title>
                            <Card.Text>
                                Online forum for Stevens students to post questions and start discussions
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <p className="text-muted">Node.js, MongoDB, Express, Vue</p>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>
                                <div className='textLeft'>Hiragana Tutor</div>
                                <a href="https://github.com/JInsalaco/Hiragana-Tutor" target="_blank" rel="noreferrer">
                                    <img className='textRight' width='25' src={githubIcon} alt="GitHub" />
                                </a>
                                <div style={{clear: "both"}}></div>
                            </Card.Title>
                            <Card.Text>
                                React single-page application designed to gamify Japanese language learning
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <p className="text-muted">React</p>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}