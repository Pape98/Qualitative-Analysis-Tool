import { Segment, Label } from 'semantic-ui-react';
import { useSelector } from '../hooks';

const Quote = ({ quote }) => {
  const selectedTag = useSelector(state => state?.selectedTag) || '';
  const tagsComponent = quote.tags.map(tag => (
    <Label color={tag === selectedTag ? 'green' : 'gray'}>{tag}</Label>
  ));
  return (
    <Segment.Group>
      <Segment>
        <p className='quoteText'>"{quote?.text}"</p>
      </Segment>
      <Segment>
        <div class='quotesLabel'>{tagsComponent}</div>
      </Segment>
    </Segment.Group>
  );
};

export default Quote;
