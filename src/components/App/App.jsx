import React from 'react';

import { Profile } from './../Profile/Profile';
import user from './../Profile/user.json';

import { Statistics } from './../Statistics/Statistics';
import StatData from './../Statistics/data.json';

import { FriendList } from './../FriendsList/FriendsList';
import friendsListData from './../FriendsList/friends.json';

import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import transactionData from '../TransactionHistory/transactions.json';

function App() {
  return (
    <React.StrictMode>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics StatData={StatData} />
      <FriendList friendsListData={friendsListData} />
      <TransactionHistory transactionData={transactionData} />
    </React.StrictMode>
  );
}

export default App;
