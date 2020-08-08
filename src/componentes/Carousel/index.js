import React from 'react';
import InnerCarousel from '../InnerCarousel';
import seriesypeliculas from '../../data/seriesypeliculas.json';
import './styles.scss';

class Carousel extends React.Component {
  render() {
    const { titleSerie, titleCont, titleAgr, data } = this.props;
    return(
      <React.Fragment>
        <div className="content-carousel content-series">
          <h2 className="title-carousel" id="series">{titleSerie}</h2>
          <InnerCarousel data={data.series}/>
        </div>
        <div className="content-carousel">
          <h2 className="title-carousel" id="continuarViendo">{titleCont}</h2>
          <InnerCarousel showLine={true} data={data.continuarViendo}/>
        </div>
        <div className="content-carousel content-agregado">
          <h2 className="title-carousel" id="agregadoRecientemente">{titleAgr}</h2>
          <InnerCarousel data={data.agregadasRecientemente}/>
        </div>
      </React.Fragment>
    )
  }
}

export default Carousel;