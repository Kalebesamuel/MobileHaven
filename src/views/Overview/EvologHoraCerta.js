import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ReactPlayer from "react-player";
import { EVOLOG_MOTORISTA_OVERVIEW } from "../../assets/videos/consts.js";

const EvologHoraCerta = () => {
  const appSupport = {
    Android: {
      available: true,
      version: "3.1.1",
    },
    iOS: {
      available: false,
      version: "0.0.0",
    },
  };

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Evolog Hora Certa</h5>

                <p className="text-muted">
                  Overview do aplicativo Evolog Hora Certa
                </p>
              </CardHeader>

              <CardBody>
                <hr class="mt-2" />
                <p>
                  <h6>
                    <a id="title1">Presentation</a>
                  </h6>

                  <p>
                    O Evolog Hora Certa é um aplicativo utilizado para fazer a
                    checagem de cargas, ele utiliza agendamentos criados no
                    Evolog e disponibiliza um sistema para tirar fotos para a
                    conferência de carga, ele também conta com funcionalidades
                    para tirar fotos de cargas que não possuem agendamentos.
                  </p>
                </p>

                <hr />

                <h6>
                  <a>Acesso</a>
                </h6>

                <p>
                  Para acessar o Evolog Hora Certa é necessário ter uma conta
                  ativa no Evolog.
                </p>

                <hr class="mt-4" />
                <p>
                  <h6>
                    <a id="title1">Funções e Funcionalidade</a>
                  </h6>

                  <p>
                    O Evolog Hora Certa conta atualmente com dois módulos
                    consolidados e um em desenvolvimento. Entre os consolidados
                    estão o Controle de Operações e o Controle de Fotos,
                    enquanto o Controle de Recibos está em fase de
                    desenvolvimento.
                  </p>

                  <p>
                    Controle de Operações: <br />
                    Este módulo apresenta uma listagem de agendamentos de
                    cargas, permitindo ao usuário adicionar comentários e
                    alterar o status dos agendamentos. Para mudar o status, o
                    usuário dispõe de uma tela onde pode capturar e inserir
                    fotos relacionadas à carga. Cada operação exige um mínimo de
                    5 fotos e permite no máximo 24 fotos.
                  </p>

                  <p>
                    Controle de Fotos: <br />
                    Neste módulo, o usuário encontra um campo de pesquisa para
                    vincular um armazém, um campo de texto para adicionar uma
                    descrição e a funcionalidade de capturar fotos, seguindo o
                    mesmo limite de no mínimo 5 e no máximo 24 fotos.
                  </p>

                  <p>
                    Controle de Recibos: <br />
                    Atualmente em desenvolvimento, este módulo apresenta uma
                    listagem de recibos. Ao selecionar um recibo, o usuário terá
                    acesso a campos para adicionar assinaturas, cuja quantidade
                    será definida pelo tipo de recibo. Após assinar, o usuário
                    pode confirmar o salvamento e retornar à tela principal do
                    Controle de Recibos.
                  </p>
                </p>

                <hr class="mt-4" />
                <p>
                  <h6>
                    <a id="title1">Suporte</a>
                  </h6>

                  <p>
                    Esse aplicativo é de uso interno dos armazéns Bravo, então
                    ele conta com pouco mais de 100 downloads na Play Store,
                    pois sua distribuição acontece de forma interna através de
                    uma APK.
                  </p>

                  {Object.keys(appSupport).map((v) => {
                    return (
                      <div style={styles.supportIndicator}>
                        <div
                          style={{
                            ...styles.supportIndicatorChild,
                            ...styles.supportIndicatorStatus,
                            backgroundColor: appSupport[v].available
                              ? "green"
                              : "red",
                          }}
                        >
                          <i
                            style={{
                              ...styles.supportIndicatorChild,
                              ...styles.supportIndicatorStatusIcon,
                              backgroundColor: appSupport[v].available
                                ? "green"
                                : "red",
                            }}
                            className={
                              appSupport[v].available
                                ? "now-ui-icons media-1_button-play"
                                : "now-ui-icons media-1_button-pause"
                            }
                          />
                        </div>
                        <p
                          style={{
                            ...styles.supportIndicatorChild,
                            ...styles.supportIndicatorPlatform,
                          }}
                        >
                          {v}
                        </p>
                        <p
                          style={{
                            ...styles.supportIndicatorChild,
                            ...styles.supportIndicatorVersion,
                          }}
                        >
                          {appSupport[v].version}
                        </p>
                      </div>
                    );
                  })}
                  <p style={styles.tinyText}>
                    *Última atualização em 04/12/2024
                  </p>
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col md="4">
            <Card className="card-use">
              <CardBody
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <video
                  id="video"
                  class="z-depth-1"
                  width="300px"
                  height="550px"
                  autoPlay
                  loop
                  controls
                  muted
                >
                  <source src={EVOLOG_MOTORISTA_OVERVIEW} type="video/mp4" />
                </video>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

const styles = {
  supportIndicator: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    border: "2px solid #eee",
    width: 300,
    height: 50,
    marginBottom: 10,
  },
  supportIndicatorChild: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  supportIndicatorStatus: {
    width: 40,
    border: "none",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  supportIndicatorStatusIcon: {
    backgroundColor: "white",
    color: "white",
    fontWeight: "bold",
    border: "none",
    fontSize: "1rem",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  supportIndicatorPlatform: {
    width: 180,
    paddingTop: 15,
  },
  supportIndicatorVersion: {
    width: 80,
    paddingTop: 15,
  },
  tinyText: {
    fontSize: "0.7rem",
    fontWeight: "normal",
  },
};

export default EvologHoraCerta;
