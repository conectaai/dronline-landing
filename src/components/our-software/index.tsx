import './style.scss';

import customization from '../../images/customization.png';
import integration from '../../images/integration.png';
import mobility from '../../images/mobility.png';
import DefaultBtn from '../default-btn';

export default function OurSoftware() {

  const softwareCards = [
    {id: 1, image: customization, title: 'Personalização', text: 'Um software de gestão clínica que oferece recursos personalizados para a sua clínica, adaptando-se às necessidades específicas do seu negócio.'},
    {id: 2, image: integration, title: 'Integração', text: 'Um software que se integra facilmente com outros sistemas e tecnologias, permitindo que você utilize o melhor de cada plataforma para otimizar sua gestão.'},
    {id: 3, image: mobility, title: 'Mobilidades', text: 'Um software que pode ser acessado de qualquer lugar e a qualquer momento, permitindo que você gerencie sua clínica remotamente, inclusive pelo celular, com toda segurança e praticidade.'},
  ];

  const softwareCard = (title: string, briefing: string, image: string) => (
    <div className="col-lg-4 d-flex flex-grow-1">
      <div className="software-card d-flex flex-column flex-grow-1">
        <div className="software-card-image">
          <img src={image} alt="" />
        </div>
        <div className="software-card-content d-flex flex-grow-1 flex-column">
          <h3 className='text-18-semi-bold'>{title}</h3>
          <p className='text-14-regular'>{briefing}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="our-software">
      <div className="container">
        <h2 className='title-32-medium mb-xxxxlg'>Por que escolher nosso software de automação?</h2>
        <div className="row">
          {softwareCards.map((card) => (
            softwareCard(card.title, card.text, card.image)
          ))}
        </div>
        <DefaultBtn
          title='Teste gratuitamente'
          link='https://www.google.com'
        />
      </div>
    </section>
  );
}