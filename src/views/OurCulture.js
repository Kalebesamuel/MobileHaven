import React from 'react';

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, CardTitle } from 'reactstrap';

import PanelHeader from 'components/PanelHeader/PanelHeader.js';

class OurCulture extends React.Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={12}>
              <Card>
                <CardHeader>
                  <h5 className="title">Our Culture</h5>
                  <p className="category">Our Culture & Purpose</p>
                </CardHeader>
                <CardBody>
                  <img alt="..." src={require('assets/img/CultureandPurpose.png')} />
                  <br />
                  <br />

                  <CardTitle tag="h2"># Our Culture</CardTitle>
                  <p>
                    No nosso time, <b>acreditamos que a cultura é o alicerce de tudo</b> o que
                    fazemos. Cada valor abaixo reflete quem somos e como trabalhamos juntos para
                    alcançar nossos objetivos.
                  </p>

                  <CardTitle tag="h4">1. Defendemos o nosso time</CardTitle>
                  <p>
                    Valorizamos a proteção e o suporte mútuo,{' '}
                    <b>mas isso não significa encobrir erros ou ignorar falhas</b>. <br /> <br />{' '}
                    <b>Defender o time é ser um agente promotor da evolução de cada membro</b>,
                    oferecendo apoio construtivo e criando oportunidades de crescimento.
                    <br /> <br />
                    Acreditamos que o verdadeiro sucesso está em trabalhar juntos para superar
                    desafios, corrigir o que precisa ser melhorado e celebrar os aprendizados.
                    Criticar o time de forma destrutiva ou sem propósito é criticar a si mesmo,
                    porque <b>o sucesso individual só existe quando o coletivo avança</b>.
                  </p>

                  <CardTitle tag="h4">2. Valorizamos uns aos outros</CardTitle>
                  <p>
                    Celebramos as conquistas, aprendemos com os desafios e reconhecemos o esforço
                    individual e coletivo.{' '}
                    <b>Acreditamos que pessoas valorizadas fazem a diferença</b> e constroem um
                    ambiente de crescimento e colaboração .
                  </p>

                  <CardTitle tag="h4">3. Comunicação direta e objetiva</CardTitle>
                  <p>
                    Incentivamos conversas claras, honestas e objetivas. Evitamos rodeios e
                    enfrentamos os desafios de maneira eficaz, porque a transparência é essencial
                    para o sucesso de qualquer equipe.{' '}
                    <b>Aqui nós valorizamos confrontos saudáveis</b>, para isso, promovemos um
                    ambiente de <b>segurança psicológica</b>, onde cada pessoa pode se expressar sem
                    medo de julgamentos ou retaliações
                  </p>

                  <CardTitle tag="h4">4. Qualidade em tudo que fazemos</CardTitle>
                  <p>
                    <b>Não entregamos nada que não nos orgulha.</b> Nosso compromisso é com a
                    excelência em cada etapa, garantindo que tudo o que fazemos reflita o melhor de
                    quem somos e do que acreditamos.
                  </p>

                  <CardTitle tag="h4">5. Unidos por um propósito comum</CardTitle>
                  <p>
                    Falamos a mesma língua e caminhamos juntos em direção ao mesmo objetivo. Nosso
                    propósito é claro: crescer como equipe, alcançar resultados extraordinários e
                    transformar o que parece impossível em realidade,{' '}
                    <b>
                      alcançando os usuários promovendo mobilidade e simplificação onde quer que
                      eles estejam.
                    </b>
                  </p>

                  <CardTitle tag="h4">6. Assumimos riscos com confiança</CardTitle>
                  <p>
                    Acreditamos que a inovação e o progresso dependem de coragem.{' '}
                    <b>Tomamos decisões ousadas</b>, confiando em nossa experiência, preparo e
                    capacidade de enfrentar desafios com responsabilidade.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default OurCulture;
