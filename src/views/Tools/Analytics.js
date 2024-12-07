import React, { useRef } from "react";

import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

import { CodeExampleEvents } from "../../variables/codeExampleEvents.js";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

//= ==============================================================================================
function Analytics() {
  const refWhyAnalytics = useRef(null);
  const refIntegratingAnalytics = useRef(null);
  const refKnowingAnalytics = useRef(null);
  const refDispatchingAnalyticsEvents = useRef(null);
  const refViewingAnalyticEvents = useRef(null);

  useScrollToAnchorByParams({
    refWhyAnalytics,
    refIntegratingAnalytics,
    refKnowingAnalytics,
    refDispatchingAnalyticsEvents,
    refViewingAnalyticEvents,
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
                  Integração com o Analytics do AppCenter
                </h5>
                <p className="text-muted">
                  A estruturação dos projetos é definida por uma stack de
                  qualidade que aborda vários aspectos.
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  <h6>
                    <a id="newProjects">
                      A respeito da Integração do Analytics do App Center com o
                      aplicativo
                    </a>
                  </h6>
                  <h7
                    ref={refWhyAnalytics}
                    id="whyAnalytics"
                    class="font-weight-bold"
                  >
                    O que é e porque usar o Analytics
                  </h7>
                  <p>
                    O Analytics do App Center quando integrado ao aplicativo nos
                    permite criar eventos que são enviados para o App Center nos
                    dando um relatório baseado nos dados que enviamos de todas
                    as ações dentro do aplicativo que estamos rastreando, essa
                    ação pode ser um clique em um botão, uma rolagem de tela ou
                    qualquer outra coisa nos permita visualizar como nossa
                    aplicação está sendo utilizada. Além disso nos permite ter
                    um overview de quais são os dispositivos, países, versões
                    dos sistemas operacionais que estão sendo utilizadas nos
                    dando porcentagens para tomada de decisões. O Analytics pode
                    nos ajudar a:
                  </p>

                  <ul>
                    <li>
                      <h7>
                        Entender aonde darmos prioridade em um bug fix ou
                        melhoria baseando nas partes dos apps que são mais
                        utilizadas.
                      </h7>
                    </li>
                    <li>
                      <h7>
                        Overview de quem está utilizando nossa aplicação, tipos
                        de dispositivos, países.
                      </h7>
                    </li>
                    <li>
                      <h7>
                        Relatório de eventos do nosso aplicativo, baseado em
                        dados que enviamos para o App Center, que nos permite
                        rastrearmos ações relevantes a tomada de decisões, esses
                        eventos são também muito importantes ao analisarmos um
                        crash e descobrirmos o porque ele ocorreu, já que
                        conseguimos ver todos os eventos até o momento do crash.
                      </h7>
                    </li>
                  </ul>
                  <br />
                  <hr />
                  <h7
                    ref={refIntegratingAnalytics}
                    id="analyticsIntegration"
                    class="font-weight-bold"
                  >
                    Integrando o Analytics com o aplicativo
                  </h7>

                  <p>
                    Para integrarmos o Analytics do App Center com o aplicativo,
                    precisamos ter o projeto criado no App Center e também ter
                    realizado a integração do aplicativo com o App Center, caso
                    não tenha feito essas alterações, cheque a sessão
                    Crashlytics pelo link abaixo:
                  </p>

                  <a
                    target="_blank"
                    className="text-muted"
                    href="/admin/help/Crashlytics#crashlyticsIntegration"
                  >
                    - Integrando o App Center/Crashlytics com o aplicativo
                  </a>
                  <br />
                  <br />
                  <hr />

                  <h7
                    ref={refKnowingAnalytics}
                    id="knowingAnalytics"
                    class="font-weight-bold"
                  >
                    Conhecendo o Analytics
                  </h7>

                  <p>
                    Nos podemos acessar o Analytics a parte da Sidebar clicando
                    em 'Analytics', teremos três opções de Navegação, Overview,
                    Events, Log Flow.
                  </p>

                  <dl>
                    <dt>
                      {" "}
                      <h7 class="text-muted">1. Overview</h7>{" "}
                    </dt>
                    <dd>
                      Nos dá uma visão da quantidade de sessões diárias do
                      aplicativo, quais são os dispositivos mais utilizados,
                      quantidade de usuários ativos e outras informações
                      relevantes.
                    </dd>
                    <div>
                      <img
                        height="30%"
                        alt="..."
                        src={require("assets/img/AnalyticsOverview.png")}
                      />
                    </div>
                    <br />
                    <dt>
                      {" "}
                      <h7 class="text-muted">2. Events</h7>{" "}
                    </dt>
                    <dd>
                      Em Events temos a visão de todos os eventos que foram
                      criados a partir do nosso aplicativo.
                    </dd>
                    <div>
                      <img
                        height="30%"
                        alt="..."
                        src={require("assets/img/AnalyticsEvents.png")}
                      />
                    </div>
                    <br />
                    <dt>
                      {" "}
                      <h7 class="text-muted">3. Log Flow</h7>{" "}
                    </dt>
                    <dd>
                      Muito semelhante a Events mas produz mais informações,
                      sobre início e término de sessão por exemplo, tudo em
                      tempo real. Porém esses dados não ficam salvo igual em
                      Events.
                    </dd>
                    <div>
                      <img
                        height="30%"
                        alt="..."
                        src={require("assets/img/AnalyticsLogFlow.png")}
                      />
                    </div>
                  </dl>

                  <br />
                  <hr />

                  <h7
                    ref={refDispatchingAnalyticsEvents}
                    id="dispatchEvents"
                    class="font-weight-bold"
                  >
                    Disparando eventos usando o Analytics
                  </h7>

                  <p>
                    Agora que temos uma visão geral do Analytics no App Center,
                    precisamos entender como disparar os eventos que vimos em
                    Events, para isso podemos criar alguns métodos utilitários
                    que facilitem o envio desses eventos, principalmente se
                    todos eles forem disparados sempre com alguns dados, vamos
                    entender melhor isso a seguir. Podemos criar algumas funções
                    utilitárias dentro do nosso App.
                  </p>

                  <p>
                    Antes precisamos importar o Analytics no arquivo onde
                    criaremos os métodos utilitários:{" "}
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExampleEvents.importAnalytics}
                    />
                  </pre>

                  <p>
                    Cria sempre um objeto com determinados dados que precisamos
                    para auxiliar na informação que o Event está trazendo:{" "}
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExampleEvents.mountEventObject}
                    />
                  </pre>

                  <p>
                    Cria um evento com o objeto que montamos juntamente com o
                    objeto que passarmos na chamada da função, caso seja
                    passado:{" "}
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExampleEvents.trackEvent
                        .replaceAll("]", "`")
                        .replaceAll("|", "$")}
                    />
                  </pre>

                  <p>
                    Agora podemos disparar o nosso evento sem passar um segundo
                    objeto como parâmetro como mostrado abaixo:{" "}
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExampleEvents.trackEventUseExample}
                    />
                  </pre>

                  <p>Ou passando um segundo objeto assim: </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={
                        CodeExampleEvents.trackEventUseExampleWithObject
                      }
                    />
                  </pre>

                  <br />
                  <hr />

                  <h7
                    ref={refViewingAnalyticEvents}
                    id="viewingDispatchEvents"
                    class="font-weight-bold"
                  >
                    Visualizando eventos disparados
                  </h7>

                  <p>
                    Depois que o evento é disparado podemos acessá-lo e
                    analisá-lo no App Center atráves da Sidebar clicando em
                    Events e depois clicando no nome do Evento que nós
                    definimos:
                  </p>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/ViewingEvents.png")}
                    />
                  </div>
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
                  <a className="text-muted">
                    A respeito da Integração do Analytics do App Center com o
                    aplicativo:
                  </a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="O que é e porque usar o Analytics"
                        onClick={() =>
                          changeAnchorLink("refrefWhyAnalyticsStore")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Integrando o Analytics com o aplicativo"
                        onClick={() =>
                          changeAnchorLink("refIntegratingAnalytics")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Conhecendo o Analytics"
                        onClick={() =>
                          changeAnchorLink("refIntegratingAnalytics")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Disparando eventos usando o Analytics"
                        onClick={() =>
                          changeAnchorLink("refDispatchingAnalyticsEvents")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Visualizando eventos disparados"
                        onClick={() =>
                          changeAnchorLink("refViewingAnalyticEvents")
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

export default Analytics;
