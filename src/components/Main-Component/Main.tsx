import React from "react";
import { Grid, Image, Segment } from "semantic-ui-react";
import mockData from "../../mock-data";
import SelectionView from "../Selection-View/SelectionView";
import MenuComponent from "../Menu-Component/MenuComponent";
import CarouselComponent from "../Carousel-Component/CarouselComponent";

const Main: React.FC = () => {
  return (
    <Grid celled padded>
      <Grid.Row>
        <Grid.Column width={3}>
          <Image
            src='../../../public/dummy_60x60_000000_e590de.png'
            size='small'
          />
        </Grid.Column>
        <Grid.Column width={10}></Grid.Column>
        <Grid.Column width={3}>
          <MenuComponent />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          <SelectionView />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Segment attached='bottom'>
          <CarouselComponent data={mockData} />
        </Segment>
      </Grid.Row>

      <Grid.Row style={{ height: "100px" }}>
        <Grid.Column width={16}></Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Main;
