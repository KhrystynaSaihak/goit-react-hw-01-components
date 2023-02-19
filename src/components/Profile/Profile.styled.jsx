import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  width: 300px;
  margin: 20px 40px;
  font-size: 20px;
  text-align: center;
  border: 1px solid #d6d6d6;
  border-radius: 5px;
  box-shadow: 1px 1px 7px 2px #d6d6d6;
  background-color: white;
  color: #1c1c1c;
`;

export const ProfileDescription = styled.div`
  padding: 15px;
`;

export const UserAvatar = styled.img`
  width: 200px;
  border-radius: 50%;
  border: 1px solid #d6d6d6;
`;

export const UserName = styled.p`
  margin: 0;
  padding: 20px 0;
  font-weight: bold;
  font-size: 20px;
  color: #505050;
`;

export const UserDetails = styled.p`
  margin: 0;
  padding-bottom: 10px;
  font-weight: bold;
  color: #9f9f9f;
`;

export const StatsBox = styled.ul`
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #e9e9e9;
  & > * {
    width: calc(100% / 3);
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #d2d2d28d;
    padding: 25px 0px;
  }
`;

export const StatsTitle = styled.span`
  display: block;
  font-size: 18px;
  color: #9f9f9f;
`;

export const StatsQuantity = styled.span`
  font-size: 25px;
  font-weight: bold;
`;
