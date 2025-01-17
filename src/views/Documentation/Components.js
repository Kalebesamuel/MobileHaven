import React, { Component } from 'react';

// reactstrap components
import { Row, Col, Card, CardBody, CardHeader, CardTitle } from 'reactstrap';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// core components
import PanelHeader from '../../components/PanelHeader/PanelHeader.js';

import { CodeExamples } from '../../variables/codeExamples';

class Components extends Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <CardTitle>Documentação dos aplicativos</CardTitle>
                  <p className="text-muted">
                    Padrões e boas práticas que devem ser seguidos nos projetos mobile
                  </p>

                  <h5>Em relação aos componentes</h5>
                </CardHeader>

                <CardBody>
                  <p>
                    <h6>- O uso de constantes deve ser aproveitado</h6>

                    <p class="font-weight-bold">Bad Practice</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamples.badP1}
                      />
                    </pre>

                    <p class="font-weight-bold">Best Practice</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamples.bestP1}
                      />
                    </pre>
                  </p>

                  <p class="mt-5">
                    <h6>- Mantenha o código bem edentado</h6>

                    <p class="font-weight-bold">Bad Practice</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamples.badP2}
                      />
                    </pre>

                    <p class="font-weight-bold">Best Practice</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamples.bestP2}
                      />
                    </pre>
                  </p>

                  <p class="mt-5">
                    <h6>- Separe os métodos com espaços e margens horizontais</h6>

                    <p class="font-weight-bold">Bad Practice</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamples.badP3}
                      />
                    </pre>

                    <p class="font-weight-bold">Best Practice</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamples.bestP3}
                      />
                    </pre>
                  </p>

                  <p class="mt-5">
                    <h6>- Ordene os métodos por importância</h6>

                    <p>
                      Chamada de hooks (UseEffect, useCallback, etc) devem vir primeiro, por terem
                      extrema influência no fluxo da aplicação.
                    </p>

                    <p class="font-weight-bold">Bad Practice</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamples.badP4}
                      />
                    </pre>

                    <p class="font-weight-bold">Best Practice</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamples.bestP4}
                      />
                    </pre>
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Components;
