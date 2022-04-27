import { Segment, Label } from 'semantic-ui-react';
import { nanoid } from 'nanoid';

import { useSelector } from '../hooks';
import Tag from './Tag';

const Quote = ({ quote }) => {
  const selectedTag = useSelector(state => state?.selectedTag) || '';
  const tagsComponent = quote.tags.map(tag => (
    <Tag
      key={nanoid()}
      label={tag}
      color={tag === selectedTag ? 'green' : 'grey'}
    />
  ));
  return (
    <Segment.Group>
      <Segment>
        <p className='quoteText'>"{quote?.text}"</p>
      </Segment>
      <Segment className='quoteInfo'>
        <div className='quotesLabel'>{tagsComponent}</div>
        <Label color='black'>{quote.author}</Label>
      </Segment>
    </Segment.Group>
  );
};

export default Quote;
