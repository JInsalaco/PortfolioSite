import { Container, Row, Col, Card } from "react-bootstrap";

export function Portfolio() {
    return(
        <Container>
            <div id='portfolio'>
                <h1>Portfolio</h1>
            </div>
            <Row>
                <Col>
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>
                                Wedd.io
                            </Card.Title>
                            <Card.Text>
                                Full-stack web application to assist with wedding planning and manage guest lists
                                <br/>
                                <p className="text-muted">Created using Node.js, MongoDB, Express, Redis, React, Firebase and AWS</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>
                                The Duck Pond
                            </Card.Title>
                            <Card.Text>
                                Online forum for Stevens students to post questions and start discussions
                                <br/>
                                <p className="text-muted">Created using Node.js, MongoDB, Express, and Vue</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>
                                Hiragana Tutor
                            </Card.Title>
                            <Card.Text>
                                React single-page application designed to gamify Japanese language learning
                                <br/>
                                <p className="text-muted">Created using React</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}