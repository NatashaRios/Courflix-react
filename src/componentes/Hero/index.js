import React from 'react';
import seriesypeliculas from '../../data/seriesypeliculas.json';
import './styles.scss';

class Hero extends React.Component {
  render() {
    const { img, title, desc, year, age, time } = this.props;
    return(
      <div className="wrapper-hero" id="hero" style={{ backgroundImage: `url(${img})` }}>
        <h1 className="title-hero"> {title} </h1>
        <p className="hero-mobile year-hero">{year}</p>
        <p className="hero-mobile age-hero">{age}</p>
        <p className="hero-mobile time-hero">{time}</p>
        <div>
        <button className="button-hero reproducir-hero">Reproducir</button>
        <button className="button-hero lista-hero">+ mi lista</button>
        </div>
        <p className="desc-hero"> {desc} </p>
      </div>
    )
  }
}

export default Hero;

/* style={{backgroundImage:`url(${seriesypeliculas[0].img})`}} */