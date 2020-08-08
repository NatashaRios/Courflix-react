import React from 'react';
import Slider from 'react-slick';
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
    const { data, showLine } = this.props;
    console.log(data)
    return(
      <React.Fragment>
        <Slider {...this.settings}>
          {data.map((peliculayserie, key) => {
            return(
              <div className="wrapper-innercarousel" key={key}>
                <img className="img-innercarousel" key={key}  src={peliculayserie.imgCarousel}/>
                <img className="img-innercarousel-mobile" key={key}  src={peliculayserie.imgMobile}/>
                {showLine && (
                  <div class="line-innercarousel"><div class="lineProgress-innercarousel"></div></div>
                )}
              </div>
            )
          })}
        </Slider>
      </React.Fragment>
    )
  }
}

export default InnerCarousel;