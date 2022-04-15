import { Menu, Button, Header } from 'semantic-ui-react';
import { useIsSignedIn, useDispatch } from '../hooks';
import { actionTypes } from '../state';

const CustomMenu = () => {
  const isSignedIn = useIsSignedIn();
  const dispatch = useDispatch();

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignoutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  const toggleForm = () => {
    dispatch({
      type: actionTypes.TOGGLE_EXTRACTOR_FORM,
    });
  };

  return (
    <Menu size='large' fixed='top' color='black' borderless inverted>
      <Menu.Item>
        <Header inverted>Quantitative Analysis Tool</Header>
      </Menu.Item>
      <Menu.Item onClick={toggleForm}> Extract Quotes</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          {isSignedIn === false && (
            <Button onClick={handleAuthClick} color='green'>
              Log In
            </Button>
          )}
          {isSignedIn === true && (
            <Button onClick={handleSignoutClick} color='red'>
              Log Out
            </Button>
          )}
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default CustomMenu;
