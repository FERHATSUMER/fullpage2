import React from 'react';
import { PiBooks, PiExamLight } from 'react-icons/pi';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import './header.css';

const Header = () => {
  return (
    <header className='header-container'>
      <div className='header-right'>
        <img
          className='logo'
          src='https://media.licdn.com/dms/image/C560BAQG50mwENt9gSQ/company-logo_400_400/0/1632727910976?e=2147483647&v=beta&t=0w36fnGQ37PWTm253SLL0PVTr2ziC_mzcyO71DlLIDc'
          alt='logo'
        />
        <h1> Ferhat Sümer</h1>
      </div>

      <nav className='nav'>
        <ul>
          <li>
            <PiBooks />
            <a href='https://www.linkedin.com/in/ferhatsumer/' target='_blank'>
              <h4>Dersler</h4>
            </a>
          </li>
          <li>
            <PiExamLight />
            <a href='https://github.com/FERHATSUMER' target='_blank'>
              <h4>Sınavlar</h4>
            </a>
          </li>
          <li>
            <MdOutlineNotificationsActive />
            <a href='https://www.instagram.com/ferhatsumer_/' target='_blank'>
              <h4>Bildirim</h4>
            </a>
          </li>
          <li>
            <FiSettings />
            <a href='https://www.instagram.com/ferhatsumer_/' target='_blank'>
              <h4>Ayarlar</h4>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
