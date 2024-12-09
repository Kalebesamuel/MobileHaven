import React, { useRef } from "react";

import { Row, Col, Card, CardBody, CardHeader, CardTitle, Table } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";

import { CodeExamplesStorybook } from "../../variables/codeExamplesStorybook";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";
import ButtonLink from "../../components/Buttons/ButtonLink";
import HighlighterText from "../../components/Highlighters/HighlighterText.js";
import HighlighterCard from "../../components/Highlighters/HighlighterCard.js";

//= ==============================================================================================
function Storybook() {
  const refBenefits  = useRef(null);
  const refCreatingLibrary  = useRef(null);
  const refAddStoryBook  = useRef(null);
  const refRenderingComponents  = useRef(null);

  useScrollToAnchorByParams({
    refBenefits,
    refCreatingLibrary,
    refAddStoryBook,
    refRenderingComponents,
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
                <h5 className="title">Storybook</h5>
                <p className="text-muted">
                  O Storybook é uma ferramenta poderosa para desenvolver e documentar componentes de forma isolada. Ele é amplamente utilizado para criar design systems e facilitar a colaboração entre designers e desenvolvedores.
                </p>
              </CardHeader>

              <CardBody>
                <p>
                <h6 id="refBenefits" ref={refBenefits}>
                    <a id="Prettier">
                      Benefícios do Storybook + Atomic Design + Verdaccio
                    </a>
                </h6>

                <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/storybook-relationship.jpg")}
                    />
                  </div>
                <br />

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
                            Celular e Web
                          </h7>
                        </td>
                        <td>
                          <p>
                            Possibilidade de visualizar e testar os componentes diretamente em dispositivos físicos ou virtuais.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7
                            id="effect"
                            class="text-muted font-weight-bold"
                          >
                            Componentes Reutilizáveis
                          </h7>
                        </td>
                        <td>
                          Centralização e organização dos componentes com Atomic Design.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7
                            id="effect"
                            class="text-muted font-weight-bold"
                          >
                            Gerenciamento Local
                          </h7>
                        </td>
                        <td>
                          Utilização do Verdaccio para gerenciar versões e compartilhar a biblioteca entre projetos.
                        </td>
                      </tr>                                        
                    </tbody>
                  </Table>
                  <br/>

                  <HighlighterCard text={() => (<div><h7>A documentação abaixo é apenas um referencial é importante seguir a </h7> <a href="https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/">documentação oficial.</a></div>)} type="warning"/>

                  <h6 ref={refCreatingLibrary} id="refCreatingLibrary">
                    <a id="Prettier">
                      Criação da Biblioteca com Verdaccio
                    </a>
                  </h6>
                  <h7                    
                    class="font-weight-bold"
                  >
                    Configure o Verdaccio
                  </h7>
                  <p>
                    Instale o Verdaccio globalmente:
                  </p>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesStorybook.install}
                    />
                  <br/>

                  <p>Inicie o servidor local:</p>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesStorybook.initServer}
                    />
                  <HighlighterText search="http://localhost:4873">Ele estará disponível em http://localhost:4873.</HighlighterText>
                  <br/>
                  <br/>

                  <h7
                    class="font-weight-bold"
                  >
                    Configure o .npmrc: Atualize o registro local do npm para publicar e instalar pacotes da sua biblioteca:
                  </h7>

                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesStorybook.npmrc}
                    />
                    <br/>

                    <h7
                    class="font-weight-bold"
                  >
                    Crie a biblioteca do design system
                  </h7>
                  <p>
                    Estruture o projeto:
                  </p>

                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesStorybook.projectStructure}
                    />
                    <br/>  

                  <h6 ref={refAddStoryBook} id="refAddStoryBook">
                    <a id="Prettier">
                      Adicione o Storybook ao Projeto
                    </a>
                  </h6>

                  <h7                    
                    class="font-weight-bold"
                  >
                    Instale o Storybook
                  </h7>
                  <p>No projeto da biblioteca:</p>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesStorybook.installAndInitStorybook}
                  />

                  <p>Ajuste o main.js para usar React Native:</p>                  
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesStorybook.mainJS}
                  />
                  <br/>

                  <h7
                    class="font-weight-bold"
                  >
                    Adicione React Native for Web
                  </h7>
                  <p>Instale as dependências para suportar React Native no navegador:</p>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}  
                    PreTag="div"
                    children={CodeExamplesStorybook.addReactNativeWeb}
                  />
                  <br/>

                  <p>Crie ou ajuste o storybook/index.js:</p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesStorybook.storybookIndex} 
                  />
                  <br/>

                <h6 ref={refRenderingComponents} id="refRenderingComponents">
                  <a id="Prettier">
                    Renderizando os componentes na web ou dispositivo físico
                  </a>
                </h6>  

                <h7                    
                    class="font-weight-bold"
                  >
                    Configure o Expo para o Storybook
                  </h7>
                  <p>Adicione o suporte ao Expo:</p>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesStorybook.storyBookExpoConfig} 
                  />
                  <br/>

                  <p>Ajuste o package.json:</p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesStorybook.packageJsonScripts} 
                  />
                  <br/>

                  <p>Para rodar o storybook use:</p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesStorybook.runningStorybook} 
                  />
                  <br/>
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
                  <ul>
                    <li>
                      <ButtonLink
                        link="Benefícios do Storybook + Atomic Design + Verdaccio"
                        onClick={() => changeAnchorLink("refBenefits")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Criação da Biblioteca com Verdaccio"
                        onClick={() =>
                          changeAnchorLink("refCreatingLibrary")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Adicione o Storybook ao Projeto"
                        onClick={() =>
                          changeAnchorLink("refAddStoryBook")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Renderizando os componentes na web ou dispositivo físico"
                        onClick={() => changeAnchorLink("refRenderingComponents")}
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

export default Storybook;
