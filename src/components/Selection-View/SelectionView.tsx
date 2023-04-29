import React, { useEffect, useState } from 'react';
import { Grid, Button, Segment, Divider } from 'semantic-ui-react';

interface Props {
  displayWrite: boolean;
  setDisplayWrite: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectionView: React.FC<Props> = ({
  displayWrite,
  setDisplayWrite,
}: Props) => {
  const [displayDivider, setDisplayDivider] = useState<boolean>(
    window.innerWidth <= 770 ? false : true
  );

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 770) {
        setDisplayDivider(false);
      } else if (window.innerWidth > 770) {
        setDisplayDivider(true);
      }
    }
    window.addEventListener('resize', handleResize);
  });

  return (
    <Segment placeholder>
      {displayDivider ? (
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <Button content='Write' icon='write' size='big' />
          </Grid.Column>
          <Grid.Column verticalAlign='middle'>
            <Button content='Edit' icon='edit' size='big' />
          </Grid.Column>
        </Grid>
      ) : (
        <div>
          <Button
            content='Write'
            icon='write'
            size='big'
            onClick={() => {
              setDisplayWrite(true);
            }}
          />
          <Divider horizontal>Or</Divider>
          <Button content='Edit' icon='edit' size='big' />
        </div>
      )}
      {displayDivider && <Divider vertical>Or</Divider>}
    </Segment>
  );
};

export default SelectionView;
