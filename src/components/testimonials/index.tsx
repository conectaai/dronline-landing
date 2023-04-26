import testimonial1 from '../../images/testimonial-1.png';
import testimonial2 from '../../images/testimonial-2.png';
import testimonial3 from '../../images/testimonial-3.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './style.scss';

import Banner from '../banner';

export default function Testimonials() {
  
  const testimonials = [
    {id: 1, image: testimonial1, briefing: '"Desde que comecei a usar o software de gestão clínica da empresa, meu trabalho ficou muito mais fácil e eficiente. Agora consigo agendar minhas consultas de forma organizada e rápida, e o prontuário eletrônico me permite ter acesso às informações dos pacientes em qualquer lugar. Recomendo a todos os colegas de profissão!"', profession: 'Médico Cardiologista', name: 'Dr. João Silva'},
    {id: 2, image: testimonial2, briefing: '"O software de gestão clínica me permitiu economizar tempo e dinheiro na minha clínica. Com o controle de estoque integrado, posso gerenciar meu estoque de medicamentos e materiais com muito mais eficiência, evitando desperdícios e compras desnecessárias. Além disso, o faturamento integrado me permite controlar as contas a receber e a pagar em um só lugar.”', profession: 'Médica Dermatologista', name: 'Dra. Maria Santos'},
    {id: 3, image: testimonial3, briefing: 'Como administrador de uma clínica de grande porte, sei o quanto é importante ter um software de gestão eficiente. Com o software de gestão clínica da empresa, consigo gerenciar todas as informações da minha clínica em um só lugar, além de contar com recursos inteligentes como a prescrição eletrônica e os relatórios de desempenho.”', profession: 'Médico Cardiologista', name: 'Dr. João Silva'},
    {id: 3, image: testimonial3, briefing: 'Como administrador de uma clínica de grande porte, sei o quanto é importante ter um software de gestão eficiente. Com o software de gestão clínica da empresa, consigo gerenciar todas as informações da minha clínica em um só lugar, além de contar com recursos inteligentes como a prescrição eletrônica e os relatórios de desempenho.”', profession: 'Médico Cardiologista', name: 'Dr. João Silva'},
    {id: 3, image: testimonial3, briefing: 'Como administrador de uma clínica de grande porte, sei o quanto é importante ter um software de gestão eficiente. Com o software de gestão clínica da empresa, consigo gerenciar todas as informações da minha clínica em um só lugar, além de contar com recursos inteligentes como a prescrição eletrônica e os relatórios de desempenho.”', profession: 'Médico Cardiologista', name: 'Dr. João Silva'},
  ];

  const testimonialsCard = (briefing: string, profession: string, name: string, image: string) => (
    <div className="testimonial-card">
      <p className='testimonial-briefing mb-xlg'>{briefing}</p>
      <div className="testimonial-info-container d-flex align-items-center">
        <img src={image} alt="" />
        <div>
          <p className='testimonial-name'>{name}</p>
          <span>{profession}</span>
        </div>
      </div>
    </div>
  );

  const star = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 17.77L18.18 21.5L16.54 14.47L22 9.74L14.81 9.13L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77Z" fill="#FF9F43"/>
    </svg>
  );

  const carouselOptions = {
    className: 'owl-theme',
    dots: false,
    items: 2,
    responsive: {
      0:{
        items: 1,
        stagePadding: 32,
        margin: 16
      },
      768: {
        items: 2,
        stagePadding: 80,
        margin: 24, 
      }
    }
  };

  return (
    <section className="testimonials">
      <div className='testimonial-wrapper'>
        <div className="container title-container">
          <div className='d-flex align-items-center mb-md'>
            {star}
            {star}
            {star}
            {star}
            {star}
          </div>
          <h2 className='title-32-medium'>O que nossos clientes dizem sobre nós</h2>
        </div>
        <div className='carousel-container'>
          <OwlCarousel 
            {...carouselOptions}
          >
            {testimonials.map((testimonial) => (
              testimonialsCard(testimonial.briefing, testimonial.profession, testimonial.name, testimonial.image)
            ))}
          </OwlCarousel>
        </div>
      </div>
      <div className="container">
        <Banner
          title="Descomplique sua rotina com o Doutor Online"
        />
      </div>
    </section>
  );
}