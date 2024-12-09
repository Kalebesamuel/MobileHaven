import React, { useRef } from "react";

import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardFooter,
  Table,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip,
  Button
} from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

import { CodeExamplesWorkflow } from "../../variables/codeExamplesWorkflow";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

//= ==============================================================================================
function DefinitionOfDone() {
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
          <Col md="14">
            <Card>
              <CardHeader>
                <h5 className="title">
                  DoD (Definition of Done)
                </h5>

                <p className="text-muted">
                  DoD (Definition of Done) descreve o checklist para definir se um projeto/task está de fato pronto para seguir para próxima etapa no workflow, principalmente em relação as próximas etapas após o desenvolvimento.
                </p>
              </CardHeader>
            </Card>
          </Col>

          <Row>
            <Col xs={12} md={6}>
              <Card className="card-tasks">
                <CardHeader>
                  <h5 className="card-category">Frontend Development</h5>
                  <CardTitle tag="h4">Tasks</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table responsive>
                      <tbody>
                        <tr className="td-spacing">
                          <td className="td-spacing" style={{padding: "15px 0px"}}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-left td-spacing">
                            Houve alteração no redux, SQLite ou zustand? Essa alteração pode impactar o app após uma release? Se pode impactar, você tratou esse impacto?
                          </td>
                        </tr>
                        <tr>
                          <td style={{padding: "15px 0px"}}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-left">
                            Houve criação/alteração de componentes? Essas alterações seguiram o design system?
                          </td>                   
                        </tr>
                        <tr>
                          <td  style={{padding: "15px 0px"}}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-left">
                            Os componentes foram criados e documentados no storybook?
                          </td>
                        </tr>
                        <tr>
                          <td  style={{padding: "15px 0px"}}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-left">
                            Algum componente foi alterado no design system? Essa alteração irá impactar outros projetos negativamente?
                          </td>
                        </tr>

                        <tr>
                          <td  style={{padding: "15px 0px"}}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-left">
                            A tarefa cumpre todos os requisitos e regras de negócio descritas na tarefa?
                          </td>
                        </tr>

                        <tr>
                          <td  style={{padding: "15px 0px"}}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-left">
                            A tipagem das propriedades foi feita corretamente?
                          </td>
                        </tr>

                        <tr>
                          <td  style={{padding: "15px 0px"}}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-left">
                            Essa alteração impacta negativamente a performance do aplicativo ou servidor?
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={6}>
              <Card className="card-tasks">
                <CardHeader>
                  <h5 className="card-category">Backend Development</h5>
                  <CardTitle tag="h4">Tasks</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table responsive>
                      <tbody>
                        <tr className="td-spacing">
                          <td className="td-spacing" style={{padding: "15px 0px"}}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-left td-spacing">
                            A alteração na API pode impactar versões anteriores do aplicativo? Se sim, isso foi tratado? Foi criado uma v2 da API ou a alteração foi feita na v1?
                          </td>
                        </tr>
                        <tr>
                          <td style={{padding: "15px 0px"}}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-left">
                            A rota está com token?
                          </td>                   
                        </tr>
                        <tr>
                          <td  style={{padding: "15px 0px"}}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-left">
                            A SQL está com bind para evitar SQL Injection?
                          </td>
                        </tr>
                        <tr>
                          <td  style={{padding: "15px 0px"}}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-left">
                            A conexão está sendo fechada?
                          </td>
                        </tr>

                        <tr>
                          <td  style={{padding: "15px 0px"}}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-left">
                            Os erros estão sendo tratados com try catch?
                          </td>
                        </tr>

                        <tr>
                          <td  style={{padding: "15px 0px"}}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-left">
                            O custo da query está muito alto? É possível reduzir o custo da query?
                          </td>
                        </tr>

                        <tr>
                          <td  style={{padding: "15px 0px"}}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-left">
                            A API foi documentada no API dog?
                          </td>
                        </tr>

                        <tr>
                          <td  style={{padding: "15px 0px"}}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-left">
                            Foi utilizada a conexão v10?
                          </td>
                        </tr>

                        <tr>
                          <td  style={{padding: "15px 0px"}}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-left">
                            A query é um update/insert/delete? Foi utilizado o query builder?
                          </td>
                        </tr>

                        <tr>
                          <td  style={{padding: "15px 0px"}}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-left">
                            O select precisa de ACL? O ACL foi implementado?
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>               
              </Card>
            </Col>
          </Row>        
      </div>
    </>
  );
}

export default DefinitionOfDone;
