import React, { useRef } from "react";

import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
} from "reactstrap";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

//= ==============================================================================================
function DevelopmentMat() {
  const refDevelopmentMat = useRef(null);

  useScrollToAnchorByParams({
    refDevelopmentMat,    
  });

  const changeAnchorLink = useChangeAnchorLink();

  //= ==============================================================================================
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="9">
            <Card>
              <CardHeader>
                <h5 ref={refDevelopmentMat} className="title">
                  Esteira de Desenvolvimento | Bravo
                </h5>

                <p className="text-muted">
                  Mapa da esteira de desenvolvimento
                </p>
              </CardHeader>

              <CardBody>
                <p>                                 
                    <div>
                        <img
                            height="30%"
                            alt="..."
                            src={require("assets/img/developmentMat.png")}
                        />
                    </div>
                    <br />
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col
            style={{
              position: "fixed",
              top: "11%",
              right: "0px",
              width: "22%",
            }}
          >
            <Card className="card-user">
              <CardHeader>
                <CardTitle>Guia Rápido</CardTitle>
              </CardHeader>

              <CardBody>
                <p>
                  <a className="text-muted" href="#mobileOverview">
                    A respeito da esteira de desenvolvimento:
                  </a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="Esteira de Desenvolvimento"
                        onClick={() =>
                          changeAnchorLink("refDevelopmentMat")
                        }
                      />
                    </li>                    
                  </ul>
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default DevelopmentMat;
