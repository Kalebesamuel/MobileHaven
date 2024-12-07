import React, { useRef } from "react";

import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

import { CodeExmpleHusky } from "../../variables/codeExampleHusky.js";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

//= ==============================================================================================
function Husky() {
  const refWhyHusky = useRef(null);
  const refIntegratingHuskyToProject = useRef(null);
  const refIntegratingPrettierLintStaged = useRef(null);
  const refHuskyInAction = useRef(null);

  useScrollToAnchorByParams({
    refWhyHusky,
    refIntegratingHuskyToProject,
    refIntegratingPrettierLintStaged,
    refHuskyInAction,
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
                <h5 className="title">Configurando o Husky</h5>

                <p className="text-muted">
                  A estruturação dos projetos é definida por uma stack de
                  qualidade que aborda vários aspectos.
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  <h6>
                    <a id="husky">
                      A respeito do gerenciamento de commits com o Husky
                    </a>
                  </h6>
                  <h7 ref={refWhyHusky} id="whyHusky" class="font-weight-bold">
                    O que é e porque utilizar o Husky
                  </h7>
                  <p>
                    O git possui vários hooks que são disparados quando
                    executamos alguma ação como por exemplo executar um commit.
                    O Husky nos permite criar uma espécie de listener para esses
                    hooks e executar ações sempre que eles forem ativados. Para
                    saber mais sobre os hooks do git cheque o link abaixo:
                  </p>

                  <a
                    target="_blank"
                    href="https://git-scm.com/docs/githooks#_hooks"
                  >
                    <h7 class="text-muted">- Hooks do Git</h7>
                  </a>

                  <br />
                  <br />

                  <p>O Husky nos fornece benéficios como:</p>

                  <ul>
                    <li>
                      Gerenciamento de quais commits podem ou não subir para a
                      branch remota.
                    </li>
                    <li>
                      Alta capacidade de integração com outras ferramentas como
                      o Prettier e o ESLint.
                    </li>
                    <li>
                      Auxilia no Code Review dando a garantia de que quando
                      usado e configurado de forma correta permita que na branch
                      remota só tenha código com um nível de qualidade
                      perceptível.
                    </li>
                  </ul>
                  <br />
                  <hr />
                  <h7
                    ref={refIntegratingHuskyToProject}
                    id="huskyIntegration"
                    class="font-weight-bold"
                  >
                    Integrando o Husky com o projeto
                  </h7>

                  <p>
                    Para integrarmos o husky com o projeto é necessário
                    instalá-lo utilizando o seguinte comando:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExmpleHusky.installHusky}
                    />
                  </pre>

                  <p>
                    Em seguida precisamos inicializá-lo utilizando o seguinte
                    comando:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExmpleHusky.initHusky}
                    />
                  </pre>

                  <p>
                    Agora com o Husky instalado e inicializado já podemos
                    delegar ações para os hooks do git, usaremos um hook chamado{" "}
                    <h7 class="text-muted">pre-commit</h7> que é executado antes
                    de um commit ser de fato concluído:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExmpleHusky.addHuskyActions}
                    />
                  </pre>

                  <br />
                  <hr />

                  <h7
                    ref={refIntegratingPrettierLintStaged}
                    id="huskyLintStaged"
                    class="font-weight-bold"
                  >
                    Integrando o Husky com o lint-staged
                  </h7>

                  <p>
                    Nossa configuração ainda não está pronta, precisamos
                    instalar um pacote que nos ajudará a executar algumas ações
                    no momento em que o husky disparar o hook pre-commit
                    juntamente com suas tasks. Utilizaremos um pacote chamado
                    <a
                      target="_blank"
                      href="https://www.npmjs.com/package/lint-staged"
                    >
                      <h7 class="text-muted"> lint-staged</h7>
                    </a>{" "}
                    que executará as ações somente nos arquivos que estão sendo
                    commitados e atendem determinadas regras de extensão.
                  </p>

                  <p>Para instalar o lint-staged utilize o seguinte comando:</p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExmpleHusky.installLintStaged}
                    />
                  </pre>

                  <p>
                    Agora seguiremos com algumas alterações no package.json do
                    nosso projeto, vamos adicionar a seguinte propriedade dentro
                    do package.json:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExmpleHusky.lintStaged}
                    />
                  </pre>

                  <p>
                    Ainda dentro do package.json adicionaremos dentro de scripts
                    o seguinte script:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExmpleHusky.scriptsToHusky}
                    />
                  </pre>

                  <br />
                  <hr />

                  <h7
                    ref={refHuskyInAction}
                    id="huskyAction"
                    class="font-weight-bold"
                  >
                    Husky em ação
                  </h7>

                  <p>
                    O hook pre-commit será executado sempre que fizermos alguma
                    alteração no nosso código e movermos para staged com{" "}
                    <h7 class="text-muted">git add .</h7> e darmos{" "}
                    <h7 class="text-muted">git commit -m "COMMIT MESSAGE".</h7>
                  </p>

                  <p>
                    Abaixo vemos que o ESLint está acusando um erro devido a
                    variável <h7 class="text-muted">styles</h7> não estar sendo
                    importada:
                  </p>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/RegisterStyleIsNotDefined.png")}
                    />
                  </div>
                  <br />

                  <p>
                    Vamos commitar as alterações para vermos o Husky em ação,
                    executando o prettier e lintando os arquivos que estão sendo
                    commitados:
                  </p>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/HuskyInAction.gif")}
                    />
                  </div>
                  <br />

                  <p>
                    O Husky não permite que o commit seja realizado porque o
                    ESLint identificou um erro, o prettier também foi executado
                    verificando por problemas de estilização. O Husky só
                    permitirá que o commit seja realizado se for resolvido o
                    problema encontrado.
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
                  <a className="text-muted" href="#husky">
                    - A respeito do gerenciamento de commits com o Husky
                  </a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="O que é e porque utilizar o Husky"
                        onClick={() => changeAnchorLink("refWhyHusky")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Integrando o Husky com o projeto"
                        onClick={() =>
                          changeAnchorLink("refIntegratingHuskyToProject")
                        }
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Integrando o Husky com o lint-staged"
                        onClick={() =>
                          changeAnchorLink("refIntegratingPrettierLintStaged")
                        }
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Husky em ação"
                        onClick={() => changeAnchorLink("refHuskyInAction")}
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

export default Husky;
