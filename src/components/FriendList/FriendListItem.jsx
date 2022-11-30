import PropTypes from 'prop-types';
import { Fragment } from "react";
import { FriendStatus, FriendImage, FriendName} from './FriendList.styled'


export const FriendListItem = ({ friend:{isOnline, avatar, name} }) => {
  return (
    <Fragment>
    <FriendStatus color={isOnline}></FriendStatus>
    <FriendImage src={avatar} alt="User avatar" width="48" />
    <FriendName>{name}</FriendName>
    </Fragment>
  );
};


FriendListItem.propTypes = {
  friend:
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.number.isRequired,
  }).isRequired
};
