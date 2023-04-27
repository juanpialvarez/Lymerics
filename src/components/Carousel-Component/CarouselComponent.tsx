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
      naturalSlideWidth={1.5}
      naturalSlideHeight={1}
      totalSlides={data.length}
      visibleSlides={3}
      className='carousel'
    >
      <div className='carousel__buttons'>
        <ButtonBack className='ui button btn-back'>Back</ButtonBack>
        <ButtonNext className='ui button btn-forward'>Next</ButtonNext>
      </div>
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
