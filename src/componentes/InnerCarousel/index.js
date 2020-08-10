import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './styles.scss';


class InnerCarousel extends React.Component {
   constructor(props) {
    super(props);

    this.settings = {
      slidesToShow: 4,
      slideToScroll: 4,
      variableWidth: true,
      accesibility: true,
      infinit: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slideToScroll: 1,
          }
        }
      ]
    }
  } 
  render() {
    const { data, showLine, temporada, showCarousel, showSecond } = this.props;
    
    return(
      <React.Fragment>
        <Slider {...this.settings}>
           {showCarousel && ( data.map((peliculayserie, key) => {
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

           {showSecond && showCarousel && temporada && ( temporada.map((capitulo, key) => {
            console.log(capitulo)
            return(
              <div className="wrapper-innercarousel" key={key}>
              <img className="img-innercarousel" src={capitulo.imgcap} />
            </div>
            )
          })
          )} 
        </Slider>
      </React.Fragment>
    )
  }
}

export default InnerCarousel;