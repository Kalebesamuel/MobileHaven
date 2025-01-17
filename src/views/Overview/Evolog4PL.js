import React from 'react';

// reactstrap components
import { Button, Card, CardHeader, CardTitle, CardBody, Row, Col } from 'reactstrap';

// core components
import PanelHeader from '../../components/PanelHeader/PanelHeader.js';

class Evolog4PL extends React.Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Evolog 4PL</h5>
                </CardHeader>

                <CardBody></CardBody>
              </Card>
            </Col>

            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img alt="..." src={require('assets/img/bg5.jpg')} />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require('assets/img/mike.jpg')}
                      />
                      <h5 className="title">Mike Andrew</h5>
                    </a>
                    <p className="description">michael24</p>
                  </div>
                  <p className="description text-center">
                    "Lamborghini Mercy <br />
                    Your chick she so thirsty <br />
                    I'm in that two seat Lambo"
                  </p>
                </CardBody>
                <hr />
                <div className="button-container">
                  <Button
                    className="btn-neutral btn-icon btn-round"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg">
                    <i className="fab fa-facebook-f" />
                  </Button>
                  <Button
                    className="btn-neutral btn-icon btn-round"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    className="btn-neutral btn-icon btn-round"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg">
                    <i className="fab fa-google-plus-g" />
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Evolog4PL;
