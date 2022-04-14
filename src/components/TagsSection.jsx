import { Segment, Label, Header } from 'semantic-ui-react';

import { useSelector } from '../hooks';

const TagsSection = () => {
  const tags = useSelector(state => state?.tags) || [];
  const tagsComponent = tags.map(tag => <Label>{tag}</Label>);

  let currLetter = '';
  return (
    <div id='tagsSection'>
      <h1>List of Tags</h1>
      <Segment>
        <div className='tagsContainer'>
          {tags.map(tag => {
            if (tag[0] !== currLetter) {
              currLetter = tag[0];
              return (
                <>
                  <Header as='h3' dividing>
                    {currLetter.toUpperCase()}
                  </Header>
                  <Label>{tag}</Label>
                </>
              );
            }

            return <Label>{tag}</Label>;
          })}
        </div>
      </Segment>
    </div>
  );
};
export default TagsSection;
