import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './style.scss';

import systemPrint from '../../images/system-print.png';
import DefaultBtn from '../default-btn';

export default function OurInterfaces() {
  const [key, setKey] = useState('consults');

  const tabNavigator = (
    <Tabs
      defaultActiveKey="profile"
      id="interface-tab"
      activeKey={key}
      onSelect={(k: any) => setKey(k)}
    >
      <Tab eventKey="consults" title="Agendamento de consultas">
        <img src={systemPrint} alt="hero" />
      </Tab>
      <Tab eventKey="eletronic" title="Prontuário eletrônico">
        <img src={systemPrint} alt="hero" />
      </Tab>
      <Tab eventKey="online" title="Atendimento online integrado">
        <img src={systemPrint} alt="hero" />
      </Tab>
      <Tab eventKey="control" title="Controle de estoque">
        <img src={systemPrint} alt="hero" />
      </Tab>
    </Tabs>
  );

  return (
    <section className="our-interfaces">
      <div className="container">
        <div className='d-flex align-items-center justify-content-center flex-column'>
          <h2 className='title-40-medium mb-sm'>Conheça alguns recursos</h2>
          <p className='text-18-regular mb-xxxxlg'>Maximize o potencial da sua clínica com recursos inteligentes e personalizados para atender melhor seus pacientes</p>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              {tabNavigator}
            </div>
          </div>
          <DefaultBtn
            title='Teste gratuitamente'
            link='https://www.google.com'
          />
        </div>
      </div>
    </section>
  );
}