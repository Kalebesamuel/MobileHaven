import React, { useRef } from "react";

import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

import { CodeExamplesCodePush } from "../../variables/codeExamplesCodePush.js";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

//= ==============================================================================================
function CodePush() {
  const refWhatIsCodePush = useRef(null);
  const refCreatingAProjectInAppCenter = useRef(null);
  const refCreatingDeploymentEnvironment = useRef(null);
  const refIntegratingEnvironmentsDeployment = useRef(null);
  const refInstallingCodePush = useRef(null);
  const refConfiguringCodePush = useRef(null);
  const refConfiguringWhenUpdateApp = useRef(null);
  const refReleasingUpdatesByCodePush = useRef(null);
  const refUndoingLastCodePushRelease = useRef(null);
  const refManagingCodePushReleases = useRef(null);

  useScrollToAnchorByParams({
    refWhatIsCodePush,
    refCreatingAProjectInAppCenter,
    refCreatingDeploymentEnvironment,
    refIntegratingEnvironmentsDeployment,
    refInstallingCodePush,
    refConfiguringCodePush,
    refConfiguringWhenUpdateApp,
    refReleasingUpdatesByCodePush,
    refUndoingLastCodePushRelease,
    refManagingCodePushReleases,
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
                <h5 className="title">Integração com o CodePush</h5>

                <p className="text-muted">
                  A estruturação dos projetos é definida por uma stack de
                  qualidade que aborda vários aspectos.
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  <h6>
                    <a id="newProjects">
                      Ambientes de deployment e integração do CodePush com o
                      projeto
                    </a>
                  </h6>
                  <h7
                    ref={refWhatIsCodePush}
                    id="whyCodePush"
                    class="font-weight-bold"
                  >
                    O que é o CodePush e porque utilizá-lo
                  </h7>
                  <p>
                    O codePush é um serviço de deployment para react native do
                    App Center, ele não funciona com código nativo (Android/iOS)
                    e react native ao mesmo tempo, ou seja, sempre que for
                    alterado algo em código nativo ou adicionada alguma
                    biblioteca que contém código nativo, será necessário fazer
                    deploy a partir das Web Stores(Play Store/App Store) porque
                    é necessário que esse código seja compilado, algo que o
                    CodePush não realizará devido nosso projeto estar
                    configurado para utilizar o react-native, caso seja
                    utilizado somente código baseado em react-native é possível
                    realizar deploy pelo CodePush de forma muito rápida, isso
                    significa que conseguimos reduzir o tempo da entrega de
                    melhorias e bugfix para o usuário, de dias para minutos, sem
                    a necessidade de passar pela burocracia e tempo de aprovação
                    da playstore.
                  </p>
                  <br />
                  <hr />
                  <h7
                    ref={refCreatingAProjectInAppCenter}
                    id="createAppCenterProject"
                    class="font-weight-bold"
                  >
                    Criando projeto dentro do App Center para utilizar o
                    CodePush
                  </h7>
                  <br />
                  <h7>
                    Acesse o link abaixo para ser direcionado para a página de
                    criação de projeto:
                  </h7>
                  <br />
                  <a href="https://appcenter.ms/users/kalebesamuellopes/applications/create">
                    <h7
                      class="list-group-item-text"
                      target="_blank"
                      class="text-muted"
                    >
                      - App Center - Criação de Projeto
                    </h7>
                  </a>
                  <br />
                  <br />
                  <p>
                    Agora preencha os dados necessários como nome do aplicativo
                    + OS, a Release Type não é importante para nós já que
                    criamos uma divisão de ambientes dentro do projeto que
                    também acaba definindo a Release Type do ambiente, em OS
                    selecione se está criando para Android ou iOS e em Platform
                    selecione React Native, caso o projeto já tiver um ícone o
                    defina para o projeto do AppCenter também. Após isso clique
                    em "Add new App" e o novo projeto será criado.
                  </p>
                  <div>
                    <img
                      height="600px"
                      alt="..."
                      src={require("assets/img/AppCenterNewProject.png")}
                    />
                  </div>
                  <br /> <br />
                  <hr />
                  <h7
                    ref={refCreatingDeploymentEnvironment}
                    id="createEnvironments"
                    class="font-weight-bold"
                  >
                    Acessando o CodePush e criando os ambientes de deployment
                  </h7>
                  <br />
                  <p>
                    Na Sidebar do App Center clique em "Distribute {">> "}
                    CodePush":
                  </p>
                  <div>
                    <img
                      height="400px"
                      alt="..."
                      src={require("assets/img/AppCenterSidebar.png")}
                    />
                  </div>
                  <br />
                  <br />
                  <p>Acesse o gerenciador de deployments:</p>
                  <div>
                    <img
                      height="150px"
                      alt="..."
                      src={require("assets/img/DeploymentSettings.png")}
                    />
                  </div>
                  <br />
                  <br />
                  <p>
                    Agora vamos iniciar a criação dos ambientes de deployment,
                    criaremos nossos três ambientes padrão, DEV/QAS/PRD, cada
                    ambiente de deployment terá sua própria chave que será
                    configurada logo após com a ajuda da nossa divisão de
                    ambientes, assim conseguiremos lançar atualizações para
                    ambientes de deploymennt diferentes baseado em qual ambiente
                    nosso aplicativo está sendo executado.
                  </p>
                  <p>
                    Por default o App Center já cria dois ambientes de
                    deployment, Staging e Production, exclua esses dois
                    ambientes para criarmos os nossos próprios, após isso crie
                    os ambientes clicando em "New Deployment", informe o nome do
                    deployment e depois clique em "Save". No fim deste processo
                    teremos algo semelhante a isto:
                  </p>
                  <div>
                    <img
                      height="350px"
                      alt="..."
                      src={require("assets/img/ManageDeployment.png")}
                    />
                  </div>
                  <br /> <br />
                  <hr />
                  <h7
                    ref={refIntegratingEnvironmentsDeployment}
                    id="environmentsIntegration"
                    class="font-weight-bold"
                  >
                    Integrando ambientes de deployment com os ambientes do app
                  </h7>
                  <br />
                  <p>
                    Já temos nossos ambientes de deployment criados, agora
                    podemos integrá-los com nossos respectivos ambientes dentro
                    do nosso app, acessaremos as pastas dentro de
                    android/app/src, exceto a pasta debug todas as outras
                    precisam ser configuradas, copie a deployment key no
                    gerenciador de deployment do ambiente dev por exemplo e
                    acesse o arquivo dev/res/values/strings.xml e defina a
                    deployment key dentro da tag resources assim:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesCodePush.codePushDeploymentKey}
                    />
                  </pre>
                  <p>
                    Repita este processo para os outros ambientes, a chave
                    utilizada em prd/ será a mesma que será utilizada na pasta
                    main/, a pasta prd existe porque é um ambiente de prd em
                    modo debug, se ele não existisse só conseguiria-mos acessar
                    o ambiente prd em modo release.
                  </p>
                  <br />
                  <hr />
                  <h7
                    ref={refInstallingCodePush}
                    id="installCodePush"
                    class="font-weight-bold"
                  >
                    Instalando o Code Push dentro do projeto
                  </h7>
                  <br />
                  <p>
                    Caso o Code Push não esteja instalado no projeto, execute o
                    comando a abaixo para realizar a instalação:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesCodePush.codePushInstall}
                    />
                  </pre>
                  <p>
                    Agora precisamos verificar se as dependencies do CodePush
                    estão presentes no build.gradle, para isso vá para o arquivo
                    android/app/build.gradle, e verifique se dentro da
                    propriedade 'dependencies' existe a seguinte importação,
                    caso não exista adicione:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesCodePush.codePushDependecies}
                    />
                  </pre>
                  <p>
                    Pesquise dentro deste mesmo arquivo se existe a seguinte
                    implementação, caso não exista, a adicione no fim do
                    build.gradle:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesCodePush.codePushApply}
                    />
                  </pre>
                  <p>
                    Agora dentro do arquivo android/settings.gradle verifique se
                    existe o seguinte código, caso não exista o adicione:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesCodePush.codePushSettingsGradle}
                    />
                  </pre>
                  <br />
                  <hr />
                  <h7
                    ref={refConfiguringCodePush}
                    id="codePushConfiguring"
                    class="font-weight-bold"
                  >
                    Configurando CodePush para lidar com as atualizações em
                    tempo real
                  </h7>
                  <br />
                  <p>
                    Agora dentro do arquivo MainApplication.java vamos importar
                    e configurar o CodePush para saber de onde obter o
                    bundle(arquivo minificado contendo as alterações da nossa
                    atualização) de cada ambiente. Importe o CodePush dentro do
                    arquivo assim:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={
                        CodeExamplesCodePush.codePushMainApplicationImport
                      }
                    />
                  </pre>
                  <p>
                    Depois precisamos sobreescrever o método getJSBundleFile
                    dentro de ReactNativeHost, para que se comporte assim:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesCodePush.codePushGetJsBundle}
                    />
                  </pre>
                  <br />
                  <hr />
                  <h7
                    ref={refConfiguringWhenUpdateApp}
                    id="whenUpdate"
                    class="font-weight-bold"
                  >
                    Definindo quando será verificado e instalado atualizações do
                    CodePush
                  </h7>
                  <p>
                    Precisamos configurar o nosso aplicativo para saber qual o
                    melhor momento para verificar e instalar atualizações que
                    estejam no CodePush. Para isso precisamos realizar uma
                    alteração dentro do arquivo principal do nosso app,
                    precisamos editar o arquivo main/App.js. Importe o codePush
                    assim:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesCodePush.importCodePushReactNative}
                    />
                  </pre>
                  <p>
                    Agora no fim do arquivo teremos uma exportação comum de
                    'App', nos editaremos essa importação para ficar igual a
                    isto:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesCodePush.exportCodePushReactNative}
                    />
                  </pre>
                  <p>
                    A propriedade 'checkFrequency' define em qual estágio do
                    lifecycle da nossa aplicação o app verificará e instalará,
                    caso haja, uma release. A constante ON_APP_RESUME define que
                    toda vez que o aplicativo for aberto ou minimizado e
                    maximizado novamente a aplicação irá realizar um
                    verificação/instalação de novas releases para o ambiente em
                    que o app está rodando.
                  </p>
                  <br />
                  <hr />
                  <h7
                    ref={refReleasingUpdatesByCodePush}
                    id="releaseUpdate"
                    class="font-weight-bold"
                  >
                    Liberando atualizações pelo Code Push
                  </h7>
                  <br />
                  <p>
                    Agora que o nosso projeto está configurado podemos liberar
                    atualizações pelo Code Push caso o usuário já esteja com uma
                    apk/aab instalada em seu dispositivo com toda essa
                    configuração. Adicione os seguintes comandos dentro de
                    package.json na propriedade scripts para facilitar as
                    releases:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesCodePush.releaseCodeExamples}
                    />
                  </pre>
                  <p>
                    Uma breve explicação de cada flag:
                    <br /> <br />
                    <dl>
                      <dt>
                        -a {"["}App Name{"]"}
                      </dt>
                      <dd>
                        Define qual dos nossos aplicativos queremos executar o
                        comando.
                      </dd>
                      <dt>
                        -d {"["}Deployment Environement{"]"}
                      </dt>
                      <dd>
                        Define para qual ambiente de deployment essa atualização
                        deve ser liberada.
                      </dd>
                      <dt>
                        -t {"["}Target Version Binary{"]"}
                      </dt>
                      <dd>
                        Define para quais versões já existentes do app essa
                        atualização será lançada, o * define que qualquer versão
                        já existente do app será atualizado com essa release.
                        Caso queire lançar para uma versão específica execute o
                        comando especificando o número da versão.
                      </dd>
                      <dt>-m</dt>
                      <dd>
                        Define se a atualização é do tipo 'mandatory', que
                        significa que o usuário não tem poder sobre a aceitar a
                        atualização ou não, ela será instalada de qualquer
                        jeito.
                      </dd>
                      <dt>
                        --description {"["}Description{"]"}
                      </dt>
                      <dd>
                        Define as release notes, essa descrição pode ser usada
                        para mostrar ao usuário ou simplesmente ficar como uma
                        informação para sabermos o que foi mudado nessa nova
                        release, é interessante que seja informado sempre o
                        número de todos os Jiras tratados que essa versão está
                        subindo.
                      </dd>
                    </dl>
                  </p>
                  <p>
                    Agora podemos liberar uma versão pro android no ambiente dev
                    por exemplo, utilizando seguinte comando que irá desabilitar
                    a última versão lançada e lançará a nova:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesCodePush.releasingNewVersion}
                    />
                  </pre>
                  <br />
                  <hr />
                  <h7
                    ref={refUndoingLastCodePushRelease}
                    id="undoRelease"
                    class="font-weight-bold"
                  >
                    Desfazendo a última release {"(Rollback)"}
                  </h7>
                  <br />
                  <p>
                    Caso seja verificado que a release lançada estava com algum
                    erro e for necessário fazer o rollback dela, podemos
                    utilizar os seguintes comandos abaixo, o aplicativo
                    retornará a release anterior automaticamente caso haja, se
                    não simplesmente ficará sem essa release:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesCodePush.undoReleaseExamples}
                    />
                  </pre>
                  <p>
                    Agora podemos executar o comando abaixo para desabilitar a
                    última release de dev por exemplo:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesCodePush.undoLastRelease}
                    />
                  </pre>
                  <br />
                  <hr />
                  <h7
                    ref={refManagingCodePushReleases}
                    id="manageReleasesByAppCenter"
                    class="font-weight-bold"
                  >
                    Gerenciando releases do Code Push através do App Center
                  </h7>
                  <br />
                  <p>
                    Quando for lançada uma release para algum ambiente do
                    CodePush podemos gerenciá-la e realizar ações como
                    desabilitá-la, ou verificar a quantidade de instalações ou
                    rollbacks que foram realizadas, editar a descrição ou
                    qualquer outra informação que definimos no momento do
                    lançamento. Acessando o CodePush dentro do App Center depois
                    de lançar uma versão teremos a seguinte visão:
                  </p>
                  <div>
                    <img
                      height="250px"
                      alt="..."
                      src={require("assets/img/ControlPanelCodePush.png")}
                    />
                  </div>
                  <br />
                  <p>
                    No canto superior direito pode ser realizada a navegação
                    entre os ambientes de deployment, ao acessá-lo teremos a
                    seguinte visão:
                  </p>
                  <div>
                    <img
                      height="380px"
                      alt="..."
                      src={require("assets/img/VersionManagerCodePush.png")}
                    />
                  </div>
                  <br />
                  <dl>
                    <dt>
                      <h7 class="text-muted">1. Navegação de versões</h7>
                    </dt>
                    <dd>
                      <p>
                        Nos permite navegar entre todas as versões já lançadas.
                      </p>
                    </dd>
                    <dt>
                      <h7 class="text-muted">
                        2. Informações e status da versão
                      </h7>
                    </dt>
                    <dd>
                      <p>
                        Informa a qual versão essa release foi aplicada, se é
                        uma release obrigatória ou não, status e outras
                        informações.
                      </p>
                    </dd>
                    <dt>
                      <h7 class="text-muted">3. Porcentagem de rollout</h7>
                    </dt>
                    <dd>
                      <p>
                        Mostra a porcentagem de lançamento do app, podemos
                        liberar um release de forma gradativa, assim somente uma
                        certa quantidade de usuários receberá a atualização,
                        essa porcentagem pode ser aumentada mas nunca diminuída.
                      </p>
                    </dd>
                    <dt>
                      <h7 class="text-muted">
                        4. Quantidade de instalações X Usuários
                      </h7>
                    </dt>
                    <dd>
                      <p>
                        Mostra a quantidade de usuários e quantidade desses
                        usuários que estão rodando com a nova atualização.
                      </p>
                    </dd>
                    <dt>
                      <h7 class="text-muted">
                        5. Data, usuário e descrição do lançamento
                      </h7>
                    </dt>
                    <dd>
                      <p>
                        Mostra a data em que foi liberada a versão, quem foi o
                        usuário e a descrição da versão.
                      </p>
                    </dd>
                    <dt>
                      <h7 class="text-muted">6. Promoção de versão</h7>
                    </dt>
                    <dd>
                      <p>
                        Nos permite promover uma release de uma ambiente para o
                        outro, então podemos subir uma versão para o QA em QAS e
                        depois que for verificado que está tudo certo podemos
                        promover a mesma versão para PRD, se a versão estiver
                        apontando para QAS é importante que a promoção aconteça
                        após apontar para PRD.
                      </p>
                    </dd>
                    <dt>
                      <h7 class="text-muted">7. Editar a release</h7>
                    </dt>
                    <dd>
                      <p>Nos permite editar os dados da release.</p>
                    </dd>
                  </dl>
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
                  <a className="text-muted" href="#newProjects">
                    Ambientes de deployment e integração do CodePush com o
                    projeto:
                  </a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="O que é o CodePush e porque utilizá-lo"
                        onClick={() => changeAnchorLink("refWhatIsCodePush")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Criando projeto dentro do App Center para utilizar o CodePush"
                        onClick={() =>
                          changeAnchorLink("refCreatingAProjectInAppCenter")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Acessando o CodePush e criando os ambientes de deployment"
                        onClick={() =>
                          changeAnchorLink("refCreatingDeploymentEnvironment")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Integrando ambientes de deployment com os ambientes do app"
                        onClick={() =>
                          changeAnchorLink(
                            "refIntegratingEnvironmentsDeployment"
                          )
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Instalando o Code Push dentro do projeto"
                        onClick={() =>
                          changeAnchorLink("refInstallingCodePush")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Configurando CodePush para lidar com as atualizações em tempo real"
                        onClick={() =>
                          changeAnchorLink("refConfiguringCodePush")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Definindo quando será verificado e instalado atualizações do CodePush"
                        onClick={() =>
                          changeAnchorLink("refConfiguringWhenUpdateApp")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Liberando atualizações pelo Code Push"
                        onClick={() =>
                          changeAnchorLink("refReleasingUpdatesByCodePush")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Desfazendo a última release (Rollback)"
                        onClick={() =>
                          changeAnchorLink("refUndoingLastCodePushRelease")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Gerenciando releases do Code Push através do App Center"
                        onClick={() =>
                          changeAnchorLink("refManagingCodePushReleases")
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

export default CodePush;
