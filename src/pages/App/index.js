import React from 'react';
import Navbar from '../../componentes/Navbar';
import Hero from '../../componentes/Hero';
import Carousel from '../../componentes/Carousel'
import courflix from '../../data/courflix.json';
import './styles.scss';
import courflixImg from '../../assets/courflixImg.png';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      miLista: []
    }
  }
  
  //Traer la info del Local Storage y guardarlo en la sección mi lista.
  componentDidMount(){
    let infoList = [];
    const stringiedToList = localStorage.getItem("miList");
    if(stringiedToList){
      const toList = JSON.parse(stringiedToList);
      
      toList.map((item) => {
        infoList.push(item)
      })
    }

    this.setState({
      miLista: infoList
    })
  }
 
  render() {
    const { imgPortada, title, desc, year, age, time } = courflix[1].continuarViendo[6];
    const { location } = this.props;
    const { miLista } = this.state;
    return(
      <React.Fragment>
        <Navbar infoPath1={location.pathname} img={courflixImg} inicio="Inicio" series="Series" cont="Continuar viendo" agreg="Agregado recientemente" list="Mi lista" />
        <Hero infoPath1={location.pathname} img={imgPortada} title={title} desc={desc} year={year} age={age} time={time} />
        <Carousel infoPath1={location.pathname} infinite={true} titleSerie="Series" titleCont="Continuar viendo contenido de Natasha" titleAgr="Último lanzamiento" titleList="Mi lista" dataS={courflix[1].series} dataC={courflix[1].continuarViendo} dataA={courflix[1].agregadasRecientemente} miLista={miLista}/>
      </React.Fragment>
    )
  }
}

export default App;
