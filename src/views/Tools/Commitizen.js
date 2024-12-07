import React, { useRef } from "react";

import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";

import { CodeExampleCommitzen } from "../../variables/codeExampleCommitzen";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";
import ButtonLink from "../../components/Buttons/ButtonLink";

//= ==============================================================================================
function Commitizen() {
  const refWhyCommitizen = useRef(null);
  const refIntegratingCommitizenToProject = useRef(null);
  const refIntegratingCommitizenToHusky = useRef(null);
  const refHuskyCommitizenInAction = useRef(null);

  useScrollToAnchorByParams({
    refWhyCommitizen,
    refIntegratingCommitizenToProject,
    refIntegratingCommitizenToHusky,
    refHuskyCommitizenInAction,
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
                <h5 className="title">Configurando o Commitizen</h5>

                <p className="text-muted">
                  A estruturação dos projetos é definida por uma stack de
                  qualidade que aborda vários aspectos
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  <h6>
                    <a id="newProjects">
                      A respeito do gerenciamento da estrutura de commits
                      utilizando o Commitizen
                    </a>
                  </h6>
                  <h7
                    ref={refWhyCommitizen}
                    id="whyCommitzen"
                    class="font-weight-bold"
                  >
                    O que é e porque utilizar o commitizen
                  </h7>
                  <p>
                    O Commitizen é um estruturador de commits que permite que
                    seja definido um padrão para o corpo do commit, auxiliando o
                    desenvolvedor a fornecer todas as informações que precisamos
                    para ter um commit que nos dê uma informação concisa da
                    tarefa realizada, o commitizen também pode ser integrado com
                    ferramentas para automatizar o processo de upgrade da versão
                    do app baseado nos tipos de commit. O Commitizen nos traz
                    benefícios como:
                  </p>

                  <ul>
                    <li>Auxiliar na padronização dos commits do projeto.</li>
                    <li>
                      Validar se todas as informações que precisamos estão sendo
                      fornecidas pelo desenvolvedor, como por exemplo qual o
                      tipo de commit {"("}bug fix, nova feature, etc
                      {")"}, ou número da task caso utilize Jira ou outra
                      ferramenta de gerenciamento de projetos.
                    </li>
                    <li>
                      É customizável porque nos permite utilizar adapters que
                      são os responsáveis por definirem as regras que o commit
                      deve seguir, é possível criar nosso próprio adapter para
                      atender as regras do time.
                    </li>
                  </ul>

                  <br />
                  <hr />

                  <h7
                    ref={refIntegratingCommitizenToProject}
                    id="commitzenIntegration"
                    class="font-weight-bold"
                  >
                    Integrando o commitizen com o projeto
                  </h7>

                  <p>
                    Para integrarmos o Commitizen com o projeto precisamos
                    instalá-lo com o seguinte comando:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExampleCommitzen.installCommitzen}
                    />
                  </pre>

                  <p>
                    Depois de instalar o commitizen globalmente precisamos
                    escolher nosso <h7 class="text-muted">adapter</h7> que
                    definirá as regras do nosso commit, utilizaremos o adapter{" "}
                    <h7 class="text-muted">cz-jira-smart-commit-validated</h7>{" "}
                    que tem uma integração bem interessante com o Jira que está
                    presente na nossa stack:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExampleCommitzen.installAdapter}
                    />
                  </pre>

                  <p>
                    Em seguida precisamos inicializar o nosso commitizen, que
                    basicamente é uma vinculação com o adapter que instalamos, a
                    melhor forma de fazer isso é criando uma propriedade dentro
                    do nosso package.json que por default é automaticamente
                    identificada pelo commitizen, após a última propriedade já
                    declarada dentro do package.json do projeto adicione o
                    seguinte código:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExampleCommitzen.configCommitizen}
                    />
                  </pre>

                  <p>
                    Todas as possíveis configurações do adapter integrado ao
                    nosso projeto podem ser encontrado na documentação do
                    pacote:
                  </p>

                  <a
                    target="_blank"
                    className="text-muted"
                    href="https://www.npmjs.com/package/cz-jira-smart-commit-validated"
                  >
                    - cz-jira-smart-commit-validated
                  </a>

                  <br />
                  <br />
                  <br />
                  <hr />

                  <h7
                    ref={refIntegratingCommitizenToHusky}
                    id="commitzenHuskyIntegration"
                    class="font-weight-bold"
                  >
                    Integrando o commitizen com o Husky
                  </h7>

                  <p>
                    O commitzen e o adapter estão configurados mas para termos o
                    uso que queremos precisamos integrar o commitizen ao Husky
                    para que sempre que fizermos um commit, o Husky dispare o
                    hook <h7 class="text-muted">prepare-commit-message</h7> que
                    é responsável pela preparação da mensagem do nosso commit,
                    então não conseguiremos mais escrever a mensagem do nosso
                    commit com a flag <h7 class="text-muted">-m [message]</h7>,
                    executaremos simplesmente assim:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExampleCommitzen.commitWithoutMessage}
                    />
                  </pre>

                  <p>
                    Para integrar o commitizen com o husky execute o seguinte
                    comando:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={
                        CodeExampleCommitzen.integrateCommitzenWithHusky
                      }
                    />
                  </pre>

                  <br />
                  <hr />

                  <h7
                    ref={refHuskyCommitizenInAction}
                    id="huskyInAction"
                    class="font-weight-bold"
                  >
                    Husky/Commitizen em ação
                  </h7>

                  <p>
                    Para vermos o commitzen em ação apenas execute o comando{" "}
                    <h7 class="text-muted">git commit</h7> e ele será disparado
                    para nos auxiliar com a criação da nossa mensagem:
                  </p>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/commitizenInAction.gif")}
                    />
                  </div>
                  <br />

                  <p>
                    Depois de responder tudo, ele mostrará a mensagem que
                    criamos, aperte <h7 class="text-muted">shift + :</h7> para
                    habilitar o input de actions e digite{" "}
                    <h7 class="text-muted">wq!</h7> para confirmar o que foi
                    escrito e sair da edição de commit, e está feito, nossa
                    mensagem com o auxílio do Commitizen foi criada.
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
                  <a className="text-muted" href="#Commitizen">
                    Configurando o Commitizen:
                  </a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="O que é e porque utilizar o commitizen"
                        onClick={() => changeAnchorLink("refWhyCommitizen")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Integrando o commitizen com o projeto"
                        onClick={() =>
                          changeAnchorLink("refIntegratingCommitizenToProject")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Integrando o commitizen com Husky"
                        onClick={() =>
                          changeAnchorLink("refIntegratingCommitizenToHusky")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Husky/Commitizen em ação"
                        onClick={() =>
                          changeAnchorLink("refHuskyCommitizenInAction")
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

export default Commitizen;
