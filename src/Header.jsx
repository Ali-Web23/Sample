import './Header.css';
import React from 'react';


function Header() {

    return (
      <div className="container">
      <div className="header">
        <div className="Navbar">
          <nav>
            <ul>
            <img className="logo1" src="../Vector Smart Object1.png" alt=""></img>
            <li><a id="logo" href>О нас</a></li>
            <li><a id="logo" href>Услуги</a></li>
            <li><a id="logo" href>Формат работы</a></li>
            <li><a id="logo" href>Отзывы</a></li>
            <li><a id="logo" href>Блок</a></li>
            <li><a id="logo" href>Контакты</a></li>
            </ul>
          </nav>
          <div className = "header_search">
            <input id ="logo2" type = 'search' placeholder = 'Начать работу'></input>
            <img className="search" src="../поиск.png" alt ="Нет"></img>
          </div>
        </div>
      </div>
      </div>
    
      );
  }
  
  export default Header;