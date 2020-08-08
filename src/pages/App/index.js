import React from 'react';
import Navbar from '../../componentes/Navbar';
import Hero from '../../componentes/Hero';
import Carousel from '../../componentes/Carousel'
import seriesypeliculas from '../../data/seriesypeliculas.json';
import './styles.scss';

class App extends React.Component {
  render() {
    const { img, title, desc, year, age, time } = seriesypeliculas[0].portada;
    return(
      <React.Fragment>
        <Navbar inicio="Inicio" series="Series" cont="Continuar viendo" agreg="Agregado recientemente" list="Mi lista"/>
        <Hero img={img} title={title} desc={desc} year={year} age={age} time={time}/>
        <Carousel titleSerie="Series" titleCont="Continuar viendo contenido de Natasha" titleAgr="Último lanzamiento" data={seriesypeliculas[1]}/>
      </React.Fragment>
    )
  }
}

export default App;
