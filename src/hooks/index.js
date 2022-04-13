/* eslint-disable no-unused-vars */
import { useEffect, useContext } from 'react';
import { AuthContext, StateContext } from '../context';
import { handleClientLoad } from '../utils';

export const useLogin = setIsSignedIn => {
  useEffect(() => handleClientLoad(setIsSignedIn), [setIsSignedIn]);
};

export const useIsSignedIn = () => {
  const isSignedIn = useContext(AuthContext);
  return isSignedIn;
};

export const useDispatch = () => {
  const { dispatch } = useContext(StateContext);
  return dispatch;
};

export const useSelector = () => {
  const { state } = useContext(StateContext);
  return state;
};
