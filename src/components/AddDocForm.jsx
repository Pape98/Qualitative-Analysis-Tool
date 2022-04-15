import { useState } from 'react';
import { Segment, Form, Button, Header } from 'semantic-ui-react';

import { useIsSignedIn, useDispatch, useSelector } from '../hooks';
import { actions, actionTypes } from '../state';

const AddDocForm = () => {
  const [docId, setDocId] = useState('');
  const [author, setAuthor] = useState('');
  const isSignedIn = useIsSignedIn();
  const dispatch = useDispatch();
  const toggleState = useSelector(state => state?.extractorFormState);

  const displayClass = toggleState ? 'display--block' : 'display--none';

  const onExtractQuote = async () => {
    if (isSignedIn === false) {
      alert('Error: You have to be logged in.');
      return;
    }

    if (docId.length === 0 || author.length === 0) {
      alert('Error: IDs cannot be empty');
      return;
    }

    const { tags } = await actions.extractQuotes(author, docId);

    setDocId('');
    setAuthor('');

    dispatch({
      type: actionTypes.GET_TAGS,
      payload: tags,
    });

    // alert('Quotes successfully extracted!');
  };

  return (
    <Segment className={displayClass}>
      <Header as='h4'>Extract quotes</Header>
      <Form onSubmit={onExtractQuote}>
        <Form.Input
          action={{
            icon: 'user',
          }}
          placeholder='Name or ID of Participant'
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <Form.Input
          fluid
          placeholder='ID of Google Document'
          action={{
            icon: 'file',
          }}
          value={docId}
          onChange={e => setDocId(e.target.value)}
        ></Form.Input>
        <Button>Extract</Button>
      </Form>
    </Segment>
  );
};

export default AddDocForm;
