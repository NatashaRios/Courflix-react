import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './styles.scss';


class InnerCarousel extends React.Component {
    constructor(props) {
    super(props);

    this.settings = {
      slidesToShow: props.related? 4 : 3,
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
          settings: props.related ? {slidesToShow: 1, slideToScroll: 1} : "unslick"
        }
        
      ]
    }
  }  
  render() {
    const { data, showLine, temporada, showCarousel, movies, infoPath } = this.props;
    console.log(this.props.related)
    return(
      <React.Fragment>
        <Slider {...this.settings}>
           { showCarousel && ( data.map((peliculayserie, key) => {
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