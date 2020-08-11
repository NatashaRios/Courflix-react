import React from 'react';
import InnerCarousel from '../InnerCarousel';
import './styles.scss';

class Carousel extends React.Component {
  render() {
    const { titleSerie, titleCont, titleAgr, dataS, dataC, dataA, types, temporada, movies,  titleMovie, infoPath1,  infoPath2, infinite, titleList, miLista } = this.props;
    
    return(
      <React.Fragment>
          {infoPath1 && (
            <React.Fragment>
                <div className="content-carousel content-series">
                  <h2 className="title-carousel" >{titleList}</h2>
                  <InnerCarousel infoPath1={infoPath1} infinite={infinite} miLista={miLista}/>
                </div>
                <div className="content-carousel content-series">
                  <h2 className="title-carousel" id="series">{titleSerie}</h2>
                  <InnerCarousel data={dataS} infoPath1={infoPath1} infinite={infinite}/>
                </div>
                <div className="content-carousel">
                  <h2 className="title-carousel" id="continuarViendo">{titleCont}</h2>
                  <InnerCarousel showLine={true} data={dataC} infoPath1={infoPath1} infinite={infinite}/>
                </div>
                <div className="content-carousel content-agregado">
                  <h2 className="title-carousel" id="agregadoRecientemente">{titleAgr}</h2>
                  <InnerCarousel data={dataA} infoPath1={infoPath1} infinite={infinite} />
                </div>      
              </React.Fragment>
          )}
           
           {infoPath2 && (
            <React.Fragment>
              <div className="content-carousel">
                {types == "serie"? 
                <h2 className="title-carousel">{titleSerie}</h2>
                : <h2 className="title-carousel">{titleMovie}</h2> 
                } 
                {types == "serie" ? 
                  <InnerCarousel temporada={temporada} infoPath2={infoPath2} infinite={infinite} />
                  : <InnerCarousel movies={movies[0]} infoPath2={infoPath2} infinite={infinite} /> 
                }
              </div>
            </React.Fragment>
          )} 
      </React.Fragment>
    )
  }
}

export default Carousel;