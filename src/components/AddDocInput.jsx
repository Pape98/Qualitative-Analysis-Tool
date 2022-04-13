import { useState } from 'react';
import { Input } from 'semantic-ui-react';

import { useIsSignedIn, useDispatch } from '../hooks';
import { actions } from '../state';

const AddDocInput = () => {
  const [docId, setDocId] = useState(
    '1oKh-2uMS0lQ_MRxvDx4GcWn7WQWuKkiLKXhJMqJlpCU'
  );
  const isSignedIn = useIsSignedIn();
  const dispatch = useDispatch();

  const onExtractQuote = async () => {
    if (isSignedIn === false) {
      alert('Error: You have to be logged in.');
      return;
    }

    if (docId.length === 0) {
      alert('Error: ID of document cannot be empty');
      return;
    }

    await actions.extractQuotes(docId);
    // setDocId('');
    alert('Quotes successfully extracted!');
  };

  return (
    <Input
      fluid
      placeholder='Enter ID of Google Document'
      action={{
        icon: 'search',
        onClick: () => onExtractQuote(),
      }}
      label='ID'
      value={docId}
      onChange={e => setDocId(e.target.value)}
    ></Input>
  );
};

export default AddDocInput;
