import React, { useRef } from "react";

import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

import { CodeExamplesESLint } from "../../variables/codeExamplesESLint.js";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

//= ==============================================================================================
function ESLint() {
  const refWhyESLint = useRef(null);
  const refIntegratingESLintToProject = useRef(null);
  const refIntegratingESLintToVsCode = useRef(null);
  const refESLintInAction = useRef(null);
  const refUsingESLint = useRef(null);
  const refResolvingErrors = useRef(null);

  useScrollToAnchorByParams({
    refWhyESLint,
    refIntegratingESLintToProject,
    refIntegratingESLintToVsCode,
    refESLintInAction,
    refUsingESLint,
    refResolvingErrors,
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
                <h5 className="title">Configurando o ESLint</h5>
                <p className="text-muted">
                  A estruturação dos projetos é definida por uma stack de
                  qualidade que aborda vários aspectos.
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  <h6>
                    <a id="ESLint">
                      A respeito do auxílio do Code Review utilizando o ESLint
                    </a>
                  </h6>
                  <h7
                    ref={refWhyESLint}
                    id="whyESLint"
                    class="font-weight-bold"
                  >
                    O que é e porque usar o ESLint
                  </h7>
                  <p>
                    O ESLint nos auxilia com o Code Review, ele pode ser
                    configurado com regras prontas, existem vários pacotes
                    prontos de outras empresas que podem ser utilizados para
                    agilizar a definição de nossas regras, podemos editar
                    algumas regras desses pacotes por meio de parametros,
                    alterando seu comportamento ou a desabilitando. O ESLint nos
                    permite criar nossas próprias regras também. o ESLint pode
                    nos ajudar com:
                  </p>
                  <ul>
                    <li>
                      <h7>
                        Manter um padrão de código entre todo o time e todos os
                        projetos, já que conseguimos definir regras sobre o
                        nosso código.
                      </h7>
                    </li>
                    <li>
                      <h7>
                        Nos ajudar a encontrar erros como uso de uma variável
                        que não foi declarada, ou uma tag que não foi fechada de
                        forma correta.
                      </h7>
                    </li>
                    <li>
                      <h7>
                        Quando integrado com o{" "}
                        <a target="_blank" href="/admin/help/Husky">
                          <h7 class="text-muted">Husky</h7>
                        </a>{" "}
                        podemos impedir que commits subam para a branch remota
                        com erros sem serem resolvidos.
                      </h7>
                    </li>
                  </ul>
                  <h7>
                    Conseguimos saber mais sobre o ESLint e como utilizá-lo
                    através do link abaixo:
                  </h7>
                  <br />
                  <a href="https://eslint.org/" target="_blank">
                    {" "}
                    <h7 class="text-muted">- Conhecendo mais sobre o ESLint</h7>
                  </a>
                  <br />
                  <br />
                  <br />
                  <hr />
                  <p>
                    <h7
                      ref={refIntegratingESLintToProject}
                      id="ESLintIntegration"
                      class="font-weight-bold"
                    >
                      Integrando o ESLint com o projeto
                    </h7>

                    <p>
                      Adicione as seguintes pacotes dentro de devDependecies no
                      package.json do projeto:
                    </p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesESLint.dependencies}
                      />
                    </pre>

                    <p id="nibble">
                      Ainda dentro de package.json adicione dentro de scripts
                      seguinte comando:
                    </p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesESLint.nibbleScript}
                      />
                    </pre>

                    <p>
                      Agora precisamos definir as pastas/arquivos que o ESLint
                      deve ignorar em suas verificações, para isso crie na raiz
                      do projeto um arquivo chamado{" "}
                      <h7 class="text-muted">.eslintignore</h7>, que será
                      responsável por armazenar essa configuração. Por enquanto
                      vamos adicionar dentro desse arquivo somente o
                      node_modules, porque não queremos o ESLint verifique nada
                      na biblioteca de terceiros:
                    </p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesESLint.eslintignore}
                      />
                    </pre>

                    <p>
                      Agora vamos criar nosso arquivo principal de configuração
                      na raiz do projeto chamado{" "}
                      <h7 class="text-muted">.eslintrc.json</h7> que nos permite
                      definir os puglins, pacotes de regras, editar essas
                      regras, dentre outras configurações. Esse arquivo deve ter
                      a seguinte configuração:
                    </p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesESLint.eslintRc}
                      />
                    </pre>

                    <p>
                      Podemos verificar o cada regra realiza pesquisando o nome
                      delas ou o nome dos pacotes que as nossas configurações
                      estão extendendo.
                    </p>
                  </p>
                  <br />
                  <hr />
                  <h7
                    ref={refIntegratingESLintToVsCode}
                    id="ESLintVSCodeIntegration"
                    class="font-weight-bold"
                  >
                    Integrando o ESLint ao VSCode
                  </h7>
                  <p>
                    Precisamos fazer com que o ESLint consiga ter influência
                    sobre o VSCode, para exibir erros e nos ajudar a resolvê-lo,
                    para isso precisamos instalar a extensão ESLint no VSCode, a
                    extensão pode ser instalada pelo link abaixo.
                  </p>
                  <a
                    target="_blank"
                    href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
                  >
                    <h7 class="text-muted">- Instalar ESLint no VSCode</h7>
                  </a>
                  <br /> <br />
                  <p id="OpenVSCodeSettings">
                    Após instalarmos a extensão do ESLint e ela estar
                    habilitada, precisamos ir para o arquivo de configurações do
                    VSCode, que pode ser acessado apertando{" "}
                    <h7 class="text-muted">Command + P</h7> no Mac, ou{" "}
                    <h7 class="text-muted">Ctrl + P</h7> no windows, será aberto
                    um modal, digite
                    <h7 class="text-muted"> {"> "}Open Settings</h7> e clique na
                    opção{" "}
                    <h7 class="text-muted">
                      Preferences: Open Settings {"("}JSON{")"}
                    </h7>
                    :
                  </p>
                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/OpenSettingsVsCode.png")}
                    />
                  </div>
                  <br />
                  <br />
                  <p>
                    No arquivo <h7 class="text-muted">settings.json</h7> que
                    será aberto, coloque a seguinte configuração:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesESLint.settingsJsonESLint}
                    />
                  </pre>
                  <p>
                    Feito isso reinicie o VSCode e já conseguiremos aproveitar o
                    ESLint com nossas configurações.
                  </p>
                  <br />
                  <hr />
                  <h7
                    ref={refESLintInAction}
                    id="ESLintAction"
                    class="font-weight-bold"
                  >
                    ESLint em ação
                  </h7>
                  <p>
                    Para vermos o ESLint em ação podemos habilitar a
                    visualização do terminal de Problems no VSCode, clicando em{" "}
                    <h7 class="text-muted">View {">>"} Problems:</h7>
                  </p>
                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/ViewsProblem.png")}
                    />
                  </div>
                  <br />
                  <br />
                  <p>
                    Vamos fazer alguma mudança no código para forçar que o
                    ESLint acuse algum erro para que seja mostrado em
                    <h7 class="text-muted"> Problems</h7>.
                  </p>
                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/viewingProblem.png")}
                    />
                  </div>
                  <br />
                  <p>
                    O ESLint sublinha de vermelho os lugares onde são
                    identificados erros e de amarelo os lugares onde são
                    identificados avisos, que são apenas pontos de atenção.
                    Acima vemos um código onde duas linhas foram comentadas de
                    forma proposital a disparar um erro devido uma regra chamada{" "}
                    <h7 class="text-muted">no-undef</h7> que define que uma
                    variável só pode ser usada se existir uma declaração
                    anterior dela, nesse caso a declaração de{" "}
                    <h7 class="text-muted">lastRowElements</h7> não pode ser
                    encontrada e caímos na regra, no terminal de Problems
                    podemos observar que o ESLint é capaz de nos mostrar qual o
                    erro, qual a regra e nos direcionar para este erro de forma
                    rápida.
                  </p>
                  <br />
                  <hr />
                  <h7
                    ref={refUsingESLint}
                    id="RunningESLintTask"
                    class="font-weight-bold"
                  >
                    Utilizando a task do ESLint
                  </h7>
                  <p>
                    Podemos precisar executar a task do ESLint em todo o
                    projeto, o motivo de executar essa task é que em alguns
                    momentos precisamos executar o ESLint novamente como uma
                    espécie de atualização dos erros ou warnings, principalmente
                    quando o ESLint é executado no projeto e é encontrado uma
                    quantidade muito grande de erros dentro projeto, nessa
                    situação o ESLint pode apresentar uma certa dificuldade na
                    atualização dos problemas que são apresentados. Para
                    executar a task do ESLint podemos apertar{" "}
                    <h7 class="text-muted">Command + P</h7> no Mac, ou{" "}
                    <h7 class="text-muted">Ctrl + P</h7> no windows, será aberto
                    um modal, digite
                    <h7 class="text-muted"> {"> "}Run Task</h7> e clique na
                    opção <h7 class="text-muted">Tasks: Run Task</h7>:
                  </p>
                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/RunTaskVsCode.png")}
                    />
                  </div>
                  <br />
                  <p>
                    Em seguida clique no pacote ESLint para exibir as tasks do
                    ESLint:
                  </p>
                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/RunTaskVsCodePackages.png")}
                    />
                  </div>
                  <br />
                  <p>
                    Agora podemos executar a task {"("}eslint: lint whole folder
                    {")"}:
                  </p>
                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/RunESLintTask.png")}
                    />
                  </div>
                  <br />
                  <p>
                    Como resultado a task será executada e teremos uma visão
                    semelhante a esta no terminal, mostrando todos os erros que
                    foram encontrados no projeto e a view de Problems será
                    atualizada:
                  </p>
                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/ResultOfESLintTask.png")}
                    />
                  </div>
                  <br />
                  <br />
                  <hr />
                  <h7
                    ref={refResolvingErrors}
                    id="ErrorResolve"
                    class="font-weight-bold"
                  >
                    Resolvendo erros
                  </h7>
                  <p>
                    Ao clicar encima do erro e acessar as opções, temos algumas
                    possibilidades que vão depender de qual erro estamos
                    falando, alguns erros possuem uma espécie de auto-fix, esse
                    tipo de erro pode ser corrigido automaticamente pelo ESLint,
                    os erros sem o auto-fix geralmente vão ter simplesmente a
                    opção de desabiitar a regra para a linha, desabilitar a
                    regra para o arquivo, ou de ver a documentação da regra que
                    nos redireciona para uma página na web onde temos acesso ao
                    que significa essa regra e as opções que ela nos permite
                    configurar no .eslintrc.json.
                  </p>
                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/ErrorSolution.png")}
                    />
                  </div>
                  <br />
                  <p>
                    Entendendo a regra conseguimos chegar a solução do erro,
                    descomentando a declaração das variáveis o ESLint atualiza o
                    terminal de Problems não mostrando mais nenhum erro:
                  </p>
                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/ErrorSolved.png")}
                    />
                  </div>
                  <br />
                  <p>
                    Podemos também resolvermos problemas que tenham auto-fix
                    vinculado a regra a partir de uma biblioteca chamada{" "}
                    <h7 class="text-muted">nibble</h7> que nos ajuda a gerenciar
                    os erros identificados pelo ESLint, essa ferramenta é
                    extremamente efetiva em projetos com muito códgo onde
                    estamos usando o ESLint pela primeira vez, esses projetos
                    podem apresentar uma quantidade de erros muito alta que
                    dificulta a resolução dos erros de forma manual. Se já foi
                    adicionado o{" "}
                    <a href="#nibble">
                      <h7 class="text-muted">script do nibble</h7>
                    </a>{" "}
                    na sessão 'Integrando o ESLint com o projeto', então só
                    precisamos executar o comando abaixo no terminal do projeto:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesESLint.runningNibble}
                    />
                  </pre>
                  <p>Será exibido algo semelhante a isto:</p>
                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/NibbleInAction1.png")}
                    />
                  </div>
                  <br />
                  <p>
                    Ao selecionarmos o erro e apertarmos Enter, veremos uma
                    mensagem semelhante a esta:
                  </p>
                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/NibbleInAction2.png")}
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
                  <a className="text-muted" href="#ESLint">
                    - A respeito do auxílio do Code Review utilizando o ESLint
                  </a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="O que é e porque usar o ESLint"
                        onClick={() => changeAnchorLink("refWhyESLint")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Integrando o ESLint com o projeto"
                        onClick={() =>
                          changeAnchorLink("refIntegratingESLintToProject")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Integrando o ESLint ao VSCode"
                        onClick={() =>
                          changeAnchorLink("refIntegratingESLintToVsCode")
                        }
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="ESLint em ação"
                        onClick={() => changeAnchorLink("refESLintInAction")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Utilizando a task do ESLint"
                        onClick={() => changeAnchorLink("refUsingESLint")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Resolvendo erros"
                        onClick={() => changeAnchorLink("refResolvingErrors")}
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

export default ESLint;
