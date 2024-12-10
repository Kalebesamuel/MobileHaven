import React, { useRef } from "react";

import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from "reactstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

import { codeExamplesUnistyles } from "../../variables/codeExamplesUnistyles"
import ButtonLink from "components/Buttons/ButtonLink";
import PanelHeader from "components/PanelHeader/PanelHeader";
import HighlighterCard from "components/Highlighters/HighlighterCard";

//= ==============================================================================================
const Unistyles = () => {
    const refUnistylesBenefits = useRef(null);
    const refWhenUse = useRef(null);
    const refInstallation = useRef(null);
    const refRequirements = useRef(null);
    const refBasicConfig = useRef(null);

    useScrollToAnchorByParams({
        refUnistylesBenefits,
        refWhenUse,
        refInstallation,
        refRequirements,
        refBasicConfig,
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
                            <h5 className="title">Unistyles</h5>
                            <p className="text-muted">
                                Unistyles é um superset do StyleSheet, semelhante a como o TypeScript é um superset do JavaScript. Se você está familiarizado com a estilização no React Native, então já sabe como usar o Unistyles.
                            </p>
                        </CardHeader>

                        <CardBody>
                            <div id="react-redux">
                                <h6>
                                    <a id="refUnistylesBenefits" ref={refUnistylesBenefits}>
                                        Benefícios de usar o Unistyles
                                    </a>
                                </h6>
                                <Table striped hover>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Benefícios</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <h7
                                                id="effect"
                                                class="text-muted font-weight-bold"
                                            >
                                                Sem Hooks e Context API
                                            </h7>
                                        </td>
                                        <td>
                                            <p>
                                                Ao contrário de bibliotecas como Styled Components, Unistyles não usa hooks nem contextos para gerenciar estados de estilo, evitando a criação de novos componentes durante renderizações.
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h7
                                                id="effect"
                                                class="text-muted font-weight-bold"
                                            >
                                                JSI Bindings
                                            </h7>
                                        </td>
                                        <td>
                                            <p>
                                            A biblioteca usa JSI para aplicar estilos diretamente no lado nativo, tornando o processo mais rápido e eficiente, pois elimina a necessidade de reconciliar a interface com o React.
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h7
                                                id="effect"
                                                class="text-muted font-weight-bold"
                                            >
                                                Código mais limpo
                                            </h7>
                                        </td>
                                        <td>
                                            <p>
                                                Não polui a hierarquia de visualização (Unistyles não possui wrappers de componentes)
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h7
                                                id="effect"
                                                class="text-muted font-weight-bold"
                                            >
                                                Mais eficiência
                                            </h7>
                                        </td>
                                        <td>
                                            <p>
                                                Transforma suas StyleSheets em StyleSheets aprimoradas com superpoderes que podem acessar temas, valores específicos da plataforma e muito mais!
                                            </p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <br />

                                <h7
                                    id="effect"
                                    class="text-muted font-weight-bold"
                                >
                                    Benchmark:
                                </h7>
                                <div>
                                    <img height="30%" alt="..." src={require("assets/img/unistyles-benchmark.png")}/>
                                </div>
                                <br />

                                <h6>
                                    <a id="refWhenUse" ref={refWhenUse}>
                                        Quando usar Unistyles?
                                    </a>
                                </h6>

                                <Table striped hover>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Motivo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h7
                                                    id="effect"
                                                    class="text-muted font-weight-bold"
                                                >
                                                    Gestão de Temas e Estilos
                                                </h7>
                                            </td>
                                            <td>
                                                <p>
                                                    Quando precisa de suporte avançado para temas e configuração dinâmica de estilos (dark e light mode).
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h7
                                                    id="effect"
                                                    class="text-muted font-weight-bold"
                                                >
                                                    Apps Multiplataforma
                                                </h7>
                                            </td>
                                            <td>
                                                Para garantir que os estilos sejam consistentes entre Android e iOS.
                                            </td>
                                        </tr>                                        
                                        <tr>
                                            <td>
                                                <h7
                                                    id="effect"
                                                    class="text-muted font-weight-bold"
                                                >
                                                    Aplicativos de Alto Desempenho
                                                </h7>
                                            </td>
                                            <td>
                                                Quando precisa minimizar re-renderizações para melhorar a performance.
                                            </td>
                                        </tr>                                        
                                    </tbody>
                                </Table>

                                <br />
                                
                                <h6>
                                    <a id="refRequirements" ref={refRequirements}>
                                        Requisitos
                                    </a>
                                </h6> 

                                <Table striped hover>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Necessário</th>
                                            <th>Nota</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h7
                                                    id="effect"
                                                    class="text-muted font-weight-bold"
                                                >
                                                    React Native
                                                </h7>
                                            </td>
                                            <td>
                                                <p>
                                                    0.76+
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h7
                                                    id="effect"
                                                    class="text-muted font-weight-bold"
                                                >
                                                    New Architecture
                                                </h7>
                                            </td>
                                            <td>
                                                <p>
                                                    Habilitada
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    É exigido
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h7
                                                    id="effect"
                                                    class="text-muted font-weight-bold"
                                                >
                                                    Expo SDK
                                                </h7>
                                            </td>
                                            <td>
                                                <p>
                                                    52+
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    Se estiver usando o Expo
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h7
                                                    id="effect"
                                                    class="text-muted font-weight-bold"
                                                >
                                                    Xcode
                                                </h7>
                                            </td>
                                            <td>
                                                <p>
                                                    16+
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    Exigido pelo Nitro Modules
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <br />

                                <h6>
                                    <a id="refInstallation" ref={refInstallation}>
                                        Instalação
                                    </a>
                                </h6>

                                <SyntaxHighlighter
                                    language="bash"
                                    style={a11yDark}
                                    PreTag="div"
                                    children={codeExamplesUnistyles.installation}
                                />
                                
                                <br />
                                
                                <h7
                                    id="effect"
                                    class="text-muted font-weight-bold"
                                >
                                    Adicione o plugin no Babel:
                                </h7>
                                <SyntaxHighlighter
                                    language="js"
                                    style={a11yDark}
                                    PreTag="div"
                                    children={codeExamplesUnistyles.babel}
                                />

                                <br />

                                <HighlighterCard text="Após instalar as dependências, execute o Gradlew Sync e Rebuild Project caso esteja na plataforma Android, ou utilize pod install se estiver trabalhando com iOS." type="warning"/>

                                <br />

                                <h6>
                                    <a id="refBasicConfig" ref={refBasicConfig}>
                                        Configuração Básica
                                    </a>
                                </h6>
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
                            <a className="text-muted">Unistyles</a>
                            <ul>
                                <li>
                                    <ButtonLink
                                        link="Benefícios de usar o Unistyles"
                                        onClick={() => changeAnchorLink("refUnistylesBenefits")}
                                    />
                                </li>
                                <li>
                                    <ButtonLink
                                        link="Quando usar o Unistyles?"
                                        onClick={() => changeAnchorLink("refWhenUse")}
                                    />
                                </li>
                                <li>
                                    <ButtonLink
                                        link="Requisitos"
                                        onClick={() => changeAnchorLink("refRequirements")}
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
                                        link="Configuração básica"
                                        onClick={() => changeAnchorLink("refBasicConfig")}
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

export default Unistyles;