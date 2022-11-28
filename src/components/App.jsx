import { GlobalStyle } from './GlobalStyle';

import user from '../user.json';
import { User } from './User/User';

import data from '../data.json';
import { Statistics} from './Statistics/Statistics';

import friends from '../friends.json';
import { FriendList } from './FriendList/FriendList';

import transactions from '../transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <>
    <User user={user}/>
    <Statistics title="Upload stats" data={data}/>
    {/* <Statistics data={data} /> */}
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
      <GlobalStyle/>
    </>
  )
}