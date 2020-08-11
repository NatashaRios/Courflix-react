import React from 'react';
import InnerCarousel from '../InnerCarousel';
import './styles.scss';

class Carousel extends React.Component {
  render() {
    const { titleSerie, titleCont, titleAgr, dataS, dataC, dataA, types, temporada, movies,  titleMovie, showCarousel, showSecond, infoPath, infinite, related } = this.props;
    
    return(
      <React.Fragment>
          {showCarousel && (
            <React.Fragment>
                <div className="content-carousel content-series">
                  <h2 className="title-carousel" id="series">{titleSerie}</h2>
                  <InnerCarousel data={dataS} showCarousel={showCarousel} infinite={infinite} related={related}/>
                </div>
                <div className="content-carousel">
                  <h2 className="title-carousel" id="continuarViendo">{titleCont}</h2>
                  <InnerCarousel showLine={true} data={dataC} showCarousel={showCarousel} infinite={infinite} related={related}/>
                </div>
                <div className="content-carousel content-agregado">
                  <h2 className="title-carousel" id="agregadoRecientemente">{titleAgr}</h2>
                  <InnerCarousel data={dataA} showCarousel={showCarousel} infinite={infinite} related={related}/>
                </div>      
              </React.Fragment>
          )}
           
           {showSecond && (
            <React.Fragment>
              <div className="content-carousel">
                {types == "serie"? 
                <h2 className="title-carousel">{titleSerie}</h2>
                : <h2 className="title-carousel">{titleMovie}</h2> 
                } 
                {types == "serie" ? 
                  <InnerCarousel temporada={temporada} infoPath={infoPath} infinite={infinite} />
                  : <InnerCarousel movies={movies[0]} infoPath={infoPath} infinite={infinite} /> 
                }
              </div>
            </React.Fragment>
          )} 
      </React.Fragment>
    )
  }
}

export default Carousel;