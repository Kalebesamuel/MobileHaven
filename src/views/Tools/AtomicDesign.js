import React, { useRef } from "react";

import { Row, Col, Card, CardBody, CardHeader, CardTitle, Table } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";

import { CodeExamplesAtomicDesign } from "../../variables/codeExamplesAtomicDesign";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";
import ButtonLink from "../../components/Buttons/ButtonLink";
import HighlighterText from "../../components/Highlighters/HighlighterText.js";
import HighlighterCard from "components/Highlighters/HighlighterCard.js";

//= ==============================================================================================
function AtomicDesign() {
  const refBenefits = useRef(null);
  const refProjectArchitecture = useRef(null);
  const refAtoms = useRef(null);
  const refMolecules = useRef(null);
  const refOrganisms = useRef(null);
  const refTemplates = useRef(null);
  const refPages = useRef(null);

  useScrollToAnchorByParams({
    refBenefits,
    refProjectArchitecture,
    refAtoms,
    refMolecules,
    refOrganisms,
    refTemplates,
    refPages
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
                <h5 className="title">Atomic Design</h5>
                <p className="text-muted">
                  O Atomic Design é uma metodologia para construção de interfaces de usuário em que os componentes são separados em níveis de granularidade: átomos, moléculas, organismos, templates e páginas. Abaixo, vamos explicar cada nível com exemplos práticos usando TypeScript.
                </p>
              </CardHeader>

              <CardBody>
                <p>               
                <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/instagram-atomic-design.png")}
                    />
                  </div>
                <br />
                <br />

                <h6 id="refBenefits" ref={refBenefits}>
                    <a id="Prettier">
                      Benefícios do Atomic Design
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
                            Componentização clara
                          </h7>
                        </td>
                        <td>
                          <p>
                            Facilita a manutenção e reusabilidade de componentes.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7
                            id="effect"
                            class="text-muted font-weight-bold"
                          >
                            Organização
                          </h7>
                        </td>
                        <td>
                          Cada nível tem um propósito bem definido.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7
                            id="effect"
                            class="text-muted font-weight-bold"
                          >
                            Escalabilidade
                          </h7>
                        </td>
                        <td>
                          O projeto pode crescer sem comprometer a estrutura.
                        </td>
                      </tr>                                        
                    </tbody>
                  </Table>
                  <br/>

                  <HighlighterCard text="As pages/screens devem ser construídas diretamente no projeto do app e não dentro da biblioteca do design system. Os componentes devem ser construídos dentro da biblioteca somente até o nível dos templates." type="warning"/>

                  <h6 ref={refProjectArchitecture} id="refProjectArchitecture">
                    <a id="Prettier">
                      Estrutura de Pastas
                    </a>
                  </h6>
                                    
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesAtomicDesign.ProjectArchitecture}
                  />
                  <br/>

                  <h6 ref={refAtoms} id="refAtoms">
                    <a id="Prettier">
                      Atoms
                    </a>
                  </h6>

                  <HighlighterText search="átomos">Os átomos são os blocos mais simples e reutilizáveis, como botões e campos de entrada.</HighlighterText>
                  <br/>
                  <br/>

                  <h7
                    id="effect"
                    class="text-muted font-weight-bold"
                  >
                    <HighlighterText search="Typography.tsx">Exemplo: Typography.tsx</HighlighterText>
                  </h7>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesAtomicDesign.typographyAtom}
                  />
                  <br/>

                  <h7
                    id="effect"
                    class="text-muted font-weight-bold"
                  >
                    <HighlighterText search="Button.tsx">Exemplo: Button.tsx</HighlighterText>
                  </h7>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesAtomicDesign.buttonAtom}
                  />

                  <HighlighterText search="Button">Importante frisar que no contexto acima, o Button ainda é considerado um átomo, mesmo que ele utilize outro átomo (Typography) em sua implementação. Isso ocorre porque o papel do Button é manter uma função singular e essencial: ser um elemento de interação reutilizável. Também devemos considerar que o Button não combina funcionalidades diferentes com o Typography.</HighlighterText>
                  <br/>
                  <br/>

                  <h7
                    id="effect"
                    class="text-muted font-weight-bold"
                  >
                    <HighlighterText search="Input.tsx">Exemplo: Input.tsx</HighlighterText>
                  </h7>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesAtomicDesign.inputAtom}
                  />
                  <br/>

                  <h6 ref={refMolecules} id="refMolecules">
                    <a id="Prettier">
                      Moléculas (Molecules)
                    </a>
                  </h6>

                  <HighlighterText search="moléculas">As moléculas combinam átomos para criar componentes mais complexos, como um campo de formulário.</HighlighterText>
                  <br/>
                  <br/>
                  <h7
                    id="effect"
                    class="text-muted font-weight-bold"
                  >
                    <HighlighterText search="FormField.tsx">Exemplo: FormField.tsx</HighlighterText>
                  </h7>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesAtomicDesign.formFieldMolecule}
                  />
                  <br/>

                  <h6 ref={refOrganisms} id="refOrganisms">
                    <a id="Prettier">
                      Organismos (Organisms)
                    </a>
                  </h6>

                  <HighlighterText search="organismos">Os organismos são combinações de moléculas, formando componentes funcionais maiores, como formulários.</HighlighterText>
                  <br/>
                  <br/>

                  <h7
                    id="effect"
                    class="text-muted font-weight-bold"
                  >
                    <HighlighterText search="LoginForm.tsx">Exemplo: LoginForm.tsx</HighlighterText>
                  </h7>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesAtomicDesign.loginFormOrganism}
                  />
                  <br/>

                  <h6 ref={refTemplates} id="refTemplates">
                    <a id="Prettier">
                      Templates
                    </a>
                  </h6>

                  <HighlighterText search="templates">Os templates organizam os organismos no layout da tela.</HighlighterText>
                  <br/>
                  <br/>

                  <h7
                    id="effect"
                    class="text-muted font-weight-bold"
                  >
                    <HighlighterText search="LoginTemplate.tsx">Exemplo: LoginTemplate.tsx</HighlighterText>
                  </h7>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesAtomicDesign.loginTemplate}
                  />
                  <br/>

                  <h6 ref={refPages} id="refPages">
                    <a id="Prettier">
                      Páginas (Pages)
                    </a>
                  </h6>

                  <HighlighterText search="templates">As páginas utilizam templates e integram lógica específica da aplicação.</HighlighterText>
                  <br/>
                  <br/>

                  <h7
                    id="effect"
                    class="text-muted font-weight-bold"
                  >
                    <HighlighterText search="LoginPage.tsx">Exemplo: LoginPage.tsx</HighlighterText>
                  </h7>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamplesAtomicDesign.loginPage}
                  />
                  <br/>                  
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
                  <ul>
                    <li>
                      <ButtonLink
                        link="Benefícios do Atomic Design"
                        onClick={() => changeAnchorLink("refBenefits")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Estrutura de Pastas"
                        onClick={() =>
                          changeAnchorLink("refProjectArchitecture")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Atoms"
                        onClick={() =>
                          changeAnchorLink("refAtoms")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Moléculas (Molecules)"
                        onClick={() => changeAnchorLink("refMolecules")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Organismos (Organisms)"
                        onClick={() => changeAnchorLink("refOrganisms")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Templates"
                        onClick={() => changeAnchorLink("refTemplates")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Páginas (Pages)"
                        onClick={() => changeAnchorLink("refPages")}
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

export default AtomicDesign;
