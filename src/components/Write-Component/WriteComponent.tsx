import React, { useRef, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

interface Props {
  displayWrite: boolean;
  setDisplayWrite: React.Dispatch<React.SetStateAction<boolean>>;
  newStory: string;
  setNewStory: React.Dispatch<React.SetStateAction<string>>;
}

type options = {
  key: string;
  text: string;
  value: string;
};

const WriteComponent: React.FC<Props> = ({
  displayWrite,
  setDisplayWrite,
  newStory,
  setNewStory,
}: Props) => {
  const options: options[] = [
    { key: 'm', text: 'He', value: 'he' },
    { key: 'f', text: 'She', value: 'she' },
    { key: 'o', text: 'They', value: 'they' },
  ];
  const [storyOne, setStoryOne] = useState<string>('');
  const [storyTwo, setStoryTwo] = useState<string>('');
  const [storyThree, setStoryThree] = useState<string>('');
  const [storyFour, setStoryFour] = useState<string>(options[0].value);
  const [storyFive, setStoryFive] = useState<string>('');
  const [storySix, setStorySix] = useState<string>('');
  const submit = useRef<any>(null);

  const handleSubmit = async (): Promise<void> => {
    setNewStory(`There once was a ${storyOne} named ${storyTwo}.
    Who ${storyThree}.
    ${storyFour} ${storyFive},
    and ${storySix}`);
  };

  const handleOnChange = (
    e: React.SyntheticEvent<HTMLElement, Event>
  ): void => {
    const value = (e.target as HTMLInputElement).value;
    setStoryFour(value);
  };

  return (
    <>
      <h1>Lymeric</h1>
      <Segment>
        <Form ref={submit} widths='equal' onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              required={true}
              fluid
              label='There once was a'
              placeholder='Noun'
              onChange={(e) => setStoryOne(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              required={true}
              fluid
              label='Named'
              placeholder='Name'
              onChange={(e) => setStoryTwo(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              required={true}
              fluid
              label='Who'
              placeholder='Sentence'
              onChange={(e) => setStoryThree(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Select
              required={true}
              fluid
              label='Gender'
              options={options}
              placeholder='Gender'
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
            <Form.Input
              required={true}
              fluid
              label='Free sentence'
              placeholder='Sentence'
              onChange={(e) => setStoryFive(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              required={true}
              fluid
              label='And'
              placeholder='Sentence'
              onChange={(e) => setStorySix(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Segment>
      <div className='buttons__write'>
        <Button
          content='Back'
          icon='arrow circle left'
          size='big'
          labelPosition='left'
          onClick={() => setDisplayWrite(false)}
        />
        <Button
          icon='arrow circle right'
          content='Done'
          size='big'
          labelPosition='right'
          onClick={() => {
            submit?.current?.handleSubmit();
            setDisplayWrite(false);
          }}
        />
      </div>
    </>
  );
};

export default WriteComponent;
