import React from 'react';
import Navbar from '../../componentes/Navbar';
import Hero from '../../componentes/Hero';
import Carousel from '../../componentes/Carousel'
import courflix from '../../data/courflix.json';
import './styles.scss';
import courflixImg from '../../assets/courflixImg.png';


class App extends React.Component {
 
  render() {
    const { img, title, desc, year, age, time } = courflix[0].portada;
    
    return(
      <React.Fragment>
        <Navbar img={courflixImg} inicio="Inicio" series="Series" cont="Continuar viendo" agreg="Agregado recientemente" list="Mi lista" menuH={true}/>
        <Hero img={img} title={title} desc={desc} year={year} age={age} time={time}/>
        <Carousel showCarousel={true} titleSerie="Series" titleCont="Continuar viendo contenido de Natasha" titleAgr="Último lanzamiento" dataS={courflix[1].series} dataC={courflix[1].continuarViendo} dataA={courflix[1].agregadasRecientemente}/>
      </React.Fragment>
    )
  }
}

export default App;
