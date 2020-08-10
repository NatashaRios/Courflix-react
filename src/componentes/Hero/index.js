import React from 'react';
import courflix from '../../data/courflix.json';
import './styles.scss';
import { Link } from 'react-router-dom';

class Hero extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      likeColor: "grey",
      dislikeColor: "grey"
      /* likeActive: false,
      dislikeActive: false */
    }
  }

 handleLike() {
   const { likeActive, likeColor } = this.state;
  /*  if(likeActive == false) {
    if(likeActive == false && likeColor == "grey") {
      this.setState({
        likeCOlor: "green",
        likeActive: true,
      })
    }else{
      this.setState({
        likeColor: "grey",
        likeActive: false
      })
    }
   } else {
    this.setState({
      dislikeColor: "grey",
      dislikeActive: false,
      likeColor: "green",
      likeActive: false
    })
   }  */

   if(likeColor == "grey"){
     this.setState({
        likeColor: "green",
       dislikeColor: "grey"
     })
   }else{
     this.setState({
       likeColor: "grey"
     })
   }
 }

 handleDislike(){
   const { dislikeActive, dislikeColor } = this.state;
  /*  if(dislikeActive == false){
    if(dislikeActive == false && dislikeColor == "grey") {
      this.setState({
        dislikeColor: "red",
        dislikeActive: true,
      })
    }else{
      this.setState({
        dislikeColor: "grey",
        dislikeActive: false
      })
    }
   }else {
      this.setState({
        dislikeColor: "red",
        dislikeActive: false,
        likeColor: "grey",
        likeActive: false
      })
   }   */
   if(dislikeColor == "grey"){
     this.setState({
       likeColor: "grey",
       dislikeColor: "red"
     })
   }else{
     this.setState({
       dislikeColor: "grey"
     })
   }
 }

  render() {
    const { img, title, desc, year, age, time, parati, year2, age2, time2, like, dislike } = this.props;
    const { likeColor, dislikeColor } = this.state;
    return(
      <div className="wrapper-hero" id="hero" style={{ backgroundImage: `url(${img})` }}>
        <h1 className="title-hero"> {title} </h1>
        <p className="hero-mobile year-hero">{year}</p>
        <p className="hero-mobile age-hero">{age}</p>
        <p className="hero-mobile time-hero">{time}</p>
        <p className="hero-second parati-hero-second">{parati}</p>
        <p className="hero-second year-hero-second">{year2}</p>
        <p className="hero-second age-hero-second">{age2}</p>
        <p className="hero-second time-hero-second">{time2}</p>
        <div>
        <button className="button-hero reproducir-hero">Reproducir</button>
        <button className="button-hero lista-hero">+ mi lista</button>
        <button onClick={() => this.handleLike()} className={likeColor}>{like}</button>
        <button onClick={() => this.handleDislike()} className={dislikeColor}>{dislike}</button>
        </div>
        <p className="desc-hero"> {desc} </p>
      </div>
    )
  }
}

export default Hero;

/* style={{backgroundImage:`url(${seriesypeliculas[0].img})`}} */