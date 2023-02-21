import styled from 'styled-components';

export const FriendsItemLi = styled.li`
  list-style-type: none;
`;

export const FriendsList = styled.ul`
  margin: 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FriendsItem = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  gap: 15px;
  width: 350px;
  margin-bottom: 10px;
  padding: 10px 5px;
  background-color: white;
  border: 1px solid #d6d6d6;
  border-radius: 2px;
  box-shadow: 1px 1px 2px 2px #d6baba;
`;

export const FriendsStatus = styled.span`
  display: block;
  text-align: center;
  margin: 20px 5px 20px 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? '#4fb43e' : '#fc4f4f')};
`;

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  background-color: ${props => (props.isOnline ? '#4fb43e' : '#fc4f4f')};
  border-radius: 15px;
`;

export const UserName = styled.p`
  font-size: 22px;
  color: black;
  font-weight: 500;
`;
