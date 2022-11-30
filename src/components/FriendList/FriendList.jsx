import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import {FriendListUl, FriendItem} from './FriendList.styled'

export const FriendList = ({friends}) => {
  return (
    <FriendListUl>
      {friends.map( friend => (
        <FriendItem key={friend.id}>
          <FriendListItem friend={friend} />
        </FriendItem>
      ))}
    </FriendListUl>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};