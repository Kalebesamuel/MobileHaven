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

import { CodeExampleHooks } from "../../variables/codeExampleHooks";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

//= ==============================================================================================
const Hooks = () => {
  const refEffect = useRef(null);
  const refState = useRef(null);
  const refCallback = useRef(null);
  const refRef = useRef(null);
  const refReducer = useRef(null);
  const refContext = useRef(null);

  useScrollToAnchorByParams({
    refEffect,
    refState,
    refCallback,
    refRef,
    refReducer,
    refContext,
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
                <h5 className="title">Hooks</h5>

                <p className="text-muted">
                  Hooks são funções que permitem usar o estado e os métodos do
                  ciclo de vida de um componente de classe em um componente
                  funcional.
                </p>
              </CardHeader>

              <CardBody>
                <div id="react-redux">
                  <h7
                    ref={refEffect}
                    id="effect"
                    class="text-muted font-weight-bold"
                  >
                    useEffect
                  </h7>
                  <p>
                    O useEffect é um Hook que serve para lidar com os efeitos. A
                    função useEffect será executada quando o componente for
                    montado e também quando for atualizado, funcionando da mesma
                    maneira que os métodos componentDidMount e
                    componentDidUpdate.
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExampleHooks.exampleUseEffect}
                  />
                  <br />

                  <h7
                    ref={refState}
                    id="state"
                    class="text-muted font-weight-bold"
                  >
                    useState
                  </h7>
                  <p>
                    O useState nos permite criar estados em um componente criado
                    a partir de uma função, assim como o state presente em
                    componentes criados a partir de classes.
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExampleHooks.exampleUseState}
                  />
                  <br />

                  <h7
                    ref={refCallback}
                    id="callback"
                    class="text-muted font-weight-bold"
                  >
                    useCallback
                  </h7>
                  <p>
                    O useCallback é utilizado para memorizar funções. Por causa
                    da maneira como o javascript compara, a função que você cria
                    na primeira vez que um componente é renderizado será
                    diferente daquela criada nas próximas renderizações. Ao
                    colocar essa função dentro do Hook useCallback, o React
                    saberá que é a mesma função, assim ela não será criada
                    novamente.
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExampleHooks.exampleUseCallback}
                  />
                  <br />

                  <h7 ref={refRef} id="ref" class="text-muted font-weight-bold">
                    useRef
                  </h7>
                  <p>
                    O Hook useRef é uma função que retorna um objeto ref
                    mutável, que é um objeto JavaScript simples, no qual a
                    propriedade .current desse objeto é inicializada com o
                    argumento passado (initialValue). O objeto retornado
                    persistirá durante todo o ciclo de vida do componente.
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExampleHooks.exampleUseRef}
                  />
                  <br />

                  <h7
                    ref={refReducer}
                    id="ref"
                    class="text-muted font-weight-bold"
                  >
                    useReducer
                  </h7>
                  <p>
                    O Hook useReducer é semelhante ao Hook useState. Ele permite
                    a lógica de estados personalizada. Se você estiver
                    observando vários estados que dependem de lógica complexa,
                    useReducer pode ser útil.
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExampleHooks.exampleUseReducer}
                  />
                  <br />

                  <h7
                    ref={refContext}
                    id="context"
                    class="text-muted font-weight-bold"
                  >
                    useContext
                  </h7>
                  <p>
                    O Hook useContext é usado para criar dados comuns que podem
                    ser acessados ​​em toda a hierarquia de componentes sem
                    passar os adereços manualmente para cada nível. O contexto
                    definido estará disponível para todos os componentes filhos
                    sem envolver props.
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExampleHooks.exampleUseContext.replaceAll(
                      "|",
                      "$"
                    )}
                  />
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
                  <a className="text-muted">Hooks:</a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="useEffect"
                        onClick={() => changeAnchorLink("refEffect")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="useState"
                        onClick={() => changeAnchorLink("refState")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="useCallback"
                        onClick={() => changeAnchorLink("refCallback")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="useRef"
                        onClick={() => changeAnchorLink("refRef")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="useReducer"
                        onClick={() => changeAnchorLink("refReducer")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="useContext"
                        onClick={() => changeAnchorLink("refContext")}
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

export default Hooks;
