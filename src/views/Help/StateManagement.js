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

import { CodeExamplesStateManagement } from "../../variables/codeExampleStateManagement";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";
import HighlighterText from "components/Highlighters/HighlighterText";

//= ==============================================================================================
const StateManagement = () => {
  const refInstallDeps = useRef(null);
  const refWhyUseReactQuery =  useRef(null);
  const refWhyUseZustand =  useRef(null);
  const refBenefits =  useRef(null);
  const refWarnPoints =  useRef(null);
  const refPracticalUsage =  useRef(null);
  const refReactQuery =  useRef(null);
  const refReactQueryBasicUsage =  useRef(null);
  const refReactQueryCacheProperties =  useRef(null);
  const refZustand =  useRef(null);

  useScrollToAnchorByParams({
    refInstallDeps,
    refWhyUseReactQuery,
    refWhyUseZustand,
    refBenefits,
    refWarnPoints,
    refPracticalUsage,
    refReactQuery,
    refReactQueryBasicUsage,
    refReactQueryCacheProperties,
    refZustand
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
                <h5 className="title">State Managament | React Query | Zustand</h5>

                <p className="text-muted">
                  Utilizar React Query para gerenciar estados do server side e Zustand para estados do lado do client side (com Expo) é uma abordagem prática e bem estruturada.
                </p>
              </CardHeader>

              <CardBody>
                <div id="react-redux">
                  <h6>
                    <a id="whyUseReactQuery" ref={refWhyUseReactQuery}>
                      Por que usar React Query para gerenciar estados do server side?
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
                            Otimização no consumo de dados
                          </h7>
                        </td>
                        <td>
                          O React Query foi feito para gerenciar estados que vêm do server side. Ele cuida do cache, refetch em segundo plano e invalidação de queries automaticamente, economizando esforço no código.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7
                            id="effect"
                            class="text-muted font-weight-bold"
                          >
                            Gestão de dados assíncronos
                          </h7>
                        </td>
                        <td>
                          É excelente para lidar com estados assíncronos, como carregamento ou erros. Isso garante que a interface esteja sempre atualizada e fluida.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7
                            id="effect"
                            class="text-muted font-weight-bold"
                          >
                            Integração fácil
                          </h7>
                        </td>
                        <td>
                        Funciona perfeitamente com o Expo e integra-se bem a bibliotecas como Axios ou Fetch API.
                        </td>
                      </tr>                      
                    </tbody>
                  </Table>                                    
                  <br/>

                  <h6>
                    <a id="whyUseZustand" ref={refWhyUseZustand}>
                      Por que usar Zustand para estados do client side?
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
                            Simplicidade
                          </h7>
                        </td>
                        <td>
                          O Zustand é leve, simples e não exige configurações complicadas. É ideal para estados locais, como (form data, UI state, toggles, ...).
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7
                            id="effect"
                            class="text-muted font-weight-bold"
                          >
                            Performance
                          </h7>
                        </td>
                        <td>
                          Ele evita renders desnecessários, isolando cada pedaço do state focando apenas nas partes que realmente precisam ser atualizadas.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7
                            id="effect"
                            class="text-muted font-weight-bold"
                          >
                            Casos de uso claros
                          </h7>
                        </td>
                        <td>
                          É perfeito para estados transitórios, como preferências de usuário, alternância de temas ou exibição de modais.
                        </td>
                      </tr>                      
                    </tbody>
                  </Table>
                                    
                  <br/>                  

                  <h6>
                    <a id="benefits" ref={refBenefits}>
                      Benefícios de usar os dois juntos
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
                            Separação clara de responsabilidades
                          </h7>
                        </td>
                        <td>
                          <p>
                            <ul>
                              <li>
                                O React Query gerencia os estados vindos do server side (ex.: dados de APIs).
                              </li>
                              <li>
                                O Zustand cuida de lógicas locais e transitórias.
                                Isso mantém o código mais limpo e organizado.
                              </li>
                            </ul>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7
                            id="effect"
                            class="text-muted font-weight-bold"
                          >
                            Flexibilidade
                          </h7>
                        </td>
                        <td>
                          Cada biblioteca pode ser escalada de forma independente conforme o app cresce.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7
                            id="effect"
                            class="text-muted font-weight-bold"
                          >
                            Melhor desempenho
                          </h7>
                        </td>
                        <td>
                          O cache do React Query reduz chamadas desnecessárias ao servidor, enquanto o Zustand otimiza o gerenciamento de estados locais, evitando renders desnecessários.
                        </td>
                      </tr>                      
                    </tbody>
                  </Table>
                                   
                  <br/>

                  <h6>
                    <a id="warningPoints" ref={refWarnPoints}>
                      Pontos de atenção
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
                            Curva de aprendizado
                          </h7>
                        </td>
                        <td>
                          É importante entender bem os papéis de cada biblioteca para evitar uso incorreto. Misturar responsabilidades (como duplicar estados entre elas) pode trazer problemas.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7
                            id="effect"
                            class="text-muted font-weight-bold"
                          >
                            Evitar duplicação de estados
                          </h7>
                        </td>
                        <td>
                          Não armazene no Zustand informações que já estão sendo gerenciadas pelo React Query. Aproveite os recursos de cache e sincronização do React Query.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7
                            id="effect"
                            class="text-muted font-weight-bold"
                          >
                            Compatibilidade com Expo
                          </h7>
                        </td>
                        <td>
                          Ambas as bibliotecas funcionam perfeitamente com Expo, então não há motivos para preocupação.
                        </td>
                      </tr>                      
                    </tbody>
                  </Table>   
                  <br/>                                                   

                  <h6>
                    <a id="practicalUsage" ref={refPracticalUsage}>
                      Casos de uso práticos
                    </a>
                  </h6>

                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>React Query</th>
                        <th>Zustand</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>                         
                          Buscar e sincronizar dados do usuário vindos de uma API.                          
                        </td>
                        <td>
                          Gerenciar estados de interface, como visibilidade de modais ou aba
                        </td>
                      </tr>
                      <tr>
                        <td>                          
                          Implementar paginação e scroll infinito.
                        </td>
                        <td>
                          Manter dados temporários, como um rascunho antes de submeter um formulário.
                        </td>
                      </tr>
                      <tr>
                        <td>                          
                          Refazer fetch automaticamente quando o app volta ao foco ou reconecta à rede.
                        </td>
                        <td>
                          Gerenciar estados globais, como o tema do app (modo claro/escuro).
                        </td>
                      </tr>                      
                    </tbody>
                  </Table>   

                  <br />
                  <hr />
                  <h6>
                    <a id="refInstallDeps" ref={refInstallDeps}>
                      Instalando as dependências
                    </a>
                  </h6>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesStateManagement.installLibs}
                  />
                                
                  <br />
                  <h6>
                    <a id="reactQuery" ref={refReactQuery}>
                      React Query
                    </a>
                  </h6>
                  <h7
                    class="text-muted font-weight-bold"
                  >
                    Configuração Inicial
                  </h7>
                  <p>
                    Crie um arquivo <h7 class="text-muted">src/lib/react-query.ts</h7> para configurar o <h7 class="text-muted">QueryClient</h7>:
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesStateManagement.reactQueryConfigStart}
                  />                  
                  <br/>
                  <p>
                    Adicione o <h7 class="text-muted">QueryClientProvider</h7> no <h7 class="text-muted">App.tsx</h7>:
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesStateManagement.addQueryClientProvider}
                  />
                  <br/>
                  <h6>
                    <a id="reactQueryBasicUsage" ref={refReactQueryBasicUsage}>
                      Uso básico com React Query
                    </a>
                  </h6>
                  <h7
                    class="text-muted font-weight-bold"
                  >
                    Buscar dados de uma API (online-only):
                  </h7>                 
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesStateManagement.reactQuerybasicUse}
                  />

                  <br/>
                  <h7
                    class="text-muted font-weight-bold"
                  >
                    Buscar dados de uma API com suporte offline:
                  </h7>  
                  <p>
                    Apenas certifique-se de usar o <h7 class="text-muted">setupReactQuery</h7> mostrado anteriormente. O React Query cuidará de armazenar os dados no <h7 class="text-muted">MMKV</h7>:
                  </p>


                  <br/>
                  <h6>
                    <a id="refReactQueryCacheProperties" ref={refReactQueryCacheProperties}>
                      Propriedades maxAge, cacheTime e staleTime
                    </a>
                  </h6>
                  <h7                    
                    class="text-muted font-weight-bold"
                  >
                    Diferenças Fundamentais
                  </h7>       

                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Propriedade</th>
                        <th>Escopo</th>
                        <th>Validade</th>
                        <th>Quando Usar?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>                         
                          maxAge
                        </td>
                        <td>
                          Persistência (armazenamento)
                        </td>
                        <td>
                          Dados persistidos entre sessões no dispositivo
                        </td>
                        <td>
                          Usar ao configurar persistência de dados no cliente. Deve se tomar muito cuidado ao usar essa propriedade, visto o cenário usando uma tela A e uma tela B, caso a API Call aconteça somente na tela A e o aplicativo devido alguma regra abra na tela B em que não acontece a API Call e os dados em memória já foram descartados devido expiração, ao tentar utilizar os dados será retornado undefined, possivelmente causando erros na aplicação se não tratado corretamente.
                        </td>
                      </tr>
                      <tr>
                        <td>                          
                          cacheTime
                        </td>
                        <td>
                          Cache em memória (temporário)
                        </td>
                        <td>
                          Dados na memória após a query se tornar inativa
                        </td>
                        <td>
                          Usar para definir quando descartar dados inativos. Assim como na propriedade maxAge deve se tomar cuidado ao usar essa propriedade, visto que o mesmo cenário exposto no maxAge também se aplica a essa propriedade.
                        </td>
                      </tr>
                      <tr>
                        <td>                          
                          staleTime
                        </td>
                        <td>
                          Validade de dados (obsoletos ou não)
                        </td>
                        <td>
                          Define quando os dados serão considerados "velhos"
                        </td>
                        <td>
                          Usar para otimizar buscas e evitar refetchs desnecessários
                        </td>
                      </tr>  
                      <tr>
                        <td>                          
                          refetchOnMount
                        </td>
                        <td>
                          -
                        </td>
                        <td>
                          -
                        </td>
                        <td>
                          Ao definir a propriedade refetchOnMount como true, sempre que o usuário entrar na tela a API Call será chamada novamente. Essa propriedade deve ser utilizada somente em casos muito específicos em que a chamada da API deva realmente acontecer toda vez sem considerar qualquer valor do cache.
                        </td>
                      </tr>
                      <tr>
                        <td>                          
                          refetchOnWindowsMount
                        </td>
                        <td>
                          -
                        </td>
                        <td>
                          -
                        </td>
                        <td>
                          Ao definir a propriedade refetchOnWindowsMount como true, sempre que a tela ganhar foco a API será chamada novamente também desprezando as propriedades, staleTime, cacheTime e maxAge.
                        </td>
                      </tr>                         
                    </tbody>
                  </Table>  

                  <h7
                    class="text-muted font-weight-bold"
                  >
                    Exemplos Combinados
                  </h7>    
                  <br/>     

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesStateManagement.reactQueryStoreParams}
                  />
                  <br/>

                  <h7
                    class="text-muted font-weight-bold"
                  >
                    Resultados
                  </h7>
                  <p>
                    <ul>
                      <li>
                        <HighlighterText search="(staleTime)">Os dados não serão refetchados por 5 minutos após serem carregados (staleTime).</HighlighterText>
                      </li>
                      <li>
                        <HighlighterText search="(cacheTime)">Após a query ficar inativa, os dados permanecerão no cache por 10 minutos antes de serem descartados (cacheTime).</HighlighterText>
                      </li>
                      <li>
                        <HighlighterText search="(maxAge)">Os dados persistidos serão descartados após 1 dia (maxAge).</HighlighterText>
                      </li>
                    </ul>
                  </p>    
                  <br/>

                  <hr/>

                  <h6>
                    <a id="zustand" ref={refZustand}>
                      Zustand
                    </a>
                  </h6>
                  <h7
                    class="text-muted font-weight-bold"
                  >
                    Configuração básica sem persistência de dados
                  </h7>
                  <p>
                    Crie um arquivo <h7 class="text-muted">src/store/useStore.ts</h7>:
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesStateManagement.zustandStartConfig}
                  />
                  <br/>

                  <h7
                    class="text-muted font-weight-bold"
                  >
                    Configuração com MMKV para persistir os dados
                  </h7>
                  <p>
                    Pense bem na arquitetura dos <h7 class="text-muted">stores</h7>, não considere somente o que está sendo criado agora mas o que poderá ser criado no futuro, em alguns momentos fará sentido termos vários stores:
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesStateManagement.zustandWithMMKV}
                  />
                  <br/>

                  <h7
                    class="text-muted font-weight-bold"
                  >
                    Uso básico com Zustand
                  </h7>  
                  <p>
                    Gerenciar estado global (modo claro/escuro):
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesStateManagement.zustandBasicUse}
                  />                                  
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
                  <a className="text-muted">State Managament | React Query | Zustand</a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="Instalando as dependências"
                        onClick={() => changeAnchorLink("refInstallDeps")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Por que usar React Query para estados do server side?"
                        onClick={() => changeAnchorLink("refWhyUseReactQuery")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Por que usar Zustand para estados do client side?"
                        onClick={() => changeAnchorLink("refWhyUseZustand")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Benefícios de usar os dois juntos"
                        onClick={() => changeAnchorLink("refBenefits")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Pontos de atenção"
                        onClick={() => changeAnchorLink("refWarnPoints")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Casos de uso práticos"
                        onClick={() => changeAnchorLink("refPracticalUsage")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="React Query"
                        onClick={() => changeAnchorLink("refReactQuery")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Uso básico com React Query"
                        onClick={() => changeAnchorLink("refReactQueryBasicUsage")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Propriedades maxAge, cacheTime e staleTime"
                        onClick={() => changeAnchorLink("refReactQueryCacheProperties")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Zustand"
                        onClick={() => changeAnchorLink("refZustand")}
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

export default StateManagement;
