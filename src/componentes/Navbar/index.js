import React from 'react';
import courflix from '../../assets/courflix.png';
import './styles.scss';


class Navbar extends React.Component {
  render() {
    return(
      <header className="header">
        <img className="img-courflix" src={courflix} />
        
        <nav className="navbar">
        <ul className="navbar-ul">
          <li className="navbar-li"><a className="link-navbar" href="#">Inicio</a></li>
          <li className="navbar-li"><a className="link-navbar" href="#">Series</a></li>
          <li className="navbar-li"><a className="link-navbar" href="#">Películas</a></li>
          <li className="navbar-li"><a className="link-navbar" href="#">Agregados recientemente</a></li>
          <li className="navbar-li"><a className="link-navbar" href="#">Mi lista</a></li>
        </ul>
        </nav>
      </header>
      
    )
  }
}

export default Navbar;