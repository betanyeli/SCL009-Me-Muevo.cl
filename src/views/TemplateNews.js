import React, { Component } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap'
import data from './data.json';


class TemplateNews extends Component {
  constructor() {
    super();
    this.state = {
      dataNews: data.Noticias
    }
  }

  render() {
    const news = this.state.dataNews.map((element, index) => {

      return (
        <Card className="my-cards" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={element.img} />
          <Card.Body>
            <Card.Title><a className="card-link" href={element.url}>{element.title}</a></Card.Title>
            <Card.Text>
              {element.description}
            </Card.Text>

          </Card.Body>
        </Card>


      )
    })
    return (
      <>
        <Container>
          <Row>

            <Col xs={12} md={8} className="marginInitial"  >
              <h4>Noticias y eventos</h4>

            </Col>
          </Row>
          <Row className="pl-5">
            {news}
          </Row>
        </Container>
      </>
    )
  }
}
export default TemplateNews;