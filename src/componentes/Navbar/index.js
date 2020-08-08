import React from 'react';
import courflix from '../../assets/courflix.png';
import './styles.scss';
import { Link } from 'react-scroll';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

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
   const { inicio, series, cont, agreg, list } = this.props;
    return(
      <header className="header">
        <div className="div-menu">
          <Menu className="menu-navbar" isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
          <ul className="menu-navbar-ul">
            <li className="menu-navbar-li"><Link activeClass="active" to="hero" smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><a className="menu-link-navbar" href="#" onClick={() => this.closeMenu()}>{inicio}</a></Link></li>
            <li className="menu-navbar-li"><Link activeClass="active" to="series" smooth={true} offset={-70} duration={500} onSetActive={this.handleSetActive}><a className="menu-link-navbar" href="#" onClick={() => this.closeMenu()}>{series}</a></Link></li>
            <li className="menu-navbar-li"><Link activeClass="active" to="continuarViendo" smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><a className="menu-link-navbar" href="#" onClick={() => this.closeMenu()}>{cont}</a></Link></li>
            <li className="menu-navbar-li"><Link activeClass="active" to="agregadoRecientemente" smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><a className="menu-link-navbar" href="#" onClick={() => this.closeMenu()}>{agreg}</a></Link></li>
            <li className="menu-navbar-li"><a className="menu-link-navbar" href="#" onClick={() => this.closeMenu()}>{list}</a></li>
          </ul>
          </Menu>
          <a className="menu-hamburger" href=""><FontAwesomeIcon icon={faBars} className="fa-bars"  onClick={() => this.toggleMenu()}/></a>
        </div>
        
        <img className="img-courflix" src={courflix} />
        
        <nav className="navbar">
        <ul className="navbar-ul">
          <li className="navbar-li"><Link activeClass="active" to="hero" smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><a className="link-navbar" id="inicio-navbar" href="#">{inicio}</a></Link></li>
          <li className="navbar-li"><Link activeClass="active" to="series" smooth={true} offset={-70} duration={500} onSetActive={this.handleSetActive}><a className="link-navbar" href="#">{series}</a></Link></li>
          <li className="navbar-li"><Link activeClass="active" to="continuarViendo" smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><a className="link-navbar" href="#">{cont}</a></Link></li>
          <li className="navbar-li"><Link activeClass="active" to="agregadoRecientemente" smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><a className="link-navbar" href="#">{agreg}</a></Link></li>
          <li className="navbar-li"><a className="link-navbar" href="#">{list}</a></li>
        </ul>
        </nav>
      </header>
      
    )
  }
}

export default Navbar;

{/* <Link activeClass="active" to="elNombreDeTuSeccion" smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
</Link> */}