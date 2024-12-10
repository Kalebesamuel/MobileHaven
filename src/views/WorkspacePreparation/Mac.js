import React, { useRef } from "react";

import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CodeExamples } from "../../variables/codeExamples";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

import ButtonLink from "../../components/Buttons/ButtonLink";

//= ==============================================================================================
const Mac = () => {
  const refApplications = useRef(null);
  const refUtils = useRef(null);
  const refEnvironmentVariables = useRef(null);

  useScrollToAnchorByParams({
    refApplications,
    refUtils,
    refEnvironmentVariables,
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
                <h5 className="title">Workspace Preparation - Mac OS</h5>
                <p className="text-muted">
                  Ações necessárias para configurar o ambiente de trabalho Mac
                </p>
              </CardHeader>

              <CardBody>
                <div id="aplicacoes">
                  <h7 class="font-weight-bold" ref={refApplications}>
                    Sistemas utilizadas
                  </h7>
                  <p style={styles.itemText}>
                    Instale as aplicações a seguir no seu Mac respeitando as
                    versões e certifique-se de que todas elas aparecem na pasta
                    "/Applications". O processo de instalação de pacotes (que
                    não possuem instalador) pede para que se arraste o ícone da
                    aplicação para dentro da pasta applications.
                  </p>
                  <div class="container-fluid">
                    <ul class="list-group">
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          Xcode - Última Versão
                        </h5>
                        <p class="list-group-item-text" className="text-muted">
                          Instalado através da App Store.
                        </p>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          VSCode - Última Versão
                        </h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://code.visualstudio.com/"
                          target="_blank"
                        >
                          - Download
                        </a>
                      </li>
                      <li class="list-group-item ">
                        <h5 class="list-group-item-heading">
                          Java 17
                        </h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://download.oracle.com/java/17/archive/jdk-17.0.12_macos-aarch64_bin.dmg"
                          target="_blank"
                        >
                          - Download
                        </a>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          NodeJS - 10.17.0 (Servidores) e 19.9.0 (Apps)
                        </h5>
                        <p>Use o nvm para realizar a instalação:</p>
                        <SyntaxHighlighter
                          language="js"
                          style={a11yDark}
                          PreTag="div"
                          children={CodeExamples.nvmInstall}
                        />                        
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          Android Studio - Última Versão
                        </h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://developer.android.com/studio?hl=pt-BR"
                          target="_blank"
                        >
                          - Download
                        </a>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">Python - 2.7.15</h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://www.python.org/ftp/python/2.7.15/python-2.7.15-macosx10.9.pkg"
                          target="_blank"
                        >
                          - Download
                        </a>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          DBeaver Community Edition - Última Versão
                        </h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://dbeaver.io/files/dbeaver-ce-latest-x86_64-setup.exe"
                          target="_blank"
                        >
                          - Download
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <hr />

                <div id="utilitarios">
                  <h7 class="font-weight-bold" ref={refUtils}>
                    Utilitários
                  </h7>
                  <p style={styles.itemText}></p>
                  <div class="container-fluid">
                    <ul class="list-group">
                      <li class="list-group-item ">
                        <h5 class="list-group-item-heading">
                          Git - Última Versão
                        </h5>
                        <p class="list-group-item-text" className="text-muted">
                          Em máquinas Mac, o Git já costuma vir instalado e pode
                          ser verificado através do comando:
                          <SyntaxHighlighter
                            language="js"
                            style={a11yDark}
                            PreTag="div"
                            children={CodeExamples.gitVersion}
                          /> 
                          Se por algum motivo não estiver instalado, instale
                          através do link:
                        </p>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://sourceforge.net/projects/git-osx-installer/files/git-2.23.0-intel-universal-mavericks.dmg/download?use_mirror=autoselect"
                          target="_blank"
                        >
                          - Download
                        </a>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">Yarn - 1.22.5</h5>
                        <p class="list-group-item-text" className="text-muted">
                          Com o NodeJS instalado, execute o comando:
                          <SyntaxHighlighter
                            language="js"
                            style={a11yDark}
                            PreTag="div"
                            children={CodeExamples.yarnInstall}
                          /> 
                        </p>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">Homebrew</h5>
                        <p class="list-group-item-text" className="text-muted">
                          Em um terminal, rode o comando:
                          <SyntaxHighlighter
                            language="js"
                            style={a11yDark}
                            PreTag="div"
                            children={CodeExamples.homebrewInstall}
                          /> 
                        </p>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">Ruby & Gem</h5>
                        <p class="list-group-item-text" className="text-muted">
                          Com o Homebrew instalado, rode os comandos em um
                          terminal:
                          <SyntaxHighlighter
                            language="js"
                            style={a11yDark}
                            PreTag="div"
                            children={CodeExamples.rubyGemInstall}
                          /> 
                        </p>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">CocoaPods</h5>
                        <p class="list-group-item-text" className="text-muted">
                          Com o gerenciador de pacotes do Ruby "gem" instalado
                          (testar utilizando "gem --version"), rodar o comando:
                          <SyntaxHighlighter
                            language="js"
                            style={a11yDark}
                            PreTag="div"
                            children={CodeExamples.cocoapodsInstall}
                          /> 
                          Caso ele não funcione, rodar:
                          <SyntaxHighlighter
                            language="js"
                            style={a11yDark}
                            PreTag="div"
                            children={CodeExamples.cocoapodsInstallAlternative}
                          />
                        </p>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          Emulador Android - API 28/30
                        </h5>
                        <h6>Pode ser instalado a partir do Android Studio</h6>
                      </li>
                    </ul>
                  </div>
                </div>

                <hr />

                <div id="variaveis-ambiente">
                  <h7 class="font-weight-bold" ref={refEnvironmentVariables}>
                    Variáveis de ambiente
                  </h7>
                  <p style={styles.itemText}>
                    Acesse o arquivo (~/.zshrc):
                  </p>
                  <SyntaxHighlighter
                    language="bash"
                    style={a11yDark}
                    PreTag="div"
                    children={
                      CodeExamples.WorkspacePreparation.Mac
                        .EnvironmentVariables[0]
                    }
                  />
                  <p style={styles.itemText}>
                    Preencha e salve o arquivo "~/.zshrc" com o seguinte conteúdo:
                  </p>
                  <SyntaxHighlighter
                    language="bash"
                    style={a11yDark}
                    PreTag="div"
                    children={
                      CodeExamples.WorkspacePreparation.Mac
                        .EnvironmentVariables[1]
                    }
                  />
                  <p style={styles.itemText}>
                    E depois atualize suas variáveis de ambiente ativas com o
                    comando:
                  </p>
                  <SyntaxHighlighter
                    language="bash"
                    style={a11yDark}
                    PreTag="div"
                    children={
                      CodeExamples.WorkspacePreparation.Mac
                        .EnvironmentVariables[2]
                    }
                  />
                </div>
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
                        link="Utilitários"
                        onClick={() => changeAnchorLink("refUtils")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Variáveis de Ambiente"
                        onClick={() =>
                          changeAnchorLink("refEnvironmentVariables")
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
};

const styles = {
  itemTitle: {
    fontSize: "1.1rem",
    color: "#444",
    fontWeight: "bold",
    marginBottom: "1rem",
    marginTop: "2rem",
  },
  itemText: {
    fontSize: "0.9rem",
    color: "#777",
  },
};

export default Mac;
