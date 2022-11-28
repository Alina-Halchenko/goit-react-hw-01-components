import { GlobalStyle } from './GlobalStyle';

import user from '../user.json';
import { User } from './User/User';

import data from '../data.json';
import { Statistics} from './Statistics/Statistics'

export const App = () => {
  return (
    <>
    <User user={user}/>
    <Statistics title="Upload stats" data={data}/>
      <GlobalStyle/>
    </>
  );
};