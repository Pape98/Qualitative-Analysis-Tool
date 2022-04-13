import { Dropdown } from 'semantic-ui-react';
import { useSelector } from '../hooks';

const QuotesSearchDropdown = () => {
  const tags = useSelector(state => state?.tags) || [];

  const tagsOptions = tags.map(tag => {
    return {
      key: tag,
      value: tag,
      text: tag,
    };
  });

  return (
    <>
      <Dropdown
        placeholder='Select one or more tags'
        fluid
        search
        multiple
        selection
        options={tagsOptions}
      />
    </>
  );
};

export default QuotesSearchDropdown;
