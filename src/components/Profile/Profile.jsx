import PropTypes from 'prop-types';
import {
  ProfileBox,
  ProfileDescription,
  UserAvatar,
  UserName,
  UserDetails,
  StatsBox,
  StatsTitle,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({
  userData: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ProfileBox>
      <ProfileDescription>
        <UserAvatar src={avatar} alt="User avatar" className="avatar" />
        <UserName className="name">{username}</UserName>
        <UserDetails className="tag">@{tag}</UserDetails>
        <UserDetails className="location">{location}</UserDetails>
      </ProfileDescription>

      <StatsBox>
        <li>
          <StatsTitle className="label">Followers</StatsTitle>
          <StatsQuantity className="quantity">{followers}</StatsQuantity>
        </li>
        <li>
          <StatsTitle className="label">Views</StatsTitle>
          <StatsQuantity className="quantity">{views}</StatsQuantity>
        </li>
        <li>
          <StatsTitle className="label">Likes</StatsTitle>
          <StatsQuantity className="quantity">{likes}</StatsQuantity>
        </li>
      </StatsBox>
    </ProfileBox>
  );
};

Profile.propTypes = {
  userData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }),
};
