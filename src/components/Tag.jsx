import { Label } from 'semantic-ui-react';

import { useDispatch } from '../hooks';
import { actionTypes } from '../state';

const Tag = ({ label, color }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch({
      type: actionTypes.SELECT_TAG,
      payload: label,
    });
  };

  return (
    <Label color={color} onClick={onClick}>
      {label}
    </Label>
  );
};

export default Tag;
