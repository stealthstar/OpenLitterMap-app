import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import { PersistGate } from 'redux-persist/es/integration/react'
import configureStore from './store'

// import Icon from 'react-native-vector-icons/MaterialIcons';
// Icon.loadFont();

import RootContainer from './screens/RootContainer'

// the hoc
// import i18n from './i18n'
// import { I18nextProvider } from 'react-i18next';
// import { withTranslation } from 'react-i18next';

const App: () => React$Node = () => {

    // Splash screen
    // useEffect(() => {
    //   SplashScreen.hide();
    // }, []);

    const { persistor, store } = configureStore();

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <RootContainer />
            </PersistGate>
        </Provider>
    );
};


export default App;
