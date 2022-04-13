import { useEffect } from 'react';
import { Segment } from 'semantic-ui-react';

import { useSelector } from '../hooks';

const TagsSection = () => {
  const tags = useSelector(state => state);
  console.log(tags);
  return (
    <Segment>
      <h1>Tags</h1>
    </Segment>
  );
};
export default TagsSection;
