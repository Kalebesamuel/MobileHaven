import React, { useRef } from "react";

import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardFooter,
  Table,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip,
  Button
} from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

import { CodeExamplesWorkflow } from "../../variables/codeExamplesWorkflow";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

//= ==============================================================================================
function LogisticDictionary() {
  const refMobileWorkflowOverview = useRef(null);
  const refMethodologies = useRef(null);
  const refDemands = useRef(null);
  const refJiraWorkflow = useRef(null);
  const refBitbucketWorkflow = useRef(null);

  useScrollToAnchorByParams({
    refMobileWorkflowOverview,
    refMethodologies,
    refDemands,
    refJiraWorkflow,
    refBitbucketWorkflow,
  });

  const changeAnchorLink = useChangeAnchorLink();

  //= ==============================================================================================
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
          <Col md="14">
            <Card>
              <CardHeader>
                <h5 className="title">
                  Dicionário de Logística
                </h5>

                <p className="text-muted">
                  Definição dos principais conceitos da área de Logística
                </p>
              </CardHeader>
            </Card>
          </Col>

          <Row>
            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">CT-e (Conhecimento de Transporte Eletrônico)</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>
                    Documento fiscal eletrônico que registra uma prestação de serviço de transporte de cargas. Ele é obrigatório e substitui documentos físicos como o Manifesto de Carga.
                  </h7>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">NF (Nota Fiscal)</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>
                    Documento fiscal que detalha a transação comercial e especifica a mercadoria ou serviço envolvido. Diferente de uma Delivery, a NF não necessariamente indica a entrega de uma mercadoria, mas formaliza a operação comercial.
                  </h7>
                </CardBody>
              </Card>
            </Col>  


            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Crossdocking</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>
                    Estratégia logística em que a mercadoria é recebida no armazém e imediatamente redirecionada para outra carga ou veículo de entrega, minimizando o tempo de armazenamento.
                  </h7>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Triangulação</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>
                    Operação logística onde o transporte de uma carga envolve mais de um ponto de entrega ou retirada, formando um fluxo de transporte com múltiplos destinos.
                  </h7>
                </CardBody>
              </Card>
            </Col>   

             <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Vira</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>
                  Termo usado para descrever a troca de veículo ou a reorganização de mercadorias para continuar o transporte. Pode ocorrer após um crossdocking ou em pontos intermediários.
                  </h7>
                </CardBody>
              </Card>
            </Col>   

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Liberação de CT-e para Nova Carga</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    Processo de autorização para reutilizar um CT-e em outra operação de transporte após atividades como o crossdocking.
                  </h7>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Roteirização</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    Planejamento e otimização das rotas de entrega para reduzir custos e maximizar a eficiência no transporte.
                  </h7>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Doca</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    Área do armazém destinada ao carregamento e descarregamento de veículos de transporte.
                  </h7>
                </CardBody>
              </Card>
            </Col> 

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Cubagem</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    Cálculo que considera o espaço físico ocupado pela mercadoria, usado para definir a tarifa de transporte quando o volume é mais relevante que o peso.
                  </h7>
                </CardBody>
              </Card>
            </Col>  

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">B2B (Business to Business)</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    Trata-se de empresas que vendem produtos ou serviços para outras empresas.
                  </h7>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">B2C (Business to Customer)</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    São os negócios destinados a vender diretamente para o consumidor final.
                  </h7>
                </CardBody>
              </Card>
            </Col>  

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Carga Fechada</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    O mesmo que carga lotação, ou seja, que ocupa um veículo inteiro para ser transportada.
                  </h7>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Carga fracionada</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    Carga com pequenas quantidades de produtos que sozinhos não preenche um veículo inteiro.
                  </h7>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">CD (Centro de Distribuição)</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    Espaço utilizado para manuseio, armazenagem e administração de produtos de distribuição física.
                  </h7>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">EDI</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    Electronic Data Interchange ou Intercâmbio Eletrônico de Dados.
                  </h7>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">FIFO (First In, First Out)</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    Sistema de controle de estoques em que o material que entra primeiro deve ser utilizado primeiro.
                  </h7>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">FIFO (First In, First Out)</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    Sistema de controle de estoques em que o material que entra primeiro deve ser utilizado primeiro.
                  </h7>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Frete Fracionado (LTL – Less than Truck Load)</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    Para operações com menor volume de material, as transportadoras consolidam cargas de vários clientes em um equipamento, maximizando a ocupação do veículo. Nesta condição, utiliza-se o frete fracionado que consiste em estipular um valor, por quilo transportado, considerando a distância, o peso das cargas e outros itens de cobrança aplicáveis neste tipo de negociação do serviço de transporte.
                  </h7>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Frete Lotação (FTL -Full Truck Load)</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    Para empresas que possuem grandes volumes de cargas e necessitam de maior rapidez na entrega ou recebimento de suas remessas, é usual o transporte na modalidade. O frete de lotação consiste na contratação de uma carreta exclusiva para o transporte de materiais de um único cliente.
                  </h7>
                </CardBody>
              </Card>
            </Col>  

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Logística Inbound</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    É o processo responsável pelo controle de toda a estratégia de entrada do material utilizado como matéria-prima até a fábrica.
                  </h7>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Logística Outbound</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    Responsável por todo o controle logístico pós entrada do produto na fábrica. Tem como atividades o transporte para pontos de apoio, centros de distribuição ou para os consumidores finais, entre outras.
                  </h7>
                </CardBody>
              </Card>
            </Col> 

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Logística reversa ou inversa</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    Se refere a diversos procedimentos associados à devolução de um produto. Na prática, significa transportar produtos no caminho contrário ao da entrega.
                  </h7>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Manifesto de Carga</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    Documento fiscal utilizado para relacionar o conteúdo de uma unidade de carga (caminhão, carreta ou container) durante uma operação de transporte. Nele deve constar todas as notas fiscais das cargas transportadas, não podendo existir carga não relacionada ou carga relacionada e não carregada no equipamento.
                  </h7>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Modais</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    São os tipos/meios de transporte existentes. São eles ferroviário (feito por ferrovias), rodoviário (feito por rodovias), hidroviário (feito pela água), dutoviário (feito pelos dutos) e aeroviário (feito de forma aérea). 
                  </h7>
                </CardBody>
              </Card>
            </Col> 

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">MOPP</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    Movimentação Operacional de Produtos Perigosos. Existem cursos autorizados pelo Contran para o caminhoneiro se especializar nesse tipo de transporte.
                  </h7>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">MOPP</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    Movimentação Operacional de Produtos Perigosos. Existem cursos autorizados pelo Contran para o caminhoneiro se especializar nesse tipo de transporte.
                  </h7>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Operador Logístico (OL)</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    Empresa especializada em movimentar, armazenar, transportar, processar pedidos e controlar estoques, entre outras coisas. Fornece seus serviços com profissionais treinados. O serviço pode ser no próprio OL ou nas dependências do cliente. Tudo dependerá do acordo firmado.
                  </h7>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">SLA (Service Level Agreement)</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    Acordo sobre o Nível de Serviço. Ex. Data SLA (Data acordada com o cliente).
                  </h7>
                </CardBody>
              </Card>
            </Col> 

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Supply Chain Management (Gestão da Cadeia de Suprimentos)</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    É responsável pelos métodos e sistemas operacionais ligados ao produto de forma direta ou indireta. Envolve atividades como: compras, depósitos e inventários – desde a produção até a entrega ao cliente.
                  </h7>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">WCS</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    Warehouse Control Systems ou Sistemas de Controle de Armazém.
                  </h7>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">WMS</CardTitle>
                </CardHeader>
                <CardBody>
                  <h7>                  
                    Warehouse Management Systems ou Sistemas de Gerenciamento de Armazém.
                  </h7>
                </CardBody>
              </Card>
            </Col>                  
          </Row>        
      </div>
    </>
  );
}

export default LogisticDictionary;
