import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import React from "react";
import { Story } from "../../story";
import StoryCard from "../Story-Card-Component/SotryCard";
import "pure-react-carousel/dist/react-carousel.es.css";

interface Props {
  data: Story[];
}

const CarouselComponent: React.FC<Props> = ({ data }: Props) => {
  return (
    <CarouselProvider
      naturalSlideWidth={2}
      naturalSlideHeight={1}
      totalSlides={data.length}
      visibleSlides={3}
      className='carousel'
    >
      <ButtonBack className='ui button'>Back</ButtonBack>
      <ButtonNext className='ui button'>Next</ButtonNext>
      <Slider>
        {data.map((story) => (
          <Slide index={story.id}>
            <StoryCard story={story} />
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
};

export default CarouselComponent;
