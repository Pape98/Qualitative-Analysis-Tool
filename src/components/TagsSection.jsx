import React from 'react';

import { Segment, Header } from 'semantic-ui-react';
import { nanoid } from 'nanoid';

import { useSelector } from '../hooks';
import Tag from './Tag';

const TagsSection = () => {
  const tags = useSelector(state => state?.tags) || [];

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
                <React.Fragment key={nanoid()}>
                  <Header as='h3' dividing>
                    {currLetter?.toUpperCase()}
                  </Header>
                  <Tag label={tag} />
                </React.Fragment>
              );
            }
            return <Tag key={nanoid()} label={tag} />;
          })}
        </div>
      </Segment>
    </div>
  );
};
export default TagsSection;
