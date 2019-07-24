import { createStackNavigator } from 'react-navigation';

import { SearchImageScreen } from '../screens';

export default createStackNavigator(
  {
    Main: SearchImageScreen,
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  }
);
