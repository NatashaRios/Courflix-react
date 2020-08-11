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
    }
  }

 handleLike() {
   const { likeColor } = this.state;

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
   const { dislikeColor } = this.state;

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

 handleClick(info) {
   const stringifiedList = localStorage.getItem("miList");
   if(stringifiedList){
     const parsedList = JSON.parse(stringifiedList);
     const included = parsedList.some(peliculayserie => {
       return info.id == peliculayserie.id
     })
     if(!included) {
      parsedList.push(info);
      const newList = JSON.stringify(parsedList);
      localStorage.setItem("miList", newList)
     } return
   } else {
     const parsedList = [info];
     const newList = JSON.stringify(parsedList);
     localStorage.setItem("miList", newList);
   }
 }
 

  render() {
    const { img, title, desc, year, age, time, parati, year2, age2, time2, like, dislike, infoPath1, infoPath2, info } = this.props;
    const { likeColor, dislikeColor } = this.state;
   console.log(info)
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
        {infoPath1 && (<Link to="/seriesypeliculas/23">
          <React.Fragment>
          <button className="button-hero reproducir-hero" >Reproducir</button>
          </React.Fragment>
        </Link>)}

        {infoPath2 && (
          <React.Fragment>
            <button className="button-hero reproducir-hero" >Reproducir</button>
          </React.Fragment>
        )}
     
        <button className="button-hero lista-hero" onClick={() => this.handleClick(info)}>+ mi lista</button>
        {infoPath2 && (
          <React.Fragment>
            <button onClick={() => this.handleLike()} className={likeColor}>{like}</button>
            <button onClick={() => this.handleDislike()} className={dislikeColor}>{dislike}</button>
          </React.Fragment>
        )}
        
        </div>
        <p className="desc-hero"> {desc} </p>
      </div>
    )
  }
}

export default Hero;

/* style={{backgroundImage:`url(${seriesypeliculas[0].img})`}} */