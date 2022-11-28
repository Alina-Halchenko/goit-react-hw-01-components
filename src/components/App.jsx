import { GlobalStyle } from './GlobalStyle';

import user from '../user.json';
import { User } from './User/User';

export const App = () => {
  return (
    <>
    <User user={user}/>
      <GlobalStyle/>
    </>
  );
};