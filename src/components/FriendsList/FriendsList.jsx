import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendsListItem';
import { FriendsItemLi } from './FriendsList.styled';

export const FriendList = ({ friendsListData }) => {
  return (
    <ul>
      {friendsListData.map(({ avatar, name, isOnline, id }) => (
        <FriendsItemLi key={id}>
          <FriendsListItem avatar={avatar} name={name} isOnline={isOnline} />
        </FriendsItemLi>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friendsListData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
