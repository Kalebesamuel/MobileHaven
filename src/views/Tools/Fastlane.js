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

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

import { CodeExamplesFastlane } from "../../variables/codeExamplesFastlane";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

//= ==============================================================================================
function Fastlane() {
  const refWhyFastlane = useRef(null);
  const refInstallingRuby = useRef(null);
  const refIntegratingFastlaneToProject = useRef(null);
  const refIntegratingFastlaneToAndroid = useRef(null);
  const refIntegratingFastlaneToIos = useRef(null);
  const refESLintInAction = useRef(null);
  const refCreatingAndroidLanes = useRef(null);
  const refCreatingIosLanes = useRef(null);
  const refRunningLanes = useRef(null);

  useScrollToAnchorByParams({
    refWhyFastlane,
    refInstallingRuby,
    refIntegratingFastlaneToProject,
    refIntegratingFastlaneToAndroid,
    refIntegratingFastlaneToIos,
    refESLintInAction,
    refCreatingAndroidLanes,
    refCreatingIosLanes,
    refRunningLanes,
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
                <h5 className="title">Configurando o Fastlane</h5>
                <p className="text-muted">
                  A estruturação dos projetos é definida por uma stack de
                  qualidade que aborda vários aspectos.
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  <h6>
                    <a id="ESLint">
                      A respeito das possíveis automatizações utilizando
                      Fastlane
                    </a>
                  </h6>
                  <h7
                    ref={refWhyFastlane}
                    id="whyESLint"
                    class="font-weight-bold"
                  >
                    O que é e porque usar o Fastlane
                  </h7>
                  <p>
                    O Fastlane é uma ferramenta com inúmeras funcionalidades que
                    nos possibilitam a automatização de diversas tarefas
                    vinculadas a processos que acontecem no universo mobile
                    tanto no Android quanto no iOS. Utilizando o Fastlane
                    conseguimos automatizar tarefas tais como:
                  </p>
                  <ul>
                    <li>
                      <h7>
                        Automatização de todo o fluxo de deploy para a App
                        Store, considerando a geração de profile, certificados e
                        outros itens necessários até o momento do upload do ipa
                        para o testflight.
                      </h7>
                    </li>
                    <li>
                      <h7>
                        Automatização de todo o fluxo de deploy para a Play
                        Store, neste caso já é necessário ter subido pelo menos
                        uma versão na Play Store de forma manual antes de
                        utilzar esta funcionalidade.
                      </h7>
                    </li>
                    <li>
                      <h7>
                        Além disso é possível fazer outras diversas tarefas que
                        antes seriam manuais utilizando plugins disponíveis para
                        o fastlane.
                      </h7>
                    </li>
                  </ul>
                  <h7>
                    Conseguimos saber mais sobre o Fastlane e como utilizá-lo
                    através do link abaixo:
                  </h7>
                  <br />
                  <a href="https://docs.fastlane.tools/" target="_blank">
                    {" "}
                    <h7 class="text-muted">
                      - Conhecendo mais sobre o Fastlane
                    </h7>
                  </a>
                  <br />
                  <br />
                  <br />

                  <br />
                  <hr />
                  <p>
                    <h7
                      ref={refInstallingRuby}
                      id="ESLintIntegration"
                      class="font-weight-bold"
                    >
                      Instalando o ruby
                    </h7>

                    <p>
                      De forma normal o ruby já vem instalado no mac, porém pode
                      haver problemas com sua utilização, um bom exemplo é
                      devido a falta de praticidade no controle de suas versões.
                      Para podermos ter várias versões instaladas na nossa
                      máquina e conseguir controlar qual a versão queremos
                      utilizar, seja de forma local ou de forma global podemos
                      utilizar algumas ferramentas tais como{" "}
                      <h7 class="text-muted">rmv</h7> e{" "}
                      <h7 class="text-muted">rbenv</h7>.
                    </p>

                    <p>
                      Aqui utilizaremos a ferramenta{" "}
                      <h7 class="text-muted">rbenv</h7> que pode ser instalada
                      utilizando o <h7 class="text-muted">brew</h7> desta forma:
                    </p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesFastlane.installRbenvUsingBrew}
                      />
                    </pre>

                    <p>
                      Em seguida adicione o seguinte conteúdo no final do
                      arquivo <h7 class="text-muted">.zshrc</h7>:
                    </p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={
                          CodeExamplesFastlane.contentNeededInEnvVariables
                        }
                      />
                    </pre>

                    <p>Abra um novo terminal e digite os seguintes comandos:</p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={
                          CodeExamplesFastlane.installingAndControlingRubyWithRbenv
                        }
                      />
                    </pre>

                    <p>
                      Podemos checar se tudo deu certo com os comandos abaixo:
                    </p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={
                          CodeExamplesFastlane.checkIfRubyWasInstalledSuccessfuly
                        }
                      />
                    </pre>

                    <p>
                      Se tudo estiver correto execute o comando abaixo para
                      instalar o bundler:
                    </p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesFastlane.installBundler}
                      />
                    </pre>

                    <p>
                      Se houver algum problema execute o comando com{" "}
                      <h7 class="text-muted">sudo</h7>
                    </p>
                    <br />
                    <hr />
                  </p>
                  <p>
                    <h7
                      ref={refIntegratingFastlaneToProject}
                      id="ESLintIntegration"
                      class="font-weight-bold"
                    >
                      Integrando o Fastlane com o projeto
                    </h7>

                    <p>Adicione o fastlane a sua máquina:</p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesFastlane.installFastlane}
                      />
                    </pre>

                    <p>
                      Adicione um arquivo chamado{" "}
                      <h7 class="text-muted">Gemfile</h7> na raiz do projeto e o
                      abra:
                    </p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesFastlane.createGemfile}
                      />
                    </pre>

                    <p>Adicione o seguinte conteúdo dentro deste arquivo:</p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesFastlane.gemfileContent}
                      />
                    </pre>

                    <p>
                      Adicione as dependências padrão do fastlane, este comando
                      deve ser executado na raiz do projeto, sempre que houver a
                      adição de algum plugin no projeto e o fastlane for
                      utilizado dentro de alguma máquina diferente, já que os
                      pacotes instalados não são versionados:
                    </p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesFastlane.bundleInstall}
                      />
                    </pre>

                    <br />
                    <hr />

                    <h7
                      ref={refIntegratingFastlaneToAndroid}
                      id="ESLintIntegration"
                      class="font-weight-bold"
                    >
                      Integrando o Fastlane ao Android
                    </h7>

                    <p id="nibble">
                      Navegue para a pasta android/ e inicialize o fastlane com
                      o comando abaixo:
                    </p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesFastlane.fastlaneInit}
                      />
                    </pre>

                    <p id="nibble">
                      Após isso serão solicitadas algumas perguntas para
                      configurar o Fastlane no projeto:
                    </p>

                    <Table striped hover>
                      <thead>
                        <tr>
                          <th>Question</th>
                          <th>Answer</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Package Name (com.krausefx.app)</td>
                          <td>
                            Informe o package name do projeto que pode ser
                            encontrado dentro de{" "}
                            <h7 class="text-muted">
                              android/app/src/main/AndroidManifest.xml
                            </h7>{" "}
                            na propriedade <h7 class="text-muted">package</h7>.
                          </td>
                        </tr>
                        <tr>
                          <td>Path to the json secret file</td>
                          <td>
                            Informe o caminho onde está localizado o{" "}
                            <h7 class="text-muted">service account json</h7>,
                            este arquivo nos permite acessar a conta de
                            desenvolvedor do Google Play e extrair metadata e
                            também realizarmos alterações como o deploy de uma
                            aplicação por exemplo.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Do you plan on uploading metadata, screenshots, and
                            builds to Google Play using fastlane?
                          </td>
                          <td>Responda "y".</td>
                        </tr>
                        <tr>
                          <td>
                            Download existing metadata and setup metadata
                            management?
                          </td>
                          <td>Responda "y".</td>
                        </tr>
                      </tbody>
                    </Table>
                  </p>
                  <p id="nibble">
                    No fim o Fastlane estará integrado ao projeto e teremos algo
                    semelhante a isso em nosso terminal:
                  </p>
                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/fastlane-android-questions-2.png")}
                    />
                  </div>
                  <br />
                  <hr />

                  <h7
                    ref={refCreatingAndroidLanes}
                    id="ESLintIntegration"
                    class="font-weight-bold"
                  >
                    Configurando lanes para o Android
                  </h7>
                  <p id="nibble">
                    Agora vamos criar lanes para o android utilizando o
                    fastlane, lanes são conjuntos de ações que podemos executar.
                  </p>

                  <p>
                    Dentro de{" "}
                    <h7 class="text-muted">android/fastlane/Fastfile</h7> defina
                    o seguinte conteúdo:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesFastlane.androidLanes}
                    />
                  </pre>

                  <p>
                    Agora vamos entender algumas informações importantes sobra
                    cada uma das lanes:
                  </p>

                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Lane</th>
                        <th>Lane Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h7 class="text-muted">deployBeta</h7>{" "}
                        </td>
                        <td>
                          Realiza a limpeza da pasta{" "}
                          <h7 class="text-muted">build</h7> define o{" "}
                          <h7 class="text-muted">build type</h7> da .aab que
                          será gerada, e enfim realiza o upload da .aab para a
                          track <h7 class="text-muted">beta</h7> responsável por
                          lidar com a disponibilidade de testes do aplicativo
                          para o grupo de teste.
                        </td>
                      </tr>
                      <tr>
                        <td>deployProduction</td>
                        <td>
                          Realiza a limpeza da pasta{" "}
                          <h7 class="text-muted">build</h7> define o{" "}
                          <h7 class="text-muted">build type</h7> da .aab que
                          será gerada, e enfim realiza o upload da .aab para a
                          track <h7 class="text-muted">production</h7>{" "}
                          responsável por lidar com a disponibilidade do
                          aplicativo para todos os seus usuários.{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7 class="text-muted">bump</h7>{" "}
                        </td>
                        <td>
                          Responsável por aumentar o{" "}
                          <h7 class="text-muted">versionCode</h7> e definir a
                          mesma versão presente no package.json para o
                          versionName dentro de android/app/build.gradle. Esta
                          lane é executada através do husky junto com a lib{" "}
                          <h7 class="text-muted">standard-version</h7>{" "}
                          responsável por aumentar a versão do aplicativo dentro
                          do package.json baseado no changelog dos commits que
                          foram realizados.
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                  <br />
                  <hr />
                  <h7
                    ref={refIntegratingFastlaneToIos}
                    id="ESLintIntegration"
                    class="font-weight-bold"
                  >
                    Integrando o Fastlane ao iOS
                  </h7>
                  <p id="nibble">
                    Navegue para a pasta ios/ e inicialize o fastlane com o
                    comando abaixo:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesFastlane.fastlaneInit}
                    />
                  </pre>
                  <p id="nibble">
                    Após isso serão solicitadas algumas perguntas para
                    configurar o Fastlane no projeto:
                  </p>

                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Question</th>
                        <th>Answer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h7 class="text-muted">
                            1. What would you like to use fastlane for? <br />
                            1. 📸 Automate screenshots <br />
                            2. 👩‍✈️ Automate beta distribution to TestFlight{" "}
                            <br />
                            3. 🚀 Automate App Store distribution <br />
                            4. 🛠 Manual setup - manually setup your project to
                            automate your tasks
                          </h7>{" "}
                        </td>
                        <td>
                          Informe a opção 4. (
                          <h7 class="text-muted">
                            Manual setup - manually setup your project to
                            automate your tasks
                          </h7>
                          )
                        </td>
                      </tr>
                      <tr>
                        <td>Select Scheme</td>
                        <td>Escolha sempre o scheme que não seja de tvOS.</td>
                      </tr>
                      <tr>
                        <td>
                          <h7 class="text-muted">
                            3. Please enter your Apple ID developer credentials
                            <br />
                            Apple ID Username:
                          </h7>{" "}
                        </td>
                        <td>
                          Informe o apple id que é o email que você utiliza para
                          logar na App Store Connect.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          4. Would you like fastlane to manage your app's
                          metadata?
                        </td>
                        <td>Responda "y".</td>
                      </tr>
                    </tbody>
                  </Table>

                  <p id="nibble">
                    No fim o Fastlane estará integrado ao projeto e teremos algo
                    semelhante a isso em nosso terminal:
                  </p>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/fastlane-ios-questions-1.png")}
                    />
                  </div>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/fastlane-ios-questions-2.png")}
                    />
                  </div>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/fastlane-ios-questions-3.png")}
                    />
                  </div>
                  <hr />

                  <br />

                  <h7
                    ref={refCreatingIosLanes}
                    id="ESLintIntegration"
                    class="font-weight-bold"
                  >
                    Configurando lanes para o iOS
                  </h7>
                  <p id="nibble">
                    Agora vamos criar as lanes para o iOS dentro de{" "}
                    <h7 class="text-muted">ios/fastlane/Fastfile,</h7> defina o
                    seguinte conteúdo:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesFastlane.iosLanes}
                    />
                  </pre>

                  <p>
                    Vamos entender algumas informações importantes sobre cada
                    uma das lanes também:
                  </p>

                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Lane</th>
                        <th>Lane Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>increment_build_number</td>
                        <td>
                          Incrementa o<h7 class="text-muted">build number</h7>{" "}
                          do projeto para poder subir uma nova release sem
                          conflito de versão.
                        </td>
                      </tr>
                      <tr>
                        <td>get_certificates</td>
                        <td>
                          Checa se já algum certificado de distribuição
                          instalado na máquina, se houver o define, senão gera
                          uma nova
                          <h7 class="text-muted">private key,</h7> realiza uma
                          nova requisição de login, em seguida gera, baixa e
                          instala o certificado na máquina local e importa todos
                          os arquivos gerados para a Keychan.
                        </td>
                      </tr>
                      <tr>
                        <td>get_provisioning_profile</td>
                        <td>
                          Realiza o donwload do úlitmo{" "}
                          <h7 class="text-muted">provisioning profile</h7> ou o
                          cria caso não houver, se o mesmo quebrado também é
                          realizado a reparação, se expirado é capaz de realizar
                          a renovação.
                        </td>
                      </tr>
                      <tr>
                        <td>update_project_provisioning</td>
                        <td>
                          Responsável por atualizar as configurações no código
                          do projeto a partir do
                          <h7 class="text-muted">provisioning profile</h7>{" "}
                          dentro do arquivo{" "}
                          <h7 class="text-muted">
                            *.xcodeproj/project.pbxproj
                          </h7>
                          .
                        </td>
                      </tr>
                      <tr>
                        <td>update_project_team</td>
                        <td>
                          Define o<h7 class="text-muted">team_id</h7> correto do
                          projeto.
                        </td>
                      </tr>
                      <tr>
                        <td>build_app</td>
                        <td>
                          Responsável por gerar uma nova build do projeto.
                        </td>
                      </tr>
                      <tr>
                        <td>upload_to_testflight</td>
                        <td>
                          Responsável por realizar o upload da build para o{" "}
                          <h7 class="text-muted">TestFlight</h7>.{" "}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <br />
                  <hr />

                  <h7 ref={refRunningLanes} class="font-weight-bold">
                    Executando as lanes
                  </h7>
                  <p id="nibble">
                    Agora que temos todo o nosso projeto configurado, nós
                    podemos começar a executar as lanes que criamos. Temos as
                    lanes do android e do iOS, para executar as lanes do android
                    navegue para <h7 class="text-muted">android/</h7> e para
                    executar as lanes do iOS, navegue para{" "}
                    <h7 class="text-muted">ios/</h7>, o comando para executar as
                    lanes é o mesmo e pode ser visto abaixo:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesFastlane.runningLanes}
                    />
                  </pre>

                  {/* <p id="nibble">
                    Após isso serão solicitadas algumas perguntas para
                    configurar o Fastlane no projeto:
                  </p> */}
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
                    - A respeito das possíveis automatizações utilizando
                    Fastlane
                  </a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="O que é e porque usar o Fastlane"
                        onClick={() => changeAnchorLink("refWhyFastlane")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Instalando o ruby"
                        onClick={() => changeAnchorLink("refInstallingRuby")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Integrando o Fastlane com o projeto"
                        onClick={() =>
                          changeAnchorLink("refIntegratingFastlaneToProject")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Integrando o Fastlane ao Android"
                        onClick={() =>
                          changeAnchorLink("refIntegratingFastlaneToAndroid")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Configurando lanes para o Android"
                        onClick={() =>
                          changeAnchorLink("refCreatingAndroidLanes")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Integrando o Fastlane ao iOS"
                        onClick={() =>
                          changeAnchorLink("refIntegratingFastlaneToIos")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Configurando lanes para o iOS"
                        onClick={() => changeAnchorLink("refCreatingIosLanes")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Executando as lanes"
                        onClick={() => changeAnchorLink("refRunningLanes")}
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

export default Fastlane;
