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
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

import { CodeExamplesForms } from "../../variables/codeExamplesForms";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";
import HighlighterText from "components/Highlighters/HighlighterText";
import HighlighterCard from "components/Highlighters/HighlighterCard";

//= ==============================================================================================
const Forms = () => {
  const refBenefits = useRef(null);
  const refInstall = useRef(null);
  const refSchema = useRef(null);
  const refComponentInput = useRef(null);
  const refErrorMessage = useRef(null);
  const refFormField = useRef(null);
  const refFormProvider = useRef(null);
  const refForm = useRef(null);
  const refTemplate = useRef(null);
  const refPage = useRef(null);

  useScrollToAnchorByParams({
    refBenefits,
    refInstall,
    refSchema,
    refComponentInput,
    refErrorMessage,
    refFormField,
    refFormProvider,
    refForm,
    refTemplate,
    refPage
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
                <h5 className="title">React Hook Form + Zod</h5>

                <p className="text-muted">
                  Esta documentação aborda como configurar e usar o React Hook Form em conjunto com Zod para validação de formulários no React Native Expo.
                </p>
              </CardHeader>

              <CardBody>
                <div id="react-redux">
                  <h6>
                    <a id="refBenefits" ref={refBenefits}>
                      Benefícios da Abordagem
                    </a>
                  </h6>

                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h7
                            id="effect"
                            class="text-muted font-weight-bold"
                          >
                            Validação Poderosa
                          </h7>
                        </td>
                        <td>
                          Zod oferece mensagens detalhadas e schemas reutilizáveis.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7
                            id="effect"
                            class="text-muted font-weight-bold"
                          >
                            Desempenho
                          </h7>
                        </td>
                        <td>
                          React Hook Form controla o estado do formulário com eficiência.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7
                            id="effect"
                            class="text-muted font-weight-bold"
                          >
                            Escalabilidade
                          </h7>
                        </td>
                        <td>
                          Componentes separados (Input, FormProvider) permitem fácil reutilização.
                        </td>
                      </tr>                      
                    </tbody>
                  </Table>                                    
                  <br/>

                  <h6>
                    <a id="refInstall" ref={refInstall}>
                      Instalação das Dependências
                    </a>
                  </h6>   
                  <p>Primeiro, instale as bibliotecas necessárias:</p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesForms.install}
                  />   
                  <br />

                  <h6>
                    <a id="refSchema" ref={refSchema}>
                    Criando o Schema de Validação com Zod
                    </a>
                  </h6>
                  <HighlighterText search="src/schemas/formSchema.ts">Crie o arquivo src/schemas/formSchema.ts:</HighlighterText>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesForms.formSchema}
                  />   
                  <br />

                  <h6>
                    <a id="refComponentInput" ref={refComponentInput}>
                      Criando o Componente de Input
                    </a>
                  </h6>
                  <HighlighterText search="src/components/atoms/Input.tsx">Crie o arquivo src/components/atoms/Input.tsx:</HighlighterText>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesForms.input}
                  />   
                  <br />

                  <h6>
                    <a id="refErrorMessage" ref={refErrorMessage}>
                      Criando o Componente de ErrorMessage
                    </a>
                  </h6>
                  <HighlighterText search="src/components/atoms/ErrorMessage.tsx">Crie o arquivo src/components/atoms/ErrorMessage.tsx:</HighlighterText>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesForms.errorMessage}
                  />   
                  <br />

                  <h6>
                    <a id="refFormField" ref={refFormField}>
                      Criando o Componente de FormField
                    </a>
                  </h6>
                  <HighlighterText search="src/components/molecules/FormField.tsx">Crie o arquivo src/components/molecules/FormField.tsx:</HighlighterText>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesForms.formField}
                  />   
                  <br />

                  <h6>
                    <a id="refFormProvider" ref={refFormProvider}>
                      Criando o FormProvider
                    </a>
                  </h6>
                  <HighlighterText search="src/components/organisms/FormProvider.tsx">Crie o arquivo src/components/organisms/FormProvider.tsx:</HighlighterText>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesForms.formProvider}
                  />   
                  <br />

                  <h6>
                    <a id="refForm" ref={refForm}>
                      Criando o Form
                    </a>
                  </h6>
                  <HighlighterText search="src/components/organisms/Form.tsx">Crie o arquivo src/components/organisms/Form.tsx:</HighlighterText>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesForms.form}
                  />   
                  <br />

                  <h6>
                    <a id="refTemplate" ref={refTemplate}>
                      Criando um Template
                    </a>
                  </h6>
                  <HighlighterCard type="warning" text="Este é só um exemplo, nem sempre será necessário criar um template, inclusive nesse caso em questão a granulização do componente poderia ser encerrada em organismos."/>
                  <HighlighterText search="src/components/templates/ExampleFormTemplate.tsx">Crie o arquivo src/components/templates/ExampleFormTemplate.tsx:</HighlighterText>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesForms.formTemplate}
                  />   
                  <br />

                  <h6>
                    <a id="refPage" ref={refPage}>
                      Utilizando o componente final em uma Page
                    </a>
                  </h6>
                  <HighlighterText search="src/components/pages/ExampleFormScreen.tsx">Crie o arquivo src/components/pages/ExampleFormScreen.tsx:</HighlighterText>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesForms.pages}
                  />   
                 <br />                                                                     
                </div>
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
                  <a className="text-muted">React Hook Form + Zod</a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="Benefícios da Abordagem"
                        onClick={() => changeAnchorLink("refBenefits")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Instalação das Dependências"
                        onClick={() => changeAnchorLink("refInstall")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Criando o Schema de Validação com Zod"
                        onClick={() => changeAnchorLink("refSchema")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Criando o Componente de Input"
                        onClick={() => changeAnchorLink("refComponentInput")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Criando o Componente de ErrorMessage"
                        onClick={() => changeAnchorLink("refErrorMessage")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Criando o Componente de FormField"
                        onClick={() => changeAnchorLink("refFormField")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Criando o FormProvider"
                        onClick={() => changeAnchorLink("refFormProvider")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Criando o Form"
                        onClick={() => changeAnchorLink("refForm")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Criando um Template"
                        onClick={() => changeAnchorLink("refTemplate")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Utilizando o componente final em uma Page"
                        onClick={() => changeAnchorLink("refPage")}
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
};

export default Forms;
