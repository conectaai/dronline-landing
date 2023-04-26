import './style.scss';

import systemPrint from '../../images/system-print.png';
import DefaultBtn from '../default-btn';
import partners from '../../images/partners.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="background">
        <svg width="1440" height="1000" viewBox="0 0 1440 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H1440V706C1440 706 1247.5 999.5 720 999.5C192.5 999.5 0 706 0 706V0Z" fill="#7367F0"/>
        </svg>
      </div>
      <div className="container">
          <div className="hero-text-container mb-lg d-flex align-items-center flex-column mx-auto">
            <h1 className='hero-title mb-sm'>Gerencie sua clínica com eficiência e tecnologia</h1>
            <p className='text-18-regular'>Maximize o potencial da sua clínica com recursos inteligentes e personalizados para atender melhor seus pacientes</p>
            <DefaultBtn
              title='Teste gratuitamente'
              link='https://google.com'
            />
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="img-container">
                <img src={systemPrint} alt="hero" />
              </div>
            </div>
          </div>
      </div>
      <div className="partners">
        <div className="col-lg-8 mx-auto">
          <img src={partners} alt="parceiros" />
        </div>
      </div>
    </section>
  );
}