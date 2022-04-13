import { Menu, Button, Header } from 'semantic-ui-react';
import { useIsSignedIn } from '../hooks';

const CustomMenu = () => {
  const isSignedIn = useIsSignedIn();

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignoutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  return (
    <Menu size='large' fixed='top' color='black' borderless inverted>
      <Menu.Item>
        <Header inverted>Quantitative Analysis Tool</Header>
      </Menu.Item>
      <Menu.Item></Menu.Item>
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
