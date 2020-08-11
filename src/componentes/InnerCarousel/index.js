import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './styles.scss';


class InnerCarousel extends React.Component {
    constructor(props) {
    super(props);

    this.settings = {
      slidesToShow: props.infoPath1 && props.data ? 4 : 3,
      slideToScroll: 3,
      variableWidth: true,
      accesibility: true,
      infinite: props.infinite,
      arrows: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slideToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: props.infoPath1 ? {slidesToShow: 1, slideToScroll: 1} : "unslick"
        }
        
      ]
    }
  }  
  render() {
    const { data, showLine, temporada, movies, infoPath1, miLista } = this.props;
    console.log(miLista)
    
    return(
      <React.Fragment>
        <Slider {...this.settings}>
            {infoPath1 && miLista && ( miLista.map((list, key) => {
           return(
            <div className="wrapper-innercarousel-list" key={key}>
           <Link to={`/seriesypeliculas/${list.id}`}>
           <img  className="img-innercarousel" src={list.imgCarousel}/>
           <img className="img-innercarousel-mobile" src={list.imgMobile}/>
           </Link>
           </div>
           )
         })
           
         )}  
 
           { infoPath1 && data &&( data.map((peliculayserie, key) => {
            return(
              <div className="wrapper-innercarousel" key={key}>
                <Link to={`/seriesypeliculas/${peliculayserie.id}`}>
                <img  className="img-innercarousel" src={peliculayserie.imgCarousel}/>
                <img className="img-innercarousel-mobile" src={peliculayserie.imgMobile}/>
                </Link>
                {showLine && (
                  <div className="line-innercarousel"><div className="lineProgress-innercarousel"></div></div>
                )}
              </div>
            )
          }))} 

           {temporada && ( temporada.map((capitulo, key) => {
            return(
              <div className="wrapper-innercarousel-second" key={key}>
                <img className="img-innercarousel-second" src={capitulo.imgcap} />
                <div className="text-second">
                  <p className="title-innercarousel-second">{capitulo.titlecap}</p>
                  <p className="desc-innercarousel-second">{capitulo.descap}</p>
                </div>
              </div>
            )
          })
          )} 

           {movies && ( movies.map ((movie, key) => {
             return(
              <div className="wrapper-innercarousel-second" key={key}>
                <img className="img-innercarousel-second" src={movie.imgCarousel} />
                <div className="text-second">
                  <p className="title-innercarousel-second">{movie.title}</p>
                  <p className="desc-innercarousel-second">{movie.desc}</p>
                </div>
              </div>
             )
          }))} 
        </Slider>
      </React.Fragment>
    )
  }
}

export default InnerCarousel;