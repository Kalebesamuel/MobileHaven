import React, { useRef } from 'react';

import { Row, Col, Card, CardBody, CardHeader, CardTitle, Table } from 'reactstrap';

import PanelHeader from '../../components/PanelHeader/PanelHeader.js';
import ButtonLink from '../../components/Buttons/ButtonLink';

import { useScrollToAnchorByParams, useChangeAnchorLink } from 'utils';

//= ==============================================================================================
function GitWorkflow() {
  const refCommitQualityWorkflow = useRef(null);
  const refGitWorkflow = useRef(null);

  useScrollToAnchorByParams({
    refCommitQualityWorkflow,
    refGitWorkflow,
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
                <h5 ref={refGitWorkflow} className="title">
                  Git Workflow and Commit Quality
                </h5>

                <p className="text-muted">
                  Definição processual do processo de qualidade nos commits e organização das
                  branches
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  <h6>
                    <a ref={refCommitQualityWorkflow} id="tip1">
                      Commit Quality Workflow
                    </a>
                  </h6>
                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require('assets/img/commit-quality-org.excalidraw.png')}
                    />
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />

                  <h6>
                    <a ref={refGitWorkflow} id="tip1">
                      Git Workflow
                    </a>
                  </h6>
                  <br />

                  <div>
                    <img height="30%" alt="..." src={require('assets/img/Gitworkflow.png')} />
                  </div>
                  <br />

                  <h7 class="text-muted font-weight-bold">Explicação do fluxo</h7>
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-secondary">Task</td>
                        <td>
                          <h7 class="text-muted font-weight-bold">Task </h7>
                          se trata de tarefas comuns e pequenas que atuamos que não estão atreladas
                          a um épico e que haverá a atuação de somente um desenvolvedor.
                        </td>
                      </tr>

                      <tr>
                        <td className="text-secondary">Feature</td>
                        <td>
                          <h7 class="text-muted font-weight-bold">Feature </h7>
                          se trata de uma demanda geralmente atrelada ao um épico e haverá a atuação
                          de mais de um desenvolvedor e geralmente levará mais tempo e será uma
                          mudança de maior impacto. Nesse caso criamos uma branch com o nome do
                          épico encima da branch de dev, seguindo o seguinte formato,
                          feature/EVOLOG-0000, assim todos os desenvolvedores irão atuar encima da
                          mesma branch.
                        </td>
                      </tr>

                      <tr>
                        <td className="text-secondary">Hotfix</td>
                        <td>
                          No caso de <h7 class="text-muted font-weight-bold">Hotfix </h7> é em
                          relação a resolução de bugs em produção, nesse caso criamos uma branch a
                          partir de master seguindo o formato "hotfix/EVOLOG-0000 e depois fazemos o
                          PR para master, realizamos o code review e em seguida fazemos o PR de
                          master para dev e qas.
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <br />
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col
            style={{
              position: 'fixed',
              top: '11%',
              right: '0px',
              width: '22%',
            }}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle>Guia Rápido</CardTitle>
              </CardHeader>

              <CardBody>
                <p>
                  <ul>
                    <li>
                      <ButtonLink
                        link="Commit Quality Workflow"
                        onClick={() => changeAnchorLink('refCommitQualityWorkflow')}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Git Workflow"
                        onClick={() => changeAnchorLink('refGitWorkflow')}
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

export default GitWorkflow;
