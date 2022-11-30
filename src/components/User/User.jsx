import PropTypes from 'prop-types';
import { UserProfile, 
  UserDescription, 
  UserStats, 
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserLabel,
  UserQuantity,
} from './User.styled'


export const User = (
  {avatar, username, tag, location, stats:
    {followers, views, likes}}) => {
  return <UserProfile>
    <UserDescription>
      <UserAvatar src={avatar} alt="User avatar"/>
      <UserName>{username}</UserName>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </UserDescription>

    <UserStats>
    <li>
      <UserLabel>Followers</UserLabel>
      <UserQuantity>{followers}</UserQuantity>
    </li>
    <li>
      <UserLabel>Views</UserLabel>
      <UserQuantity>{views}</UserQuantity>
    </li>
    <li>
      <UserLabel>Likes</UserLabel>
      <UserQuantity>{likes}</UserQuantity>
    </li>
    </UserStats>

  </UserProfile>

};

User.propTypes = {
  
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,

};