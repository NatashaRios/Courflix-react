import React from 'react';
import InnerCarousel from '../InnerCarousel';
import courflix from '../../data/courflix.json';
import './styles.scss';

class Carousel extends React.Component {
  render() {
    const { titleSerie, titleCont, titleAgr, dataS, dataC, dataA, types, temporada, movies, titleSerieT, titleMovie, showCarousel, showSecond} = this.props;
    
    return(
      <React.Fragment>
          {showCarousel && (
            <React.Fragment>
                <div className="content-carousel content-series">
                  <h2 className="title-carousel" id="series">{titleSerie}</h2>
                  <InnerCarousel data={dataS} showCarousel={showCarousel}/>
                </div>
                <div className="content-carousel">
                  <h2 className="title-carousel" id="continuarViendo">{titleCont}</h2>
                  <InnerCarousel showLine={true} data={dataC} showCarousel={showCarousel}/>
                </div>
                <div className="content-carousel content-agregado">
                  <h2 className="title-carousel" id="agregadoRecientemente">{titleAgr}</h2>
                  <InnerCarousel data={dataA} showCarousel={showCarousel}/>
                </div>      
              </React.Fragment>
          )}
           
           {showSecond && (
            <React.Fragment>
              <div className="content-carousel">
                <h2 className="title-carousel">{titleSerieT}</h2>
                <InnerCarousel temporada={temporada} showSecond={showSecond} showCarousel={showCarousel}/>
              </div>
            </React.Fragment>
          )} 
      </React.Fragment>
    )
  }
}

export default Carousel;