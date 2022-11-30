import { GlobalStyle } from './GlobalStyle';

import user from '../AppData/user.json';
import { User } from './User/User';

import data from '../AppData/data.json';
import { Statistics} from './Statistics/Statistics';

import friends from '../AppData/friends.json';
import { FriendList } from './FriendList/FriendList';

import transactions from '../AppData/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <>
    <User   
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>
    <Statistics title="Upload stats" data={data}/>
    {/* <Statistics data={data} /> */}
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
      <GlobalStyle/>
    </>
  )
}