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

//= ==============================================================================================
const StateManagement = () => {
  const refWhyUseReactQuery =  useRef(null);
  const refWhyUseZustand =  useRef(null);
  const refBenefits =  useRef(null);
  const refWarnPoints =  useRef(null);
  const refPracticalUsage =  useRef(null);
  const refReactQuery =  useRef(null);
  const refReactQueryBasicUsage =  useRef(null);
  const refZustand =  useRef(null);

  useScrollToAnchorByParams({
    refWhyUseReactQuery,
    refWhyUseZustand,
    refBenefits,
    refWarnPoints,
    refPracticalUsage,
    refReactQuery,
    refReactQueryBasicUsage,
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
                      Por que usar React Query para estados do server side?
                    </a>
                  </h6>
                  <h7
                    id="effect"
                    class="text-muted font-weight-bold"
                  >
                    1. Otimização no consumo de dados:
                  </h7>
                  <p>
                    O React Query foi feito para gerenciar estados que vêm do server side. Ele cuida do cache, refetch em segundo plano e invalidação de queries automaticamente, economizando esforço no código.
                  </p>
                  <h7
                    id="effect"
                    class="text-muted font-weight-bold"
                  >
                    2. Gestão de dados assíncronos:
                  </h7>
                  <p>
                    É excelente para lidar com estados assíncronos, como carregamento ou erros. Isso garante que a interface esteja sempre atualizada e fluida.
                  </p>
                  <h7
                    id="effect"
                    class="text-muted font-weight-bold"
                  >
                    3. Integração fácil:
                  </h7>
                  <p>
                    Funciona perfeitamente com o Expo e integra-se bem a bibliotecas como Axios ou Fetch API.
                  </p>

                  <br/>

                  <h6>
                    <a id="whyUseZustand" ref={refWhyUseZustand}>
                      Por que usar Zustand para estados do client side?
                    </a>
                  </h6>
                  <h7
                    class="text-muted font-weight-bold"
                  >
                    1. Simplicidade:
                  </h7>
                  <p>
                    O Zustand é leve, simples e não exige configurações complicadas. É ideal para estados locais, como (form data, UI state, toggles, ...).
                  </p>
                  <h7
                    class="text-muted font-weight-bold"
                  >
                    2. Performance:
                  </h7>
                  <p>
                    Ele evita renders desnecessários, isolando cada pedaço do state focando apenas nas partes que realmente precisam ser atualizadas.
                  </p>
                  <h7
                    class="text-muted font-weight-bold"
                  >
                    3. Casos de uso claros:
                  </h7>
                  <p>
                    É perfeito para estados transitórios, como preferências de usuário, alternância de temas ou exibição de modais.
                  </p>
                  <br/>

                  <h6>
                    <a id="benefits" ref={refBenefits}>
                      Benefícios de usar os dois juntos
                    </a>
                  </h6>
                  <h7
                    class="text-muted font-weight-bold"
                  >
                    1. Separação clara de responsabilidades:
                  </h7>
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
                  <h7
                    class="text-muted font-weight-bold"
                  >
                    2. Flexibilidade:
                  </h7>
                  <p>
                    Cada biblioteca pode ser escalada de forma independente conforme o app cresce.
                  </p>
                  <h7
                    class="text-muted font-weight-bold"
                  >
                    3. Melhor desempenho:
                  </h7>
                  <p>
                    O cache do React Query reduz chamadas desnecessárias ao servidor, enquanto o Zustand otimiza o gerenciamento de estados locais, evitando renders desnecessários.
                  </p>
                  <br/>

                  <h6>
                    <a id="warningPoints" ref={refWarnPoints}>
                      Pontos de atenção
                    </a>
                  </h6>
                  <h7
                    class="text-muted font-weight-bold"
                  >
                    1. Curva de aprendizado:
                  </h7>
                  <p>
                    É importante entender bem os papéis de cada biblioteca para evitar uso incorreto. Misturar responsabilidades (como duplicar estados entre elas) pode trazer problemas.
                  </p>
                  <h7
                    class="text-muted font-weight-bold"
                  >
                    2. Evitar duplicação de estados:
                  </h7>
                  <p>
                    Não armazene no Zustand informações que já estão sendo gerenciadas pelo React Query. Aproveite os recursos de cache e sincronização do React Query.
                  </p>
                  <h7
                    class="text-muted font-weight-bold"
                  >
                    3. Compatibilidade com Expo:
                  </h7>
                  <p>
                    Ambas as bibliotecas funcionam perfeitamente com Expo, então não há motivos para preocupação.
                  </p>                 
                  <br />

                  <h6>
                    <a id="practicalUsage" ref={refPracticalUsage}>
                      Casos de uso práticos
                    </a>
                  </h6>
                  <h7
                    class="text-muted font-weight-bold"
                  >
                    1. React Query:
                  </h7>
                  <p>
                    <ul>
                      <li>
                        Buscar e sincronizar dados do usuário vindos de uma API.
                      </li>
                      <li>
                        Implementar paginação e scroll infinito.
                      </li>
                      <li>
                        Refazer fetch automaticamente quando o app volta ao foco ou reconecta à rede.
                      </li>
                    </ul>
                  </p>

                  <h7
                    class="text-muted font-weight-bold"
                  >
                    2. Zustand:
                  </h7>
                  <p>
                    <ul>
                      <li>
                        Gerenciar estados de interface, como visibilidade de modais ou abas.
                      </li>
                      <li>
                        Manter dados temporários, como um rascunho antes de submeter um formulário.
                      </li>
                      <li>
                        Gerenciar estados globais, como o tema do app (modo claro/escuro).
                      </li>
                    </ul>
                  </p>                         
                  <br />
                  <hr />
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
                  <hr/>

                  <h6>
                    <a id="zustand" ref={refZustand}>
                      Zustand
                    </a>
                  </h6>
                  <h7
                    class="text-muted font-weight-bold"
                  >
                    Configuração básica
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
                  
                  <br/>
                  <p>
                   Gerenciar estado offline-first no Zustand (dados temporários):
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesStateManagement.zustandOffline}
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

const styles = {
  cardHeaderBreadcrumb: {
    fontSize: "1rem",
    fontWeight: "100",
    color: "#888",
  },
  cardHeaderTitle: {
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#444",
  },
  itemContainer: {},
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
  itemSubtitle: {
    fontSize: "1rem",
    color: "#555",
    fontWeight: "bold",
  },
  itemSubtext: {
    fontSize: "0.8rem",
    color: "#888",
  },
};

export default StateManagement;
