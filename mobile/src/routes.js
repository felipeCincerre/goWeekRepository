import { createSwitchNavigator, createStackNavigator, createAppContainer} from 'reaact-navigation';

import Login from './pages/Login';
import Timeline from './pages/Timeline';
import New from './pages/New';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        App: createStackNavigator({
            Timeline,
            New,
        }),
    })
);

export default Routes;