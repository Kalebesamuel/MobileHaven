import React, { useRef } from "react";

import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
} from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

//= ==============================================================================================
function LogisticDictionary() {
  const refMobileWorkflowOverview = useRef(null);
  const refMethodologies = useRef(null);
  const refDemands = useRef(null);
  const refJiraWorkflow = useRef(null);
  const refBitbucketWorkflow = useRef(null);

  useScrollToAnchorByParams({
    refMobileWorkflowOverview,
    refMethodologies,
    refDemands,
    refJiraWorkflow,
    refBitbucketWorkflow,
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
                <h5 className="title">
                  Dicionário de Logística Bravo
                </h5>

                <p className="text-muted">
                  Termos comumente utilizados no dia a dia das operações
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  <h6>
                    <a ref={refMobileWorkflowOverview} id="mobileOverview">
                      A respeito do workflow do mobile
                    </a>
                  </h6>
                  <h7 id="workflowOverview" class="font-weight-bold">
                    Definição e visão geral
                  </h7>
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-secondary">Backlog</td>
                        <td>
                          Task está em aguardo para ser desenvolvida, ou teve
                          desenvolvimento mas foi visto algo errado pelo Key
                          User e retornou a backlog até ser atendida novamente.
                        </td>
                      </tr>
                      <tr>
                        <td className="text-secondary">Desenvolvimento</td>
                        <td>Task foi iniciada e está em desenvolvimento.</td>
                      </tr>
                      <tr>
                        <td className="text-secondary">Em Pausa</td>
                        <td>
                          Task começou a ser desenvolvida porém está em pausa
                          devido estar aguardando informações, ou outra task que
                          bloqueia esta a ser finalizada.
                        </td>
                      </tr>
                      <tr>
                        <td className="text-secondary">Qualidade</td>
                        <td>
                          Task foi desenvolvida e está aguardando codeReview e
                          validação pelo Tech Lead.
                        </td>
                      </tr>
                      <tr>
                        <td className="text-secondary">Key User</td>
                        <td>
                          Task foi desenvolvida, testada, foi realizado o
                          codeReview e a validação técnica do Tech Lead, agora o
                          retorno da task é passado para o Key User caso houver
                          para aguardar a validação do mesmo, em alguns casos
                          será necessário gerar apk em qas e enviá-la para o Key
                          User.
                        </td>
                      </tr>
                      <tr>
                        <td className="text-secondary">Concluído</td>
                        <td>
                          Task foi finalizada e teve a validação/aprovação
                          técnica do Tech Lead e do Key User caso houver e foi
                          para produção.
                        </td>
                      </tr>
                    </tbody>
                  </Table>
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
                    A respeito do workflow do mobile:
                  </a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="Definição e visão geral"
                        onClick={() =>
                          changeAnchorLink("refMobileWorkflowOverview")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Metodologias"
                        onClick={() => changeAnchorLink("refMethodologies")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Demandas: Quem são, onde vivem, de que se alimentam?"
                        onClick={() => changeAnchorLink("refDemands")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Worflow do Jira"
                        onClick={() => changeAnchorLink("refJiraWorkflow")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Worflow do Bitbucket"
                        onClick={() => changeAnchorLink("refBitbucketWorkflow")}
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

export default LogisticDictionary;
