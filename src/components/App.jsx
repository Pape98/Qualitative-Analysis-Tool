import { useState, useReducer } from 'react';
import { Grid, Container } from 'semantic-ui-react';

import { useLogin } from '../hooks';
import { reducer } from '../state';
import { AuthContext, StateContext } from '../context';

import TagsSection from './TagsSection';
import QuotesSection from './QuotesSection';
import AddDocInput from './AddDocInput';
import Menu from './Menu';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [state, dispatch] = useReducer(reducer);

  useLogin(setIsSignedIn);

  return (
    <div className='appContainer'>
      <AuthContext.Provider value={isSignedIn}>
        <StateContext.Provider value={{ state, dispatch }}>
          <Menu />
          <Container fluid id='mainContainer'>
            <Grid>
              <Grid.Column width={6}>
                <AddDocInput />
                <TagsSection />
              </Grid.Column>
              <Grid.Column width={10}>
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