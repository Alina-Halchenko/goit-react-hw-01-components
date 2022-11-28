import PropTypes from 'prop-types';
import {FriendListUl, FriendStatus, FriendItem, FriendImage, FriendName} from './FriendList.styled'

export const FriendList = ({friends}) => {
  return (
    <FriendListUl>
      {friends.map(({avatar, name, isOnline, id}) => (
        <FriendItem key={id}>
          {isOnline ? (<FriendStatus color="green"></FriendStatus>) : (<FriendStatus color="red"></FriendStatus>)}
          <FriendImage src={avatar} alt="User avatar" width="48" />
          <FriendName>{name}</FriendName>
        </FriendItem>
      ))}
    </FriendListUl>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};