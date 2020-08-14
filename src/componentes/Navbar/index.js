import React from 'react';
import './styles.scss';
import { Link } from 'react-scroll';
import { slide as Menu } from 'react-burger-menu';

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  //Para abrir y cerrar el menú hamburguesa en mobile.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  render() {
   const { img, inicio, series, cont, agreg, list, infoPath1 } = this.props;
    return(
      <header className="header">
        {infoPath1 && (
          <div className="div-menu">
          <Menu className="menu-navbar" isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
          <ul className="menu-navbar-ul">
            <li className="menu-navbar-li"><Link className="menu-link-navbar" onClick={() => this.closeMenu()} activeClass="active" to="hero" smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>{inicio}</Link></li>
            <li className="menu-navbar-li"><Link className="menu-link-navbar" onClick={() => this.closeMenu()} activeClass="active" to="series" smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>{series}</Link></li>
            <li className="menu-navbar-li"><Link className="menu-link-navbar" onClick={() => this.closeMenu()} activeClass="active" to="continuarViendo" smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>{cont}</Link></li>
            <li className="menu-navbar-li"><Link  className="menu-link-navbar" onClick={() => this.closeMenu()} activeClass="active" to="agregadoRecientemente" smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>{agreg}</Link></li>
            <li className="menu-navbar-li"><Link className="menu-link-navbar" onClick={() => this.closeMenu()} activeClass="active" to="lista" smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>{list}</Link></li>
            <a onClick={ this.showSettings } onClick={() => this.toggleMenu()} className="menu-hamburger" href=""></a>
          </ul>
          </Menu>
        </div>
        )}
        
        
        <img className="img-courflix" src={img} />
        
        <nav className="navbar">
        <ul className="navbar-ul">
          <li className="navbar-li"><Link activeClass="active" className="link-navbar" to="hero" smooth={true} offset={50} duration={700} onSetActive={this.handleSetActive}>{inicio}</Link></li>
          <li className="navbar-li"><Link activeClass="active" className="link-navbar" to="series" smooth={true} offset={-70} duration={700} onSetActive={this.handleSetActive}>{series}</Link></li>
          <li className="navbar-li"><Link activeClass="active" className="link-navbar" to="continuarViendo" smooth={true} offset={-70} duration={700} onSetActive={this.handleSetActive}>{cont}</Link></li>
          <li className="navbar-li"><Link activeClass="active" className="link-navbar" to="agregadoRecientemente" smooth={true} offset={50} duration={700} onSetActive={this.handleSetActive}>{agreg}</Link></li>
          <li className="navbar-li"><Link activeClass="active" className="link-navbar" to="lista" smooth={true} offset={50} duration={700} onSetActive={this.handleSetActive}>{list}</Link></li>
        </ul>
        </nav>
      </header>
      
    )
  }
}

export default Navbar;
