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
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

import { CodeExamplesMMKV } from "../../variables/codeExampleMMKV";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";
import HighlighterText from "components/Highlighters/HighlighterText";

//= ==============================================================================================
const MMKV = () => {
  const refMMKVBenefits = useRef(null);
  const refWhenUse = useRef(null);
  const refInstallation = useRef(null);
  const refBasicConfig = useRef(null);
  const refMMKVOperations = useRef(null);
  const refStoreObjects = useRef(null);
  const refAdvancedUsage = useRef(null);

  useScrollToAnchorByParams({
    refMMKVBenefits,
    refWhenUse,
    refInstallation,
    refBasicConfig,
    refMMKVOperations,
    refStoreObjects,
    refAdvancedUsage
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
                <h5 className="title">MMKV</h5>

                <p className="text-muted">
                  O MMKV é uma biblioteca rápida e eficiente para armazenamento de chave-valor em aplicações React Native, ideal para persistir dados de forma local e rápida. Ele é mantido pelo time do WeChat e amplamente utilizado em aplicações que demandam alta performance.
                </p>
              </CardHeader>

              <CardBody>
                <div id="react-redux">
                <h6>
                    <a id="refMMKVBenefits" ref={refMMKVBenefits}>
                      Benefícios de usar o MMKV
                    </a>
                </h6>
                <Table striped hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h7
                            id="effect"
                            class="text-muted font-weight-bold"
                          >
                            Desempenho Rápido
                          </h7>
                        </td>
                        <td>
                          <p>
                            Baseado em C++, ideal para grandes volumes de leitura/gravação.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7
                            id="effect"
                            class="text-muted font-weight-bold"
                          >
                            Criptografia
                          </h7>
                        </td>
                        <td>
                          Pode proteger dados sensíveis com chaves.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7
                            id="effect"
                            class="text-muted font-weight-bold"
                          >
                            Persistência local confiável
                          </h7>
                        </td>
                        <td>
                          Excelente para armazenamento offline-first.
                        </td>
                      </tr>                                        
                    </tbody>
                </Table>
                                   
                <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/mmkv-storage-benchmark.png")}
                    />
                  </div>
                <br />

                <h6>
                    <a id="refWhenUse" ref={refWhenUse}>
                      Quando usar MMKV?
                    </a>
                </h6>

                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h7
                            id="effect"
                            class="text-muted font-weight-bold"
                          >
                            Integrações
                          </h7>
                        </td>
                        <td>
                          <p>
                            Como banco {"<chave,valor>"} na integração de ferramentas como Zustand e React Query caso seja necessário persistência de dados na criação de um storage.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7
                            id="effect"
                            class="text-muted font-weight-bold"
                          >
                            Fora de Providers ou componentes
                          </h7>
                        </td>
                        <td>
                          Caso seja necessário salvar e acessar alguma informação em que será necessário ser acessada através de hooks fora do escopo de um componente ou acessada fora do Provider do zustand, como por exemplo no App/main.tsx.
                        </td>
                      </tr>                                        
                    </tbody>
                  </Table>                  
                                   
                  <br/> 

                  <h6>
                    <a id="refInstallation" ref={refInstallation}>
                      Instalação
                    </a>
                  </h6>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesMMKV.installLibs}
                  />
                  <br/>
                                    
                  <p>
                    <HighlighterText search="app.json">Se estiver usando Expo, adicione o plugin MMKV no app.json ou app.config.js</HighlighterText>
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesMMKV.mmkvPuglin}
                  />
                  <br/>

                  <p>
                    <HighlighterText search="EAS Build">Caso esteja utilizando Expo Managed Workflow, é necessário usar o EAS Build para compilar o código nativo</HighlighterText>
                  </p>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesMMKV.easBuild}
                  />
                  <br/>

                  <h6>
                    <a id="refBasicConfig" ref={refBasicConfig}>
                      Configuração Básica
                    </a>
                  </h6>
                  <p>
                    Importe o MMKV no arquivo onde deseja utilizá-lo e crie uma instância:
                  </p>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesMMKV.basicConfig}
                  />
                  <br/>

                  <h6>
                    <a id="refMMKVOperations" ref={refMMKVOperations}>
                      Operações com MMKV
                    </a>
                  </h6>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesMMKV.MMKVOperations}
                  />
                  <br/>

                  <h6>
                    <a id="refStoreObjects" ref={refStoreObjects}>
                      Armazenar objetos
                    </a>
                  </h6>
                  <p>
                    <HighlighterText search="JSON.stringify">O MMKV não suporta objetos diretamente, mas você pode usar JSON.stringify e JSON.parse:</HighlighterText>
                  </p>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesMMKV.storeObjects}
                  />
                  <br/>

                  <h6>
                    <a id="refAdvancedUsage" ref={refAdvancedUsage}>
                      Uso Avançado
                    </a>
                  </h6>
                  <h7
                    id="effect"
                    class="text-muted font-weight-bold"
                  >
                    Configuração de múltiplos storages
                  </h7>
                  <p>
                    Você pode criar diferentes instâncias do MMKV para separar dados:
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesMMKV.multipleStorage}
                  />
                  <br/>                 

                  <h7
                    id="effect"
                    class="text-muted font-weight-bold"
                  >
                    
                    Resetar o armazenamento
                  </h7>
                
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesMMKV.resetAll}
                  />
                  <br/>                                                 
                  <br />                                   
                </div>
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
                  <a className="text-muted">MMKV</a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="Benefícios de usar o MMKV"
                        onClick={() => changeAnchorLink("refMMKVBenefits")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Quando usar MMKV?"
                        onClick={() => changeAnchorLink("refWhenUse")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Instalação"
                        onClick={() => changeAnchorLink("refInstallation")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Configuração Básica"
                        onClick={() => changeAnchorLink("refBasicConfig")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Operações com MMKV"
                        onClick={() => changeAnchorLink("refMMKVOperations")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Armazenar objetos"
                        onClick={() => changeAnchorLink("refStoreObjects")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Uso Avançado"
                        onClick={() => changeAnchorLink("refAdvancedUsage")}
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

export default MMKV;
