import React, { useRef } from "react";
import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

import { CodeExamplesStructure } from "../../variables/codeExamplesStructure";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

//= ==============================================================================================
function EnvironmentDivision() {
  const refWhyEnvironmentDivision = useRef(null);
  const refDoingNativeEnvironmentDivision = useRef(null);
  const refDoingReactNativeEnvironmentDivision = useRef(null);

  useScrollToAnchorByParams({
    refWhyEnvironmentDivision,
    refDoingNativeEnvironmentDivision,
    refDoingReactNativeEnvironmentDivision,
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
                <h5 className="title">Divisão de ambientes</h5>
                <p className="text-muted">
                  A estruturação dos projetos é definida por uma stack de
                  qualidade que aborda vários aspectos
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  <h6 id="newProjectsSettings">
                    A respeito da configuração de novos projetos mobile
                  </h6>
                  <p>
                    Se o projeto foi criado atráves do template essas
                    configurações já foram realizadas e essa parte pode ser
                    pulada, porém é interessante rever essa sessão para entender
                    o porque de cada ferramenta e como elas funcionam para que
                    seja possível solucinar determinadas situações, realizar
                    manutenções e entender como e porque o projeto se commporta
                    como ele se comporta e absorver o máximo dessas
                    configurações para facilitar o desenvolvimento.
                  </p>

                  <br />

                  <hr />
                  <h7
                    ref={refWhyEnvironmentDivision}
                    id="whyDivideEnvironments"
                    class="font-weight-bold"
                  >
                    O porque e para que ter uma divisão de ambientes
                  </h7>
                  <p>
                    A divisão de ambientes em DEV/QAS/PRD não acontece somente
                    em relação ao servidor mas também em relação aos apps a
                    nível de código nativo e código voltado ao react-native
                    puramente.
                  </p>
                  <ol>
                    <li>
                      <h7 class="text-muted">
                        A divisão de ambientes define váriaveis de ambientes
                        para cada ambiente criando a possibilidade de usar
                        configurações de forma customizadas para cada ambiente.
                      </h7>
                    </li>
                    <li>
                      {" "}
                      <h7 class="text-muted">
                        Dificulta a possibilidade de subir .aab's para a Play
                        Store por exemplo apontando para o ambiente errado, DEV
                        ou QAS ao invés de PRD.
                      </h7>
                    </li>
                    <li>
                      <h7 class="text-muted">
                        Permite já executar o projeto no ambiente desejado.
                      </h7>
                    </li>
                    <li>
                      <h7 class="text-muted">
                        Permite ter uma aab/apk de cada ambiente no mesmo
                        dispostiivo sem a necessidade de desinstalar nenhuma apk
                        de um ambiente para instalar a outra.
                      </h7>
                    </li>
                  </ol>

                  <br />

                  <hr />

                  <h7
                    ref={refDoingNativeEnvironmentDivision}
                    id="divideEnvironmentsNative"
                    class="font-weight-bold"
                  >
                    Realizando a configuração de divisão de ambientes na parte
                    nativa - Android
                  </h7>
                  <p>
                    Dentro da pasta <h7 class="text-muted">android/src/</h7>{" "}
                    será encontrado duas pastas <h7 class="text-muted">main</h7>{" "}
                    e <h7 class="text-muted">debug.</h7> Criaremos mais três
                    pastas sendo elas,{" "}
                    <h7 class="text-muted">dev, qas e prd.</h7> A estutura de
                    pasta deve ficar assim:
                  </p>
                  <div className="image">
                    <img
                      alt="..."
                      src={require("assets/img/EnvironmentSpliting.png")}
                    />
                  </div>
                  <br />
                  <p>
                    O conteúdo destas pasta pode ser o mesmo da pasta{" "}
                    <h7 class="text-muted">debug</h7>, com a pasta res
                    encontrado dentro da pasta <h7 class="text-muted">main</h7>{" "}
                    porém com alguns detalhes a parte, dentro do AndroidManifest
                    a tag manifest deve conter a propriedade package que deve
                    ser igual ao bundleId do projeto que pode ser encontrado
                    dentro da pasta <h7 class="text-muted">main</h7> na tag
                    manifest na propriedade <h7 class="text-muted">package</h7>.
                    O código deve ficar semelhante a isto:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesStructure.androidManifestExample}
                    />
                  </pre>
                  <p>
                    Sobre o contéudo da pasta <h7 class="text-muted">res</h7>{" "}
                    deve ser os mesmo que existe dentro da pasta{" "}
                    <h7 class="text-muted">main/res</h7>, os detalhes que devem
                    ser observados são os seguintes:
                  </p>
                  <ol>
                    <li>
                      {" "}
                      <h7 class="text-muted">
                        As pastas iniciadas com{" "}
                        <h7 class="text-muted">mimmap</h7> são as pastas
                        responsáveis por armazenar os ícones do aplicativo,
                        sejam eles de notificação ou do próprio aplicativo
                        quando instalado no celular. Caso necessário pode se
                        definir ícones diferentes para cada ambiente, se não for
                        necessário essas pastas podem se manter iguais estão na
                        pasta main/res.
                      </h7>
                    </li>
                    <li>
                      <h7 class="text-muted">
                        Em relação a pasta <h7 class="text-muted">values</h7>,
                        ela é responsável por conter strings e estilos de acesso
                        global. No arquivo styles.xml não é necessário nenhuma
                        alteração, a não ser que queira definir um determinado
                        estilo para cada ambiente, já em relação ao arquivo
                        strings.xml, devemos colocar o nome do app com o sufixo
                        igual ao nome do ambiente para cada um dos ambientes,
                        devemos também configurar a chave do CodePush para cada
                        ambiente, haverá uma sessão do CodePush mais adiante.
                      </h7>
                    </li>
                  </ol>
                  <p>
                    O código do arquivo values deve ficar semelhante a isto:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesStructure.valuesXmlExample}
                    />
                  </pre>
                  <p>
                    A visão final das pastas deve ser assim para os três
                    ambientes:
                  </p>
                  <div>
                    <img
                      alt="..."
                      src={require("assets/img/finalVisionFolders.png")}
                    />
                  </div>
                  <br />
                  <p>
                    Agora temos que partir para as configurações do gradle que
                    vai ser responsável por gerenciar tudo para gente de forma
                    atutomática de acordo com o que dissermos para ele. Temos
                    dois arquivos build.gradle, essa configuração inicialmente
                    acontecerá no que está localizado no caminho{" "}
                    <h7 class="text-muted">android/app</h7> e logo após
                    partiremos para o outro.
                  </p>
                  <p>
                    Encontre dentro do arquivo uma propriedade chamada{" "}
                    <h7 class="text-muted">project.ext.react</h7>, de forma
                    inicial ela estará parecida com isto:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesStructure.projectExtReactBefore}
                    />
                  </pre>
                  <p>Nós a mudaremos para que se pareça assim:</p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesStructure.projectExtReactAfter}
                    />
                  </pre>
                  <p>
                    Agora daremos atenção a propriedade android e suas sub
                    propriedades, dentro da propriedade
                    <h7 class="text-muted">defaultConfig</h7> encontraremos algo
                    assim:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesStructure.defaultConfigBefore}
                    />
                  </pre>
                  <p>Editaremos para ficar semelhante a isto:</p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesStructure.defaultConfigAfter}
                    />
                  </pre>
                  <p>
                    O próximo passo é configurarmos a parte de signing de cada
                    ambiente que define qual chave será usada para cada, iremos
                    criar uma propriedade para cada ambiente que temos, esses
                    ambientes receberão as mesmas configurações da propriedade
                    debug. A propriedade que precisamos mudar é a{" "}
                    <h7 class="text-muted">signingConfig</h7>, de forma inicial
                    ela estará desta forma:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesStructure.signingConfigBefore}
                    />
                  </pre>
                  <p>Editaremos para ficar semelhante a isto:</p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesStructure.signingConfigAfter}
                    />
                  </pre>
                  <p>
                    Em seguida precisamos definir os tipos de build que teremos
                    para o nosso app, este passo que nos permitirá ter mais de
                    uma aab/apk de ambientes diferentes instalada no nosso
                    dispositivo sem que seja necessário desinstalar a aab/apk
                    para instalar outra. Definiremos agora as
                    <h7 class="text-muted">buildTypes</h7>, ou também conhecidas
                    como variants. De forma inicial teremos algo semelhante a
                    isso:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesStructure.buildTypesBefore}
                    />
                  </pre>
                  <p>Editaremos para ficar semelhante a isto:</p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesStructure.buildTypesAfter}
                    />
                  </pre>
                  <br />

                  <hr />

                  <h7
                    ref={refDoingReactNativeEnvironmentDivision}
                    id="divideEnvironmentsReactNative"
                    class="font-weight-bold"
                  >
                    Realizando a configuração de divisão de ambientes na parte
                    do react-native - Android
                  </h7>
                  <p>
                    Agora partiremos para o código no lado do react-native,
                    começaremos com a criação da pasta{" "}
                    <h7 class="text-muted">config</h7> responsável pela
                    definição das variáveis de cada ambiente, como nome do
                    ambiente, para qual porta deve apontar quando realizada
                    alguma requisição, etc. A estrutura da pasta deve ser algo
                    semelhante a isto:
                  </p>
                  <div>
                    <img
                      height="250"
                      width="300"
                      alt="..."
                      src={require("assets/img/environmentsReactNative.png")}
                    />
                  </div>
                  <br />
                  <p>
                    O conteúdo do arquivo index na pasta{" "}
                    <h7 class="text-muted">config/</h7> deverá ser igual a isto:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesStructure.configFileContent}
                    />
                  </pre>
                  <p>
                    Em relação ao conteúdo do arquivo index na pasta{" "}
                    <h7 class="text-muted">config/env/</h7> deverá ser assim:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesStructure.envFileContent}
                    />
                  </pre>
                  <p>
                    Já nas pastas <h7 class="text-muted">dev/qas/prd</h7>{" "}
                    teremos um objeto preenchido de forma diferente pra cada um
                    dos ambientes definindo configurações específicas para cada
                    um, um exemplo seria:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesStructure.devFileExample}
                    />
                  </pre>
                  <p>
                    Na próxima parte o recomendado é simplesmente copiar a pasta{" "}
                    <h7 class="text-muted">scripts</h7> presentes na raiz de
                    projetos existentes, ou do próprio respositório do nosso
                    template oficial, não vou abordar todos os scripts, mas é
                    importante enterdermos os principais e como eles funcionam.
                    Os scripts mais importantes são estes:
                  </p>

                  <dl>
                    <dt>
                      <h7 class="text-muted">1. setEnv.js</h7>
                    </dt>
                    <dd>
                      <p>
                        Respnsável por mudar o conteúdo do arquivo{" "}
                        <h7 class="text-muted">config/env</h7> dentro do projeto
                        definindo de qual arquivo ele deve obter as
                        configurações.
                      </p>
                    </dd>
                    <dt>
                      <h7 class="text-muted">2. validParams.js</h7>
                    </dt>
                    <dd>
                      {" "}
                      <p>Valida quais ambientes são aceitos.</p>
                    </dd>
                    <dt>
                      <h7 class="text-muted">3. writeFile.js</h7>
                    </dt>
                    <dd>
                      <p>
                        Método utilitário que é capaz de sobreescrever o
                        conteúdo de um arquivo.
                      </p>
                    </dd>
                    <dt>
                      <h7 class="text-muted">4. checkIsRunning.js</h7>
                    </dt>
                    <dd>
                      <p>
                        Verifica se o aplicativo já está em execução, é bem útil
                        para tomar decisões, como por exemplo quando executamos
                        o mesmo app para android e iOS ao mesmo tempo e não
                        queremos limpar a build duas vezes, assim ele limparia
                        somente na primeira execução.
                      </p>
                    </dd>
                    <dt>
                      <h7 class="text-muted">
                        <h7 class="text-muted">5. prepareEnvDevelopment.js</h7>
                      </h7>
                    </dt>
                    <dd>
                      {" "}
                      <p>
                        É o script principal que irá executar vários outros,
                        tomando as decisões necessárias para cada situação.
                      </p>
                    </dd>
                  </dl>

                  <p>
                    Agora que já conhecemos os princicipais scripts, podemos
                    partir para o <h7 class="text-muted">package.json</h7> do
                    projeto e criar alguns alias para comandos responsáveis para
                    execução do projeto, dentro de scripts vamos adicionar os
                    seguintes comandos:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesStructure.packageJsonCommands}
                    />
                  </pre>
                  <p>
                    Temos dois comandos sendo executados, o primeiro comando é
                    responsável por preparar o projeto de acordo com o ambiente
                    que passamos como primeiro parâmetro e de considerar o
                    sistema operacional que é o segundo parâmetro. O próximo
                    comando é responsável por executar a aplicação e tem efeito
                    na parte nativa do aplicativo. Definimos qual o sufixo do
                    app e qual buildType queremos executar.
                  </p>
                  <p>
                    Após isso deve ser possível executar a aplicação caso tenha
                    sido feita a configuração de forma correta ou não haja mais
                    nenhuma configuração necessário no projeto. Se quisermos
                    executar em dev podería-mos executar o seguinte comando:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesStructure.runAppExample}
                    />
                  </pre>
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
                  <a className="text-muted" href="#newProjectsSettings">
                    A respeito da configuração de novos projetos mobile:
                  </a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="O porque e para que ter uma divisão de ambientes"
                        onClick={() =>
                          changeAnchorLink("refWhyEnvironmentDivision")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Realizando a configuração de divisão de ambientes na parte nativa - Android"
                        onClick={() =>
                          changeAnchorLink("refDoingNativeEnvironmentDivision")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Realizando a configuração de divisão de ambientes na parte do react-native - Android"
                        onClick={() =>
                          changeAnchorLink(
                            "refDoingReactNativeEnvironmentDivision"
                          )
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

export default EnvironmentDivision;
