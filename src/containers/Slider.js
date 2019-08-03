import React from 'react';
import './Slider.css';
import LEFT_ARROW_URL from '../assets/images/left-arrow.svg';
import RIGHT_ARROW_URL from '../assets/images/right-arrow.svg';

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  componentDidMount() {
    setInterval(() => this.goToNextSlide(), 10 * 1000);
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0)
      return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div className="slider">

        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
          {
            this.state.images.map((image, i) => (
              <Slide key={i} image={image} />
            ))
          }
        </div>

        <LeftArrow
          goToPrevSlide={this.goToPrevSlide}
        />

        <RightArrow
          goToNextSlide={this.goToNextSlide}
        />
      </div>
    );
  }
}

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className="slide" style={styles}></div>
}


const LeftArrow = (props) => {
  const styles = {
    opacity: 0.4,
    marginLeft: -3
  }
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <img src={LEFT_ARROW_URL} style={styles} alt="left" />
    </div>
  );
}


const RightArrow = (props) => {
  const styles = {
    opacity: 0.4,
    marginRight: -3
  }
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <img src={RIGHT_ARROW_URL} style={styles} alt="right" />
    </div>
  );
}

export default Slider;