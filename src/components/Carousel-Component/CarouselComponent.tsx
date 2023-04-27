import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Icon } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import { Story } from "../../story";
import StoryCard from "../Story-Card-Component/SotryCard";
import "pure-react-carousel/dist/react-carousel.es.css";

interface Props {
  data: Story[];
}

const CarouselComponent: React.FC<Props> = ({ data }: Props) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function handleDisplay() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleDisplay);
  });

  return (
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1}
      totalSlides={data.length}
      visibleSlides={
        windowWidth > 950 ? 5 : windowWidth <= 950 && windowWidth > 750 ? 4 : 3
      }
      className='carousel'
    >
      <div className='carousel__buttons'>
        <ButtonBack className='ui button btn-back'>
          <Icon name='chevron left' />
        </ButtonBack>
        <ButtonNext className='ui button btn-forward'>
          <Icon name='chevron right' />
        </ButtonNext>
      </div>
      <Slider className='slider'>
        {data.map((story, index) => (
          <Slide index={index}>
            <StoryCard story={story} />
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
};

export default CarouselComponent;
