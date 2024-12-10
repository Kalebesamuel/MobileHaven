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

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

import { CodeExamplesWorkflow } from "../../variables/codeExamplesWorkflow";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

//= ==============================================================================================
function Workflow() {
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
        <Row>
          <Col md="9">
            <Card>
              <CardHeader>
                <h5 className="title">
                  Documentação do workflow do Mobile Bravo
                </h5>

                <p className="text-muted">
                  Definição do fluxo de trabalho seguido no mobile
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  <h6>
                    <a ref={refMobileWorkflowOverview} id="mobileOverview">
                      A respeito do workflow do mobile
                    </a>
                  </h6>
                  <h7 id="workflowOverview" class="font-weight-bold">
                    Definição e visão geral
                  </h7>
                  <p>
                    Definição do fluxo de trabalho seguido no mobile que visa
                    mostrar como funciona o processo desde o momento do
                    nascimento de uma demanda até o deploy da versão nas
                    webstores ou até mesmo pelo codePush.
                  </p>
                  <p>
                    Tendo um fluxo de trabalho bem organizado e definido em
                    processos estruturados conseguimos criar um ambiente de
                    desenvolvimento seguro, com fácil adaptação e entendimento
                    do que fazer quando novas demandas chegarem ao time, o
                    trabalho também se torna mais simples de ser revisado.
                  </p>
                  <br />
                  <hr />
                  <h7
                    ref={refMethodologies}
                    id="methodologies"
                    class="font-weight-bold"
                  >
                    Metodologias
                  </h7>
                  <p>
                    Atuamos com a metodologia ágil{" "}
                    <h7 class="text-muted">Scrum</h7> visando trabalhar de forma
                    conectada com todos os times com o objetivo de chegar a
                    soluções complexas.
                  </p>
                  <p>
                    Nós quebramos nosso trabalho em objetivos que podem ser
                    completados dentro de um time-box chamado{" "}
                    <h7 class="text-muted">sprint</h7>.
                  </p>
                  <p>
                    Durante o desenvolvimento dos objetivos da sprint,
                    realizamos a <h7 class="text-muted">Scrum daily</h7> que é
                    uma reunião diária que visa alinharmos como está o
                    desenvolvimento de nossas atividades e também verificar se
                    existe algum impedimento em relação a elas.
                  </p>
                  <p>
                    No Final de cada sprint realizamos a{" "}
                    <h7 class="text-muted">Sprint retrospective</h7> onde
                    realizamos uma retrospectiva da sprint que foi executada e
                    buscamos aprender o que podemos melhorar pra atingir os
                    objetivos de força mais facilitada na próxima sprint.
                  </p>
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Duração</th>
                        <th>Frequência</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-secondary">Sprint</td>
                        <td>Duas semanas</td>
                        <td>Uma nova sprint é criada a cada duas semanas.</td>
                      </tr>
                      <tr>
                        <td className="text-secondary">Daily</td>
                        <td>15-30 minutos</td>
                        <td>Diariamente às 08h30.</td>
                      </tr>
                      <tr>
                        <td className="text-secondary">Technical Refinament</td>
                        <td>30-60 minutos</td>
                        <td>Antes de iniciar cada sprint.</td>
                      </tr>
                      <tr>
                        <td className="text-secondary">Sprint retrospective</td>
                        <td>15 minutos</td>
                        <td>Ao final de cada sprint.</td>
                      </tr>
                    </tbody>
                  </Table>
                  <br />
                  <hr />
                  <h7 ref={refDemands} id="newDemands" class="font-weight-bold">
                    Demandas: Quem são, onde vivem, de que se alimentam?
                  </h7>
                  <br />
                  <br />
                  <h7 class="text-muted font-weight-bold">
                    As demandas podem chegar pelas seguintes direções:
                  </h7>
                  <ul>
                    <li>Suporte;</li>
                    <li>Reuniões formais;</li>
                    <li>Reuniões informais;</li>
                    <li>Emails de clientes;</li>
                    <li>Necessidade interna do time (Melhorias internas);</li>
                    <li>Por líderes, time de PO e outros.</li>
                  </ul>
                  <h7 class="text-muted font-weight-bold">
                    As demandas são classificadas em:
                  </h7>
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-secondary">Primárias</td>
                        <td>
                          Demandas primárias são as que vem do cliente, ou que
                          tem um impacto muito forte e positivo no cliente, a
                          essas demandas devemos sempre darmos prioridade
                          visando terminá-las o mais rápido possível.
                        </td>
                      </tr>

                      <tr>
                        <td className="text-secondary">Secundárias</td>
                        <td>
                          Já as tarefas secundárias, geralmente se tratam de
                          tarefas internas do time que visam melhorar nossos
                          processos de trabalho trazendo qualidade para o time,
                          visa também criar novas ferramentas, gerar informação
                          precisa sobre eventos que precisamos manter
                          conhecimento, essas tarefas entram em ação sempre que
                          tarefas primárias estão aguardando alguma
                          aprovação/informação para continuarmos o
                          desenvolvimento, ou quando estamos muito travados em
                          tarefas primárias e precisamos respirar uma nova
                          demanda pra esfriar a cabeça, ou até mesmo após o
                          horário comum de serviço caso necessário e/ou haja o
                          desejo do integrante do time.{" "}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <br />
                  <hr />
                  <h7
                    ref={refJiraWorkflow}
                    id="workflowJira"
                    class="font-weight-bold"
                  >
                    Workflow do Jira
                  </h7>
                  <p>
                    Agora que temos uma visão geral das demandas, vamos entender
                    algumas regras sobre o Jira que é nosso sistema de
                    gerenciamento de projetos.
                  </p>
                  <h7 class="text-muted font-weight-bold">
                    Regras das demandas no Jira:
                  </h7>
                  <ul>
                    <li>
                      Cada demanda deve estar vinculada a um Jira, assim
                      conseguiremos rastreá-la;
                    </li>
                    <li>
                      Se alguma demanda tem uma informação confusa e o time de
                      TI de forma global não tem entendimento do processo a ser
                      desenvolvido é necessário que a demanda seja passada para
                      time de requisitos fazer recolhimento e documentação das
                      informações, assim os desenvolvedores conseguirão
                      entender;
                    </li>
                    <li>
                      Demandas que ofendem processos de segurança, e tornam o
                      ambiente do Evolog inseguro devem ser respondidas
                      reforçando a necessidade de segurança no ambiente
                      corporativo, promovendo sensibilização e educação o Key
                      User.
                    </li>
                  </ul>
                  <h7 class="text-muted font-weight-bold">
                    Sobre o status da demanda no Jira
                  </h7>
                  <p>
                    Abaixo vamos ver qual o status correto para cada situação em
                    que a demanda se encontra:
                  </p>
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-secondary">Backlog</td>
                        <td>
                          Task está em aguardo para ser desenvolvida, ou teve
                          desenvolvimento mas foi visto algo errado pelo Key
                          User e retornou a backlog até ser atendida novamente.
                        </td>
                      </tr>
                      <tr>
                        <td className="text-secondary">Desenvolvimento</td>
                        <td>Task foi iniciada e está em desenvolvimento.</td>
                      </tr>
                      <tr>
                        <td className="text-secondary">Em Pausa</td>
                        <td>
                          Task começou a ser desenvolvida porém está em pausa
                          devido estar aguardando informações, ou outra task que
                          bloqueia esta a ser finalizada.
                        </td>
                      </tr>
                      <tr>
                        <td className="text-secondary">Liderança Técnica</td>
                        <td>
                          Task foi desenvolvida e está aguardando codeReview/
                          validação.
                        </td>
                      </tr>
                      <tr>
                        <td className="text-secondary">Qualidade</td>
                        <td>
                          Aguardando teste do QA.
                        </td>
                      </tr>
                      <tr>
                        <td className="text-secondary">Keyuser</td>
                        <td>
                          Task foi desenvolvida, testada, foi realizado o
                          codeReview e a validação técnica do Tech Lead, agora o
                          retorno da task é passado para o Key User caso houver
                          para aguardar a validação do mesmo, em alguns casos
                          será necessário gerar apk em qas e enviá-la para o Key
                          User.
                        </td>
                      </tr>
                      <tr>
                        <td className="text-secondary">Pull Request</td>
                        <td>
                          Tarefa está aguardando janela de deploy.
                        </td>
                      </tr>
                      <tr>
                        <td className="text-secondary">Concluído</td>
                        <td>
                          Task foi finalizada e teve a validação/aprovação
                          técnica do Tech Lead e do Key User caso houver e foi
                          para produção.
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <br />
                  <hr />
                  <h7
                    ref={refBitbucketWorkflow}
                    id="workflowBitbucket"
                    class="font-weight-bold"
                  >
                    Workflow do Bitbucket
                  </h7>
                  <p>
                    Seguimos um fluxo de trabalho em relação as branchs que
                    utilizamos, protegendo o código em produção que alterações
                    que não estejam totalmente revisadas em sua implementação e
                    testadas tanto em sua funcionalidade técnica quanto em
                    relação a sua regra de negócio em relação aos requisitos do
                    Key User.
                  </p>
                  <h7 class="text-muted font-weight-bold">
                    Branches principais
                  </h7>
                  <p>
                    Atuamos de modo geral com 3 branchs principais, abaixo listo
                    quais são, suas descrições e atribuições.
                  </p>
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Branch</th>
                        <th>Descrição</th>
                        <th>Atribuições</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-secondary">DEV</td>
                        <td>
                          Branch default de desenvolvimento, é onde atuamos de
                          forma primária durante o desenvolvimento das nossas
                          atividades.
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className="text-secondary">QAS</td>
                        <td>
                          Branch default de Quality Assurance, o código inicia
                          se em dev e após a resolução da atividade realizamos o
                          merge com qas, onde os testes e o controle de
                          qualidade a partir do Key User, ou o time de QA é
                          iniciado.
                        </td>
                        <td>
                          Sempre que recebe commit ou recebe um merge, é
                          executada uma pipeline que realizará a criação de uma
                          apk que posteriormente poderá ser utilizada para ser
                          enviada para o Key User's ou QA's.
                        </td>
                      </tr>
                      <tr>
                        <td className="text-secondary">PRD</td>
                        <td>
                          Branch default de Production, esta branch é onde temos
                          todo o nosso código que espelhará o nosso projeto em
                          produção, não temos o costume de realizar alterações a
                          partir desta branch, os casos que se ocorre isto são
                          específicos e devem ser acordados.
                        </td>
                        <td>
                          Sempre que recebe commit ou recebe um merge, é
                          executada uma pipeline que realizará a criação de uma
                          aab que posteriormente poderá ser utilizada para ser
                          enviada para a Play Store.
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <h7 class="text-muted font-weight-bold">Branch auxiliar</h7>
                  <p>
                    Sempre que vamos realizar uma task por padrão criamos uma
                    branch a partir de DEV com o mesmo ID do Jira, como exemplo,
                    se temos uma atividade com o ID EVOLOG-3040 então teríamos
                    como mostrado abaixo, caso se tratar de um épico onde será desenvolvida várias tarefas:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesWorkflow.branchFlow}
                    />
                  </pre>

                  <h7 class="text-muted font-weight-bold">Code Review</h7>
                  <p>
                    Após o término da atividade deve ser criado um pull request
                    da branch auxiliar para dev ou caso se tratar de uma task vinculada a um épico, deverá ser feito o PR para a branch do épico, dois desenvolvedores do time irão realizar o code
                    review e caso validado o merge será concluído.
                  </p>
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
                  <a className="text-muted" href="#mobileOverview">
                    A respeito do workflow do mobile:
                  </a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="Definição e visão geral"
                        onClick={() =>
                          changeAnchorLink("refMobileWorkflowOverview")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Metodologias"
                        onClick={() => changeAnchorLink("refMethodologies")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Demandas: Quem são, onde vivem, de que se alimentam?"
                        onClick={() => changeAnchorLink("refDemands")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Worflow do Jira"
                        onClick={() => changeAnchorLink("refJiraWorkflow")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Worflow do Bitbucket"
                        onClick={() => changeAnchorLink("refBitbucketWorkflow")}
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

export default Workflow;
