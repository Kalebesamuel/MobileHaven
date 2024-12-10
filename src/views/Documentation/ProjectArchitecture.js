import React, { useRef } from "react";

import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

import { CodeExamplesProjectArchitecture } from "../../variables/codeExamplesProjectArchitecture";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

//= ==============================================================================================
function ProjectArchitecture() {
  const refPatternImportance = useRef(null);
  const refOldPattern = useRef(null);
  const refOurPattern = useRef(null);

  useScrollToAnchorByParams({
    refPatternImportance,
    refOldPattern,
    refOurPattern,
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
                  Documentação do arquitetura de projeto dos aplicativos
                </h5>

                <p className="text-muted">
                  A estruturação dos projetos é definida por um padrão de
                  projetos que separa view e logic seguindo a Clean Architecture
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  <h6>
                    <a id="projectPatternImportance">
                      A respeito do padrão de projetos
                    </a>
                  </h6>

                  <h7
                    ref={refPatternImportance}
                    id="createProjectsWithoutTemplate"
                    class="font-weight-bold"
                  >
                    Importância de padrões de projeto
                  </h7>

                  <p>
                    Padrões de projeto são essenciais principalmente quando
                    estamos trabalhando com um time, isso nos permite conseguir
                    falar a mesma linguagem, entender o código um do outro sem a
                    necessidade de um grande esforço, nos proporciona uma forma
                    organizada de gerenciar nossos componentes, telas,
                    configurações, etc. Isso mostra o valor de desenvolver
                    seguindo um padrão objetivo e coerente, além disso, um
                    padrão de projeto pode melhorar a velocidade e facilidade de
                    resoluções de demandas de forma exponencial. Com isso temos
                    benefícios tais como:
                  </p>

                  <ul>
                    <li>Aumenta a mantenabilidade do código;</li>
                    <li>Mais fácil de testar;</li>
                    <li>Aumento da produção;</li>
                    <li>
                      Elimina duplicação de código promovendo a reutilização.
                    </li>
                  </ul>

                  <br />
                  <br />

                  <h7
                    ref={refOldPattern}
                    id="commomPattern"
                    class="font-weight-bold"
                  >
                    Tudo junto e misturado: Um pouco sobre o padrão comum
                  </h7>

                  <p>
                    É comum na arquitetura de projetos popular do react-native
                    ser mantido a view e a logic no mesmo lugar, bem diferente
                    da arquitetura padrão para Android Nativo (Java/Kotlin) por
                    exemplo, que mantém toda a parte visual em xml's e toda a
                    parte lógica de forma separada e ainda de forma segregada.
                    Então de forma comum teríamos algo assim:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesProjectArchitecture.normalMode}
                    />
                  </pre>

                  <p>
                    No exemplo acima observamos os seguintes pontos negativos
                    dessa arquitetura:
                  </p>

                  <ul>
                    <li>
                      A parte lógica e visual ficam no mesmo arquivo, não há
                      nada muito sólido nisso, ainda mais quando o código de uma
                      tela evolui e se torna maior.
                    </li>
                    <li>
                      Outro ponto interessante de se observar é sobre o
                      entendimento do JSX dessa tela, conseguimos reconhecer
                      alguns elementos visuais mas ficaria bem mais entendível
                      se tivesse sido segmentado os elementos visuais da tela
                      utilizando funções então a partir dos nomes conseguiríamos
                      entender os diferentes componentes que montam essa tela de
                      Profile.
                    </li>
                    <li>
                      E ainda há outro coisa, e se eu quisesse reutilizar
                      algumas daquelas funções em outros lugares? A exemplo
                      temos o método de logout que poderia ser utilizado como um
                      hook global, assim sempre que precisassémos realizar
                      logout em qual fosse a tela poderiamos importar esse hook
                      e usá-lo aproveitamento a mesma lógica em diversos
                      lugares.
                    </li>
                  </ul>

                  <br />
                  <br />

                  <h7
                    ref={refOurPattern}
                    id="knowingVLPattern"
                    class="font-weight-bold"
                  >
                    Conhecendo o padrão de projetos VL (View {"&"} Logic)
                  </h7>

                  <p>
                    Nosso padrão de projeto tenta resolver os problemas acima,
                    sem criar novos problemas mas ainda mais soluções pro dia a
                    dia durante nosso desenvolvimento. Vamos usar o exemplo do
                    código acima refatorado, este código evoluiu agora, ele está
                    maior, tem mais elementos visuais e este padrão faz sentido
                    antes e agora que o código está maior, porque nunca sabemos
                    quando será necessário expandir nosso código devido novas
                    demandas.
                  </p>

                  <p>
                    Vamos primeiro criar uma pasta para nossa parte lógica, e
                    por padrão sempre chamamos de logic, ficará assim:
                  </p>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/logicViewFolderStructure.png")}
                    />
                  </div>
                  <br />

                  <p>
                    Precisamos também criar uma pasta chamada hooks, que conterá
                    nossos hooks globais, tudo que poder ser utilizado em
                    diversas telas deve ficar dentro de hooks globais:
                  </p>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/globalHooksFolder.png")}
                    />
                  </div>
                  <br />

                  <p>
                    Dentro de logic/index.js colocaremos toda nossa parte lógica
                    que tínhamos junto com a parte visual anteriormente,
                    utilizaremos hooks para a extração da parte lógica, ficará
                    algo assim:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesProjectArchitecture.ourModeLogic}
                    />
                  </pre>

                  <p>
                    Vamos entender sobre algumas partes importantes da logic:
                  </p>

                  <dl>
                    <dt>
                      <h7 class="text-muted">1. useBetween</h7>{" "}
                    </dt>
                    <dd>
                      O{" "}
                      <a
                        target="_blank"
                        href="https://www.npmjs.com/package/use-between"
                      >
                        <h7 class="text-muted">useBetween</h7>
                      </a>{" "}
                      é uma lib que nos permite criar uma espécie de{" "}
                      <a
                        target="_blank"
                        href="https://refactoring.guru/pt-br/design-patterns/singleton"
                      >
                        <h7 class="text-muted">singleton</h7>
                      </a>{" "}
                      com os nossos states, dessa forma conseguimos acessar um
                      state de vários lugares e sempre que o acessarmos e o
                      modificarmos estaremos usando a mesma instância, isso nos
                      permite ter um poder de compartilhamento e reutilização
                      imenso, ou seja, o state e seu valor que for modificado na
                      tela de Profile se acessado da tela de login terá o mesmo
                      valor e vice-versa.
                    </dd>
                    <dt>
                      <h7 class="text-muted">2. useLogicStates</h7>{" "}
                    </dt>
                    <dd>
                      useLogicStates é uma função que sempre conterá a
                      declaração de todos os nosso states, refs e etc.
                      Precisamos declará-los e retorná-los, depois disso
                      passamos o useLogicStates como parâmetro do useBetween
                      criando uma únicia e compartilhavél instância dos itens
                      retornados pelo useLogicState.
                    </dd>
                    <dt>
                      <h7 class="text-muted">3. useSharedState</h7>{" "}
                    </dt>
                    <dd>
                      A forma que acessamos os itens declarados dentro de
                      useLogicStates agora é realizando uma desconstrução de
                      useSharedState, é possível importá-lo em qualquer lugar e
                      fazer a desconstrução obtendo qualquer item do
                      useLogicState e utilizá-los sem problemas.
                    </dd>
                  </dl>

                  <hr />

                  <p>
                    Assim que definimos estas partes, conseguimos dar andamento
                    na extração da lógica de nossas telas utilizando hooks, os
                    hooks devem conter as seguintes regras:
                  </p>

                  <ul>
                    <li>
                      O seu nome deve iniciar com o prefixo{" "}
                      <h7 class="text-muted">use</h7>:
                    </li>

                    <p class="font-weight-bold">Maneira Errônea</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesProjectArchitecture.hookNameWrongWay}
                      />
                    </pre>

                    <p class="font-weight-bold">Maneira Correta</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesProjectArchitecture.hookNameRightWay}
                      />
                    </pre>

                    <li>
                      Não deve ser usado a palavra{" "}
                      <h7 class="text-muted">set</h7> depois do prefixo assim
                      quando instanciarmos um hook não correremos o risco de
                      confundí-lo com um setter do useState.
                    </li>

                    <p class="font-weight-bold">Maneira Errônea</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={
                          CodeExamplesProjectArchitecture.hookDontUseSetWrongWay
                        }
                      />
                    </pre>

                    <p class="font-weight-bold">Maneira Correta</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={
                          CodeExamplesProjectArchitecture.hookDontUseSetRightWay
                        }
                      />
                    </pre>
                  </ul>

                  <hr />

                  <p>
                    Precisamos discutir alguns pontos importantes em relação a
                    logic que podem gerar dúvida em uma refatoração de um padrão
                    de projeto comum para o padrão de projeto VL.
                  </p>

                  <h7 class="text-muted">
                    Sobre o uso de async dentro de hooks:
                  </h7>

                  <p>
                    Não podemos colocar async no escopo da array function
                    retornada nos hooks:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesProjectArchitecture.hookAsyncWronWay}
                    />
                  </pre>

                  <p>
                    Então precisamos utilizar um recurso do js chamado IFFE
                    (Immediately-invoked function expression), assim conseguimos
                    definir uma função dentro do escopo do hook como async e
                    chamá-la ao mesmo tempo:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesProjectArchitecture.hookAsyncRightWay}
                    />
                  </pre>

                  <h7 class="text-muted">
                    Sobre a passagem de parametros para os hooks:
                  </h7>

                  <p>
                    Conseguimos passar parâmetros na declaração de um hook,
                    porém existem duas formas, uma só é possível passar
                    parâmetros no momento da instânciação, outro conseguimos
                    passar parâmetros no momento em que o hook é chamado, na
                    primeira forma teríamos algo assim:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={
                        CodeExamplesProjectArchitecture.hookParamOnInstance
                      }
                    />
                  </pre>

                  <p>
                    Na segunda forma o valor passado como parâmetro pode ser
                    dinâmico, assim podemos passar o parâmetro no momento da
                    chamada e não somente no momento da instânciação:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesProjectArchitecture.hookParamOnCalled}
                    />
                  </pre>

                  <hr />

                  <h7 class="text-muted">
                    Agora vamos conhecer e entender a parte visual e utilizar a
                    logic dentro da View, na parte visual teremos algo assim:
                  </h7>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesProjectArchitecture.ourModeView}
                    />
                  </pre>

                  <iframe
                    src="https://codesandbox.io/embed/new?codemirror=1"
                    style={{
                      width: "100%",
                      height: 500,
                      border: 0,
                      borderRadius: 4,
                      overflow: "hidden",
                    }}
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                  ></iframe>
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
                  <a className="text-muted" href="#projectPattern">
                    A respeito do padrão de projetos:
                  </a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="Importância de padrões de projeto"
                        onClick={() => changeAnchorLink("refPatternImportance")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Tudo junto e misturado: Um pouco sobre o padrão comum"
                        onClick={() => changeAnchorLink("refOldPattern")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Conhecendo o padrão de projetos VL (View e Logic)"
                        onClick={() => changeAnchorLink("refOurPattern")}
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

export default ProjectArchitecture;
