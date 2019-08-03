import React from 'react';
import './Slider.css';
import styled from 'styled-components';
import LEFT_ARROW_URL from '../assets/images/left-arrow.svg';
import RIGHT_ARROW_URL from '../assets/images/right-arrow.svg';

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      currentIndex: 0,
      translateValue: 0
    }
  }

  componentDidMount() {
    const { interval, images } = this.props;
    this.setState({
      images: images.map(({ url }) => url)
    })
    setInterval(() => this.goToNextSlide(), interval * 1000);
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
    const slide = document.querySelector('.slide');
    if (slide) {
      return slide.clientWidth;
    } else {
      return 0;
    }
  }

  render() {
    const { images } = this.props;
    return (
      <div className="slider">
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
          {
            images.map(({ url, description }, index) => (
              <Slide key={index} image={url} description={description} />
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

const Slide = ({ image, description }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return (
    <div className="slide" style={styles}>
      { description ? <SDescriptions>{ description }</SDescriptions> : undefined }
    </div>
  );
}

const SDescriptions = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.75);
  color: rgba(250, 250, 250, 0.9);
  padding: 10px 20px;
  display: flex;
`;

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