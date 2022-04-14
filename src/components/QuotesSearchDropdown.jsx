import { Dropdown } from 'semantic-ui-react';
import { useSelector } from '../hooks';

const QuotesSearchDropdown = () => {
  const tags = useSelector(state => state?.tags) || [];

  const onSearch = (_e, { value }) => {
    console.log(value);
  };

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
        onChange={onSearch}
        multiple
        selection
        options={tagsOptions}
      />
    </>
  );
};

export default QuotesSearchDropdown;
