import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendsListItem';

export const FriendList = ({ friendsListData }) => {
  return (
    <ul className="friend-list">
      {friendsListData.map(({ avatar, name, isOnline, id }) => (
        <FriendsListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
