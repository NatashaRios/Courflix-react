import React from 'react';
import './styles.scss';
import Navbar from '../../componentes/Navbar';
import Hero from '../../componentes/Hero';
import Carousel from '../../componentes/Carousel';
import courflix from '../../data/courflix.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import courflixImg from '../../assets/courflixImg.png';
import { Link } from 'react-router-dom';


class SeriesyPeliculas extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      img: "",
      title: "",
      parati: "",
      year: "",
      age: "",
      time: "",
      desc: "",
      types: "",
      temporada: "",
      movies: "",
      titleCarousel: ""
    }
  }

  componentDidMount(){
    const datas = [...courflix[1].series,...courflix[1].continuarViendo,...courflix[1].agregadasRecientemente]
    const filtered = datas.filter((data)=> {
      return data.id == this.props.match.params.seriesypeliculasId;
    })
    const filterMovies = datas.filter((movie) => {
      return movie.type == "movie"
    })
      this.setState({
      img: filtered[0].imgPortada,
      title: filtered[0].title,
      parati: filtered[0].parati,
      year: filtered[0].year,
      age: filtered[0].age,
      time: filtered[0].time,
      desc: filtered[0].desc,
      types: filtered[0].type,
      temporada: filtered[0].temporada1,
      movies: filterMovies
    }) 
  }
  
  render() {
    const { img, title, parati, year, age, time, desc, types, temporada, movies } = this.state;
    const { location } = this.props
    const moviesArr = []
    moviesArr.push(movies);
    console.log(location)
    return(
      <React.Fragment>
        <Link to="/">
        <Navbar img={courflixImg}/>
        </Link>
        <Hero buttonReproducir={true} infoPath={location.pathname} img={img} title={title} desc={desc} parati={parati} year2={year} age2={age} time2={time} like={<FontAwesomeIcon icon={faThumbsUp} />} dislike={<FontAwesomeIcon icon={faThumbsDown}  />}/>
        <Carousel infoPath={location.pathname} showSecond={true} infinite={false} types={types} types={types} temporada={temporada} movies={moviesArr} titleSerie="Temporada 1" titleMovie="Películas recomendadas"/>  
      </React.Fragment>
    )
  }
}

export default SeriesyPeliculas;