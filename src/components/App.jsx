import { GlobalStyle } from './GlobalStyle';

import user from '../AppData/user.json';
import { User } from './User/User';

import data from '../AppData/data.json';
import { Statistics} from './Statistics/Statistics';

import friends from '../AppData/friends.json';
import { FriendList } from './FriendList/FriendList';

import transactions from '../AppData/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory'

import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker';
import ToDoList from './toDoList';

const colorPickerOptions = [
  {label: 'red', color: '#F44336'},
  {label: 'green', color: '#4CAF50'},
  {label: 'blue', color: '#2196F3'},
  {label: 'gray', color: '#607D8B'},
  {label: 'pink', color: '#E91E63'},
  {label: 'indigo', color: '#3F51B5'},
]

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
      

    <h2>Practice from lesson 2</h2>
    <Counter initialValue ={10}/>
    {/* <Counter /> */}
    < Dropdown/>
    < ColorPicker options={colorPickerOptions}/>
    < ToDoList />
    <GlobalStyle/>
    </>
  )
}