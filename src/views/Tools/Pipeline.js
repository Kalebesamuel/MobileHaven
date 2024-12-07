import React, { useRef } from "react";

import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";

import { CodeExamplePipeline } from "../../variables/codeExamplePipeline";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

import ButtonLink from "../../components/Buttons/ButtonLink";

//= ==============================================================================================
function Pipeline() {
  const refWhyPipeline = useRef(null);
  const refCreatingAppPasswords = useRef(null);
  const refCreatingEnvironmentVariables = useRef(null);
  const refEnablingBitbucketPipeline = useRef(null);
  const refCreatingEnvironmentDeployment = useRef(null);
  const refConfiguringPipelineActions = useRef(null);
  const refPipelineInAction = useRef(null);

  useScrollToAnchorByParams({
    refWhyPipeline,
    refCreatingAppPasswords,
    refCreatingEnvironmentVariables,
    refEnablingBitbucketPipeline,
    refCreatingEnvironmentDeployment,
    refConfiguringPipelineActions,
    refPipelineInAction,
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
                <h5 className="title">Configurando Pipelines</h5>
                <p className="text-muted">
                  A estruturação dos projetos é definida por uma stack de
                  qualidade que aborda vários aspectos.
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  <h6>
                    <a id="pipelines">
                      A respeito do fluxo de CI/CD utilizando Bitbucket
                      Pipelines
                    </a>
                  </h6>
                  <h7
                    ref={refWhyPipeline}
                    id="whyPipelines"
                    class="font-weight-bold"
                  >
                    O que é e porque utilizar pipelines
                  </h7>
                  <p>
                    Pipelines são ações dinâmicas e com alto poder de
                    configuração que são ativadas sempre que é realizado um
                    merge nas branchs que definirmos em nosso arquivo de
                    configurações, geralmente os gerenciadores de repositórios
                    como o Bitbucket já contam com essa feature nativamente,
                    sendo possível utilizá-la ou integrar o repositório com
                    outra ferramenta de CI/CD. Pipelines trazem benéficios como:
                  </p>

                  <ul>
                    <li>
                      Definir ações amplamente customizáveis que são disparadas
                      ao realizar merge nas branchs que definirmos.
                    </li>
                    <li>
                      Conseguimos utilizá-la em basicamente qualquer projeto já
                      que conseguimos utilizar diversar imagens das mais
                      variadas configurações.
                    </li>
                    <li>
                      Automação de processos de CI/CD, como testes, análise de
                      código, geração de apks e deploy para web stores.
                    </li>
                  </ul>

                  <br />
                  <hr />

                  <h7
                    ref={refCreatingAppPasswords}
                    id="creatingAppPasswords"
                    class="font-weight-bold"
                  >
                    Criando app passwords
                  </h7>

                  <p>
                    Agora vamos configurar e ativar a pipeline no Bitbucket, no
                    primeiro passo precisamos um criar um{" "}
                    <h7 class="text-muted">App password</h7> que será necessário
                    depois, para criar o app password, acesse este link:
                  </p>

                  <a
                    target="_blank"
                    className="text-muted"
                    href="https://bitbucket.org/account/settings/app-passwords/"
                  >
                    - Creating app passwords
                  </a>

                  <br />
                  <br />
                  <p>
                    Clique em <h7 class="text-muted">Create app password</h7>:
                  </p>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/createAppPassword.png")}
                    />
                  </div>

                  <br />

                  <p>
                    Agora precisamos selecionar todas as permissões que queremos
                    que a app password conceda acesso, no nosso caso iremos
                    selecionar tudo:
                  </p>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/createAppPasswordPermissions.png")}
                    />
                  </div>

                  <br />

                  <p>
                    Após isso clique em <h7 class="text-muted">Create</h7> e
                    pronto, teremos nossa app password criada, copie e guarde
                    ela em um local seguro pois não será possível vê-la
                    novamente.
                  </p>

                  <br />
                  <hr />

                  <h7
                    ref={refCreatingEnvironmentVariables}
                    id="creatingEnvironmentVariables"
                    class="font-weight-bold"
                  >
                    Criando variáveis de ambiente
                  </h7>

                  <p>
                    Agora vá até o repositório em que deseja configurar a
                    pipeline e clique na opção{" "}
                    <h7 class="text-muted">Respository Settings</h7> encontrada
                    na Sidebar, porém para poder visualizar essa configuração é
                    necessário ter acesso administrado ao repositório:
                  </p>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/repositorySettings.png")}
                    />
                  </div>
                  <br />

                  <p>
                    Na Sidebar, vá a sessão{" "}
                    <h7 class="text-muted"> Pipelines</h7> e clique na opção{" "}
                    <h7 class="text-muted"> Repository variables</h7>:
                  </p>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/creatingEnvironmentVariables.png")}
                    />
                  </div>

                  <br />

                  <p>
                    É necessário que seja criado duas variáveis de ambiente,
                    chamadas <h7 class="text-muted">BITBUCKET_APP_PASSWORD</h7>{" "}
                    e <h7 class="text-muted">BITBUCKET_USERNAME</h7>, onde seus
                    valores serão a app password que geramos no passo anterior e
                    o nome do usuário, no caso da variável que conterá a App
                    Password, devemos marcá-la como{" "}
                    <h7 class="text-muted">secured</h7>, que significa que não
                    será possível visualizar o seu conteúdo nunca mais, apenas a
                    acessaremos atráves de seu nome. Feito isso podemos seguir
                    para os próximos passos.
                  </p>

                  <br />
                  <hr />

                  <h7
                    ref={refEnablingBitbucketPipeline}
                    id="enablingPipeline"
                    class="font-weight-bold"
                  >
                    Habilitando a bitbucket pipeline
                  </h7>

                  <p>
                    Agora vamos ainda dentro de Repository Settings na sessão
                    Pipelines acessar a opção{" "}
                    <h7 class="text-muted">Settings</h7> e habilitar a pipeline:
                  </p>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/enablingPipeline.png")}
                    />
                  </div>

                  <br />
                  <br />
                  <hr />

                  <h7
                    ref={refCreatingEnvironmentDeployment}
                    id="creatingDeploymentEnvironments"
                    class="font-weight-bold"
                  >
                    Criando ambientes de deployment
                  </h7>

                  <p>
                    Precisamos agora criar nossos ambientes de deployment para
                    que nossa próxima configuração funcione corretamente, para
                    criar ambientes de deployment vá em Repository Settings na
                    sessão Pipelines e acesse a opção{" "}
                    <h7 class="text-muted">Deployments</h7>. Delete os ambientes
                    padrões e crie dois ambientes de deployment, qas e prd, qas
                    ficará como ambiente de staging e prd ficará como ambiente
                    de produção. Teremos uma visão final assim:
                  </p>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/creatingDeployments.png")}
                    />
                  </div>

                  <br />
                  <br />
                  <hr />

                  <h7
                    ref={refConfiguringPipelineActions}
                    id="configuringPipelineActions"
                    class="font-weight-bold"
                  >
                    Configurando as ações da pipeline
                  </h7>

                  <p>
                    Para configurar as ações da nossa pipeline precisamos criar
                    na raiz do nosso projeto um arquivo chamado{" "}
                    <h7 class="text-muted">bitbucket-pipeline.yml</h7>. Nosso
                    arquivo instalará as dependências que precisamos, definirá o
                    ambiente de acordo com a branch que estiver, ou seja, se
                    estivermos em qas será gerada uma apk apontando para qas se
                    estivermos em master será gerada uma apk apontando para prd,
                    no final será feito o upload desta apk para a área de
                    downloads do Bibucket onde pode ser baixada e enviada ao
                    QA/Key User. Este é só o fluxo atual pra qual a pipeline é
                    utilizada automatizando a geração de apk e reduzindo o uso
                    de recursos da máquina, podemos fazer muito mais com
                    pipelines. Dentro do arquivo que criamos, coloque o seguinte
                    conteúdo:{" "}
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplePipeline.bitbucketYml}
                    />
                  </pre>

                  <br />
                  <hr />

                  <h7
                    ref={refPipelineInAction}
                    id="pipelineAction"
                    class="font-weight-bold"
                  >
                    Pipeline em ação
                  </h7>

                  <p>
                    Para que a pipeline seja disparada seguinda a configuração
                    que criamos, apenas precisamos dar push do nosso código para
                    qas ou master, ou para qualquer outra branch e concluir um
                    merge para alguma dessas branchs, feito isso conseguiremos
                    visualizar clicando em Pipelines na sidebar do repositório
                    as nossas pipelines executando/executadas:
                  </p>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/pipelineRunned.png")}
                    />
                  </div>
                  <br />

                  <p>
                    Ao clicarmos em qualquer pipeline conseguiremos ver os
                    passos executados/executando:
                  </p>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/pipelineRunning.png")}
                    />
                  </div>
                  <br />

                  <p>
                    Depois da pipeline ser executada, se houver sucesso
                    conseguiremos visualizar a apk que foi gerada na sessão{" "}
                    <h7 class="text-muted">Downloads</h7> acessada pela sidebar
                    do repositório:
                  </p>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/apkDownloads.png")}
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
                  <a className="text-muted" href="#pipelines">
                    A respeito do fluxo de CI/CD utilizando Bitbucket Pipelines:
                  </a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="O que é e porque utilizar pipelines"
                        onClick={() => changeAnchorLink("refWhyPipeline")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Criando app passwords"
                        onClick={() =>
                          changeAnchorLink("refCreatingAppPasswords")
                        }
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Criando variáveis de ambiente"
                        onClick={() =>
                          changeAnchorLink("refCreatingEnvironmentVariables")
                        }
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Habilitando a bitbucket pipeline"
                        onClick={() =>
                          changeAnchorLink("refEnablingBitbucketPipeline")
                        }
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Criando ambientes de deployment"
                        onClick={() =>
                          changeAnchorLink("refCreatingEnvironmentDeployment")
                        }
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Configurando as ações da pipeline"
                        onClick={() =>
                          changeAnchorLink("refConfiguringPipelineActions")
                        }
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Pipeline em ação"
                        onClick={() => changeAnchorLink("refPipelineInAction")}
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

export default Pipeline;
