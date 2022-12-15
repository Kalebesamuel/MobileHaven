import React, { useRef } from "react";

import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

//= ==============================================================================================
function Windows() {
  const refApplications = useRef(null);
  const refInstantClient = useRef(null);
  const refEnvironmentVariables = useRef(null);
  const refWorkspacePreparation = useRef(null);

  useScrollToAnchorByParams({
    refApplications,
    refInstantClient,
    refEnvironmentVariables,
    refWorkspacePreparation,
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
                <h5 className="title">Workspace Preparation - Windows OS</h5>
                <p className="text-muted">
                  Ações necessárias para configurar o ambiente de trabalho
                  Windows
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  <div class="pl-3">
                    <h6>
                      <a ref={refApplications} id="link1">
                        Sistemas utilizados
                      </a>
                    </h6>

                    <p>Instale os seguintes sistemas na sua máquina</p>
                  </div>

                  <div class="container-fluid">
                    <ul class="list-group">
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          {" "}
                          VsCode - Última Versão{" "}
                        </h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://code.visualstudio.com/"
                          target="_blank"
                        >
                          - Donwload
                        </a>
                      </li>
                      <li class="list-group-item ">
                        <h5 class="list-group-item-heading">
                          {" "}
                          Git - Última Versão{" "}
                        </h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://git-scm.com/downloads"
                          target="_blank"
                        >
                          - Donwload
                        </a>
                      </li>
                      <li class="list-group-item ">
                        <h5 class="list-group-item-heading">
                          {" "}
                          Java - jre1.8.0_211{" "}
                        </h5>
                        <p>Faça login para iniciar o Download</p>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://www.oracle.com/webapps/redirect/signon?nexturl=https://download.oracle.com/otn/java/jdk/8u211-b12/478a62b7d4e34b78b671c754eaaf38ab/jre-8u211-windows-x64.exe"
                          target="_blank"
                        >
                          - Donwload
                        </a>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          {" "}
                          NodeJS - 10.17.0{" "}
                        </h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://nodejs.org/dist/v10.17.0/node-v10.17.0-x64.msi"
                          target="_blank"
                        >
                          - Donwload
                        </a>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          {" "}
                          BuildTools_Full - 14.0.25420.1{" "}
                        </h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="#"
                        >
                          - Donwload
                        </a>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          {" "}
                          Android Studio - Última Versão{" "}
                        </h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://developer.android.com/studio?hl=pt-BR"
                          target="_blank"
                        >
                          - Donwload
                        </a>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          {" "}
                          Emulador - API 28/30{" "}
                        </h5>
                        <h6>Pode ser instalado a partir do Android Studio</h6>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="#"
                        >
                          - Donwload
                        </a>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          {" "}
                          Python - 2.7.15{" "}
                        </h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://www.python.org/ftp/python/2.7.15/python-2.7.15.amd64.msi"
                          target="_blank"
                        >
                          - Donwload
                        </a>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          {" "}
                          DBeaver Community Edition - Última Versão{" "}
                        </h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://dbeaver.io/files/dbeaver-ce-latest-x86_64-setup.exe"
                          target="_blank"
                        >
                          - Donwload
                        </a>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          {" "}
                          Bizagi - Última Versão{" "}
                        </h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://www.bizagi.com/pt/plataforma/modeler"
                          target="_blank"
                        >
                          - Donwload
                        </a>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading"> Yarn - 1.22.5 </h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://github.com/yarnpkg/yarn/releases/download/v1.22.5/yarn-1.22.5.msi"
                          target="_blank"
                        >
                          - Donwload
                        </a>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          {" "}
                          ConEmu - Última Versão{" "}
                        </h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://conemu.github.io/en/Downloads.html"
                          target="_blank"
                        >
                          - Donwload
                        </a>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          {" "}
                          Appium - Última Versão{" "}
                        </h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://github.com/appium/appium-desktop/releases/tag/v1.20.2"
                          target="_blank"
                        >
                          - Donwload
                        </a>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          {" "}
                          IntelliJ IDEA - Última Versão{" "}
                        </h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://www.jetbrains.com/pt-br/idea/download/#section=windows"
                          target="_blank"
                        >
                          - Donwload
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="pl-3">
                    <h6 class="mt-5">
                      <hr />
                      <a ref={refInstantClient} id="link2">
                        InstantClient
                      </a>
                    </h6>

                    <p>1. Baixe o arquivo abaixo:</p>

                    <p>
                      {" "}
                      <a
                        className="text-muted"
                        href="https://drive.google.com/file/d/1Gj1yGoHwoa60kqZtL7tfsubXfNWglZjX/view?usp=sharing"
                        target="_blank"
                      >
                        - Donwload
                      </a>
                    </p>

                    <p>2. Extraia seu conteúdo para C:\</p>

                    <h6 class="mt-5">
                      <hr />
                      <a ref={refEnvironmentVariables} id="link3">
                        Configuração das variáveis de ambiente
                      </a>
                    </h6>

                    <p class="text-muted">
                      Adicione estas variáveis as "Váriaveis do Sistema"
                    </p>
                  </div>

                  <div class="container-fluid">
                    <ul class="list-group">
                      <li class="list-group-item">
                        <p class="list-group-item-text">
                          {" "}
                          <b>
                            <b>Nome: </b>
                          </b>
                          JAVA_HOME{" "}
                        </p>
                        <p class="list-group-item-text">
                          {" "}
                          <b>
                            <b>Valor: </b>
                          </b>
                          C:\Program Files\Java\jre1.8.0_211{" "}
                        </p>
                      </li>
                      <li class="list-group-item">
                        <p class="list-group-item-text">
                          {" "}
                          <b>Nome: </b>ANDROID_HOME{" "}
                        </p>
                        <p class="list-group-item-text">
                          {" "}
                          <b>Valor: </b>
                          C:\Users\user.name\AppData\Local\Android\Sdk{" "}
                        </p>
                      </li>
                      <li class="list-group-item">
                        <p class="list-group-item-text">
                          {" "}
                          <b>Nome: </b>OCI_INC_DIR{" "}
                        </p>
                        <p class="list-group-item-text">
                          {" "}
                          <b>Valor: </b>C:\instantclient\sdk\include{" "}
                        </p>
                      </li>
                      <li class="list-group-item">
                        <p class="list-group-item-text">
                          {" "}
                          <b>Nome: </b>OCI_LIB_DIR{" "}
                        </p>
                        <p class="list-group-item-text">
                          {" "}
                          <b>Valor: </b>C:\instantclient\sdk\lib\msvc{" "}
                        </p>
                      </li>
                      <li class="list-group-item">
                        <p class="list-group-item-text">
                          {" "}
                          <b>Nome: </b>TNS_ADMIN{" "}
                        </p>
                        <p class="list-group-item-text">
                          {" "}
                          <b>Valor: </b>C:\instantclient{" "}
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div class="pl-3 mt-4">
                    <p class="text-muted">
                      Adicione estes caminhos a variável PATH
                    </p>
                  </div>

                  <div class="container-fluid">
                    <ul class="list-group">
                      <li class="list-group-item">
                        <p class="list-group-item-text">
                          {" "}
                          <b>
                            <b>Valor: </b>
                          </b>
                          C:\instantclient;C:\oracle\product\10.2.0\client_1\bin{" "}
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div class="pl-3">
                    <h6 class="mt-5 pb-2">
                      <hr />
                      <a ref={refWorkspacePreparation} id="link4">
                        Preparação do Ambiente de Trabalho
                      </a>
                    </h6>

                    <p class="text-muted">
                      1. Certifique se você tem acesso aos repositórios no
                      Bitbucket
                    </p>
                    <p class="text-muted">
                      2. Crie uma pasta dentro de \Documents\
                    </p>
                    <p class="text-muted">
                      3. Abra o ConEmu dentro desta pasta
                    </p>
                    <p class="text-muted">4. Clone os seguintes repositórios</p>
                  </div>

                  <div class="container-fluid">
                    <ul class="list-group">
                      <li class="list-group-item">
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://bitbucket.org/bravolinos/app_motorista/src/master/"
                        >
                          Evolog Motorista
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://bitbucket.org/bravolinos/evolog-driver/src/master/"
                        >
                          Evolog Motorista Lite
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://bitbucket.org/bravolinos/app-checklist/src/master/"
                        >
                          Evolog Checklist
                        </a>
                      </li>

                      <li class="list-group-item">
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://bitbucket.org/bravolinos/app-comercial/src/master/"
                        >
                          Evolog Comercial
                        </a>
                      </li>

                      <li class="list-group-item">
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://bitbucket.org/bravolinos/app_checkin/src/master"
                        >
                          Evolog Checkin
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://bitbucket.org/bravolinos/app_canhoto/src/master/"
                        >
                          Evolog Canhoto
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://bitbucket.org/bravolinos/app_eva/src/master"
                        >
                          Evolog Eva
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://bitbucket.org/bravolinos/app_flg/src/master/"
                        >
                          Evolog FLG
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://bitbucket.org/bravolinos/app_horacerta/src/master/"
                        >
                          Evolog Hora Certa
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://bitbucket.org/bravolinos/app_solto/src/master/"
                        >
                          Evolog 4PL
                        </a>
                      </li>

                      <li class="list-group-item">
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://bitbucket.org/bravolinos/app-server/src/master/"
                        >
                          App Server
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="pl-3 mt-4">
                    <p class="text-muted">
                      5. Após clonar os projetos, abra o conEmu dentro de cada
                      pasta, e execute o seguinte comando:
                    </p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={`npm install`}
                      />
                    </pre>
                  </div>

                  <div class="pl-3 mt-4">
                    <p class="text-muted">
                      6. Execute os comandos abaixo, estes comandos podem ser
                      executados em qualquer pasta, pois serão executados em
                      modo global
                    </p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={
                          "npm i -g react-native-cli \nnpm i -g nodemon"
                        }
                      />
                    </pre>
                  </div>
                  <div class="pl-3 mt-4">
                    <p class="text-muted">
                      7. Após os comandos acima executados. Abre o terminal do
                      app-server(raíz do projeto) e roda o comando abaixo para
                      startar o servidor:
                    </p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={"npm start"}
                      />
                    </pre>
                  </div>
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col
            md="3"
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
                  <a className="text-muted">Workspace Preparation:</a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="Sistemas utilizados"
                        onClick={() => changeAnchorLink("refApplications")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Instant Client"
                        onClick={() => changeAnchorLink("refInstantClient")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Configuração das variáveis de ambiente"
                        onClick={() =>
                          changeAnchorLink("refEnvironmentVariables")
                        }
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Preparação do Ambiente de Trabalho"
                        onClick={() =>
                          changeAnchorLink("refWorkspacePreparation")
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

export default Windows;
