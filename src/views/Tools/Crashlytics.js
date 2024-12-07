import React, { useRef } from "react";

import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

import { CodeExamplesCrashlytics } from "../../variables/codeExamplesCrashlytics";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

//= ==============================================================================================
function Crashlytics() {
  const refWhyCrashlytics = useRef(null);
  const refIntegratingCrashlytics = useRef(null);
  const refKnowingCrashlytics = useRef(null);
  const refCrashOverview = useRef(null);
  const refCrashReport = useRef(null);

  useScrollToAnchorByParams({
    refWhyCrashlytics,
    refIntegratingCrashlytics,
    refKnowingCrashlytics,
    refCrashOverview,
    refCrashReport,
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
                  Integração com o Crashlytics do AppCenter
                </h5>
                <p className="text-muted">
                  A estruturação dos projetos é definida por uma stack de
                  qualidade que aborda vários aspectos
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  <h6>
                    <a id="crashlytics">
                      A respeito da Integração do Crashlytics do App Center com
                      o aplicativo
                    </a>
                  </h6>
                  <h7
                    ref={refWhyCrashlytics}
                    id="whyCrashlytics"
                    class="font-weight-bold"
                  >
                    O que é e porque usar o Crashlytics
                  </h7>
                  <br />
                  <p>
                    O Crashlytics se baseia na ideia de ser avisado sobre um
                    crash em tempo real desde que o usuário tenha internet, caso
                    o dispositivo não tenha rede o log será salvo no storage do
                    dispositivo e enviado quando houver rede novamente, o
                    crashlytics nos permite visualizar quem foi o usuário, qual
                    a stack trace do erro, e quais foram os eventos que
                    aconteceram até o crash. Isso nos permite resolver um erro
                    grave no app com uma velocidade maior, e com um entendimento
                    muito melhor do que ocorreu com o aplicativo. A sessão de
                    Crashlytics pode ser acessado pelo App Center clicando em
                    'Diagnostics {">>"} Issues':
                  </p>
                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/DiagnosticsSidebar.png")}
                    />
                  </div>
                  <br /> <br />
                  <hr />
                  <h7
                    ref={refIntegratingCrashlytics}
                    id="crashlyticsIntegration"
                    class="font-weight-bold"
                  >
                    Integrando o App Center/Crashlytics com o aplicativo
                  </h7>
                  <p>
                    Execute o comando abaixo para instalar as dependências do
                    analytics e crashlytics:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesCrashlytics.installDependencies}
                    />
                  </pre>
                  <p>
                    Crie dentro da pasta android/app/src/main/assets/ um arquivo
                    chamado appcenter-config.json com o seguinte conteúdo:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesCrashlytics.appSecretExample}
                    />
                  </pre>
                  <p>
                    A chave pode ser encontrada em Overview acessando pela
                    Sidebar se o projeto ainda não integrado com o App Center.
                    Agora precisamos configurar quando será enviado os crashes e
                    a análise de uso da nossa aplicação para o App Center, para
                    isso edite o arquivo dentro de cada ambiente para que fique
                    assim, caso seja necessário os ambientes podem ter
                    configurações diferentes:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesCrashlytics.whenToSend}
                    />
                  </pre>
                  <p>
                    Agora podemos executar o app e ver se a tela de Overview do
                    projeto no App Center já nos deu informações do dispositivo.
                  </p>
                  <br />
                  <hr />
                  <h7
                    ref={refKnowingCrashlytics}
                    id="crashlyticsDashboard"
                    class="font-weight-bold"
                  >
                    Conhecendo o Crashlytics Dashboard
                  </h7>
                  <br /> <br />
                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/CrashlyticsDashboard.png")}
                    />
                  </div>
                  <br /> <br />
                  <p>
                    <dl>
                      <dt>1. Filtros do Dashboard</dt>
                      <dd>
                        Nos permite filtrar pela quantidade de dias, número da
                        versão e verificar o status do Crash, se já resolvemos
                        ou não.
                      </dd>
                      <dt>2. Lista de crashes do aplicativo</dt>
                      <dd>
                        Exibe os crashes que aconteceram no app, nos mostra a
                        qauntidade de vezes que aconteceu, a quantidade de
                        usuários que tiveram o mesmo erro, em qual versão
                        ocorreu, status e a última vez em que esse crash foi
                        reportado para verificarmos a sua recorrência.
                      </dd>
                    </dl>
                  </p>
                  <br />
                  <hr />
                  <h7
                    ref={refCrashOverview}
                    id="crashOverview"
                    class="font-weight-bold"
                  >
                    Overview do crash
                  </h7>
                  <p>
                    Ao cliar no crash, teremos a visão da sua Overview que nos
                    informará a stack trace do erro, e também nos informará qual
                    versão do Android/iOS foi afetada pelo erro.
                  </p>
                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/CrashOverview.png")}
                    />
                  </div>
                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/CrashOverview2.png")}
                    />
                  </div>
                  <br /> <br />
                  <hr />
                  <h7
                    ref={refCrashReport}
                    id="crashReport"
                    class="font-weight-bold"
                  >
                    Report do crash
                  </h7>
                  <p>
                    O report do crash é o evento disparado quando o crash
                    acontece no dispositivo do usuário e é enviado para o
                    Crashlytics do App Center, este report nos dá informações
                    extremamente relevantes e consegue nos dar ainda mais
                    informações relevantes se o aplicativo estiver integrado com
                    o Analytics do App Center também, para que seja possível
                    avaliarmos os eventos que foram disparados até que o
                    aplicativo veio a parar de funcionar.
                  </p>
                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/ReportCrash.png")}
                    />
                  </div>
                  <br />
                  <p>
                    Ao clicar no report nos conseguiremos visualizar de forma
                    detalhada o que aconteceu no aplicativo, para tentarmos
                    identificar o erro e definirmos uma solução.
                  </p>
                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/CrashEvents.png")}
                    />
                  </div>
                  <br />
                  <p>
                    <dl>
                      <dt>1. Crash</dt>
                      <dd>Informa a descrição do erro que levou ao crash.</dd>
                      <dt>2. Usuário</dt>
                      <dd>Informa o id do usuário.</dd>
                      <dt>2. Eventos</dt>
                      <dd>
                        Exibe todos os eventos rastreados até o momento em que o
                        aplicativo parou de funcionar. Para entender melhor
                        sobre os eventos veja a sessão de Analytics.
                      </dd>
                    </dl>
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
                  <a className="text-muted" href="#crashlytics">
                    A respeito da Integração do Crashlytics do App Center com o
                    aplicativo:
                  </a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="O que é e porque usar o Crashlytics"
                        onClick={() => changeAnchorLink("refWhyCrashlytics")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Integrando o App Center/Crashlytics com o aplicativo"
                        onClick={() =>
                          changeAnchorLink("refIntegratingCrashlytics")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Conhecendo o Crashlytics Dashboard"
                        onClick={() =>
                          changeAnchorLink("refKnowingCrashlytics")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Overview do Crash"
                        onClick={() => changeAnchorLink("refCrashOverview")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Report do Crash"
                        onClick={() => changeAnchorLink("refCrashReport")}
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

export default Crashlytics;
