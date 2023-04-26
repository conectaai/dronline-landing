import './style.scss';

import logo from '../../images/logo.png';

export default function Footer() {

  const listItem = (link: string, label: string) => (
    <li>
      <a 
        href={link}
        target="_blank"
        rel="noreferrer"
        className='text-14-regular'
      >
        {label}
      </a>
    </li>
  );

  const socialLink = (link: string, icon: string) => (
    <li>
      <a 
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <i className={icon}></i>
      </a>
    </li>
  );  
  
  return (
    <footer>
      <div className="container">
        <img src={logo} alt="" className='footer-logo'/>
        <div className="footer-info d-flex align-items-center justify-content-between">
          <ul>
            {listItem('https://www.google.com', 'Termos de Uso')}
            {listItem('https://www.google.com', 'Política de Privacidade')}
            {listItem('https://www.google.com', 'Contato')}
          </ul>
          <ul className='d-flex align-items-center social-list'>
            {socialLink('https://www.google.com', 'fa-brands fa-facebook')}
            {socialLink('https://www.google.com', 'fa-brands fa-linkedin')}
            {socialLink('https://www.google.com', 'fa-brands fa-instagram')}
          </ul>
        </div>
      </div>
    </footer>
  );
}