import React, { useState } from 'react';
import { Grid, Icon, Image, Segment } from 'semantic-ui-react';
import mockData from '../../mock-data';
import SelectionView from '../Selection-View/SelectionView';
import MenuComponent from '../Menu-Component/MenuComponent';
import CarouselComponent from '../Carousel-Component/CarouselComponent';
import WriteComponent from '../Write-Component/WriteComponent';

const Main: React.FC = () => {
  const [displayWrite, setDisplayWrite] = useState<boolean>(false);
  const [newStory, setNewStory] = useState('');

  return (
    <Grid celled padded>
      <Grid.Row>
        <Grid.Column width={3}>
          <Image
            src='../../../public/dummy_60x60_000000_e590de.png'
            className='logo__top'
          />
        </Grid.Column>
        <Grid.Column width={10}></Grid.Column>
        <Grid.Column width={3}>
          <MenuComponent />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          {!displayWrite ? (
            <SelectionView
              displayWrite={displayWrite}
              setDisplayWrite={setDisplayWrite}
            />
          ) : (
            <WriteComponent
              displayWrite={displayWrite}
              setDisplayWrite={setDisplayWrite}
              newStory={newStory}
              setNewStory={setNewStory}
            />
          )}
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Segment attached='bottom'>
          <CarouselComponent data={mockData} />
        </Segment>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={16}>
          <div className='footer'>
            <Icon name='facebook f' size='huge'></Icon>
            <Icon name='instagram' size='huge'></Icon>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Main;
