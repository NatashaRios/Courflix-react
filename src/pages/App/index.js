import React from 'react';
import Navbar from '../../componentes/Navbar';
import Hero from '../../componentes/Hero';
import Carousel from '../../componentes/Carousel'
import courflix from '../../data/courflix.json';
import './styles.scss';
import courflixImg from '../../assets/courflixImg.png';


class App extends React.Component {
 
  render() {
    const { imgPortada, title, desc, year, age, time } = courflix[1].continuarViendo[6];
    console.log()
    return(
      <React.Fragment>
        <Navbar img={courflixImg} inicio="Inicio" series="Series" cont="Continuar viendo" agreg="Agregado recientemente" list="Mi lista" menuH={true}/>
        <Hero img={imgPortada} title={title} desc={desc} year={year} age={age} time={time} linkReproducir={true}/>
        <Carousel showCarousel={true} titleSerie="Series" infinite={true} related={true} titleCont="Continuar viendo contenido de Natasha" titleAgr="Último lanzamiento" dataS={courflix[1].series} dataC={courflix[1].continuarViendo} dataA={courflix[1].agregadasRecientemente}/>
      </React.Fragment>
    )
  }
}

export default App;
