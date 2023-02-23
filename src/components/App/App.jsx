import React from 'react';

import { Profile } from './../Profile/Profile';
import userData from './../Profile/user.json';

import { Statistics } from './../Statistics/Statistics';
import StatData from './../Statistics/data.json';

import { FriendList } from './../FriendsList/FriendsList';
import friendsListData from './../FriendsList/friends.json';

import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import transactionData from '../TransactionHistory/transactions.json';

function App() {
  return (
    <React.StrictMode>
      <Profile userData={userData} />
      <Statistics StatData={StatData} title="Upload stats" />
      <FriendList friendsListData={friendsListData} />
      <TransactionHistory transactionData={transactionData} />
    </React.StrictMode>
  );
}

export default App;
