import React, { useRef } from "react";

import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";

import { CodeExamplePrettier } from "variables/codeExamplePrettier.js";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";
import ButtonLink from "../../components/Buttons/ButtonLink";

//= ==============================================================================================
function Prettier() {
  const refWhyPrettier = useRef(null);
  const refIntegratingPrettierToProject = useRef(null);
  const refIntegratingPrettierToVsCode = useRef(null);
  const refPrettierInAction = useRef(null);

  useScrollToAnchorByParams({
    refWhyPrettier,
    refIntegratingPrettierToProject,
    refIntegratingPrettierToVsCode,
    refPrettierInAction,
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
                <h5 className="title">Configurando o Prettier</h5>
                <p className="text-muted">
                  A estruturação dos projetos é definida por uma stack de
                  qualidade que aborda vários aspectos.
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  <h6>
                    <a id="Prettier">
                      A respeito da estilização global do código dos projetos
                    </a>
                  </h6>
                  <h7
                    ref={refWhyPrettier}
                    id="whyPrettier"
                    class="font-weight-bold"
                  >
                    O que é e porque utilizar o Prettier
                  </h7>
                  <p>
                    O Prettier é uma ferramenta responsável por definir uma
                    estilização global para nosso código, como identação,
                    vírgulas, ponto e vírgulas, aspas duplas ou simples, dentre
                    outras estilizações que podem ser definidas. O prettier nos
                    ajuda com:
                  </p>
                  <ul>
                    <li>
                      <h7>
                        Manter o padrão de código em relação a estilo, nos
                        permitindo criar um estilo global para nossos projetos.
                      </h7>
                    </li>
                    <li>
                      <h7>
                        Nos permite automatizar o estilo do nosso código sem que
                        tenhamos que nos preocupar com um monte de regras de
                        estilo.
                      </h7>
                    </li>
                    <li>
                      <h7>
                        Integrado com o Husky é capaz de resolver erros de
                        estilização automaticamente antes mesmo que seja
                        realizado um commit.
                      </h7>
                    </li>
                  </ul>
                  <br />
                  <hr />

                  <h7
                    ref={refIntegratingPrettierToProject}
                    id="PrettierIntegration"
                    class="font-weight-bold"
                  >
                    Integrando o Prettier com o projeto
                  </h7>
                  <p>
                    Para integrar o Prettier com o projeto instale o Prettier
                    com o seguinte comando para instalá-lo como uma
                    devDependencies no projeto:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplePrettier.installPrettier}
                    />
                  </pre>
                  <p>
                    Em seguida crie um arquivo chamado{" "}
                    <h7 class="text-muted">.prettierrc.json</h7> na raiz do
                    projeto com as seguintes configurações:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplePrettier.prettierConfiguration}
                    />
                  </pre>
                  <p>
                    Essas configurações definem como o nosso código será
                    estilizado.
                  </p>
                  <br />
                  <hr />

                  <h7
                    ref={refIntegratingPrettierToVsCode}
                    id="PrettierVSCodeIntegration"
                    class="font-weight-bold"
                  >
                    Integrando o Prettier com o VSCode
                  </h7>
                  <p>
                    Para que o Prettier consiga ter efeito sobre o nosso
                    ambiente de desenvolvimento e interagir com o VSCode,
                    precisamos realizar algumas alterações na configuração do
                    VSCode. Vamos iniciar por editar as configurações dentro de
                    settings.json, caso não saiba como acessar essa parte,
                    verifique na sessão ESLint através do link abaixo:
                  </p>
                  <a
                    target="_blank"
                    href="/admin/help/ESLint/#OpenVSCodeSettings"
                  >
                    <h7 class="text-muted">
                      - Acessando o json de configurações do VSCode
                    </h7>
                  </a>
                  <br />
                  <br />
                  <p>
                    Dentro do arquivo <h7 class="text-muted">settings.json </h7>
                    adicione o seguinte conteúdo:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplePrettier.settingsJsonPrettier}
                    />
                  </pre>

                  <br />
                  <hr />

                  <h7
                    ref={refPrettierInAction}
                    id="PrettierAction"
                    class="font-weight-bold"
                  >
                    Prettier em ação
                  </h7>
                  <p>
                    Para vermos o Prettier em ação podemos dispará-lo salvando o
                    arquivo, abaixo vemos um simples uso dele:
                  </p>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/PrettierInAction.gif")}
                    />
                  </div>
                  <br />

                  <p>
                    Na sessão Husky há um passo importante demonstrando um
                    melhor uso do Prettier de uma forma automatizada, impedindo
                    que códigos sem a devida concordância com as regras de
                    estilização do projeto venha a ser commitado.
                  </p>
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
                  <a className="text-muted" href="#Prettier">
                    A respeito da estilização global do código dos projetos:
                  </a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="O que é e porque utilizar o Prettier"
                        onClick={() => changeAnchorLink("refWhyPrettier")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Integrando o Prettier com o projeto"
                        onClick={() =>
                          changeAnchorLink("refIntegratingPrettierToProject")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Integrando o Prettier com o VSCode"
                        onClick={() =>
                          changeAnchorLink("refIntegratingPrettierToVsCode")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Prettier em ação"
                        onClick={() => changeAnchorLink("refPrettierInAction")}
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

export default Prettier;
