import './style.scss';

import logo from '../../images/logo.png';

export default function Header() {
  return (
    <header className="container d-flex align-items-center justify-content-between">
      <img src={logo} alt="logo" />
      <div className="d-flex align-items-center btns-container">
        <a href="https://google.com" target='_blank' rel="noreferrer" className='transparent-btn d-flex align-items-center justify-content-center'>
          Entrar
        </a>
        <a href="https://google.com" target='_blank' rel="noreferrer" className='header-btn d-flex align-items-center justify-content-center'>
          Teste grátis
        </a>
      </div>
    </header>
  );
}