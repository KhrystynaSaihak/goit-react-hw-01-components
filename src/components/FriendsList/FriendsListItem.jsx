import PropTypes from 'prop-types';

import {
  FriendsItem,
  FriendsStatus,
  UserAvatar,
  UserName,
} from './FriendsList.styled';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <FriendsStatus isOnline={isOnline} />
      <UserAvatar
        src={avatar}
        alt="User avatar"
        width="48"
        isOnline={isOnline}
      />
      <UserName>{name}</UserName>
    </FriendsItem>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
