import { useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { useDispatch, useSelector } from '../hooks';
import { actions, actionTypes } from '../state';

const QuotesSearchDropdown = () => {
  const tags = useSelector(state => state?.tags) || [];
  const selectedTag = useSelector(state => state?.selectedTag) || '';

  const dispatch = useDispatch();

  useEffect(() => {
    const search = async () => {
      const quotes = await actions.searchQuotes(selectedTag);

      dispatch({
        type: actionTypes.SEARCH_QUOTES,
        payload: quotes,
      });
    };

    search();
  }, [selectedTag, dispatch]);

  const onSearch = async (_e, { value }) => {
    dispatch({
      type: actionTypes.SELECT_TAG,
      payload: value,
    });
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
        selection
        search
        value={selectedTag}
        options={tagsOptions}
      />
    </>
  );
};

export default QuotesSearchDropdown;
