import { useState, useReducer, useEffect } from 'react';
import { Grid, Container } from 'semantic-ui-react';

import { useLogin } from '../hooks';
import { reducer, actions, actionTypes } from '../state';
import { AuthContext, StateContext } from '../context';

import TagsSection from './TagsSection';
import QuotesSection from './QuotesSection';
import AddDocForm from './AddDocForm';
import Menu from './Menu';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [state, dispatch] = useReducer(reducer);

  useLogin(setIsSignedIn);

  useEffect(() => {
    const getAllTags = async () => {
      const data = await actions.getTags();
      dispatch({
        type: actionTypes.GET_TAGS,
        payload: data.map(tag => tag.name),
      });
    };

    getAllTags();
  }, []);

  return (
    <div className='appContainer'>
      <AuthContext.Provider value={isSignedIn}>
        <StateContext.Provider value={{ state, dispatch }}>
          <Menu />
          <Container fluid id='mainContainer'>
            <Grid>
              <Grid.Column width={5}>
                <AddDocForm />
                <TagsSection />
              </Grid.Column>
              <Grid.Column width={11}>
                <QuotesSection />
              </Grid.Column>
            </Grid>
          </Container>
        </StateContext.Provider>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
