import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Story } from "../../story";

interface Props {
  story: Story;
}

const StoryCard: React.FC<Props> = ({ story }: Props) => {
  let description: string[] = story.text.split(" ", 10);
  description.push("...");

  return (
    <Card>
      <Card.Content>
        <Card.Header> {story.title} </Card.Header>
        <Card.Meta>{story.title}</Card.Meta>
        <Card.Description>{description.join(" ")}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name='user' />
        {story.user}
      </Card.Content>
    </Card>
  );
};

export default StoryCard;
