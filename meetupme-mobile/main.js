import Expo from 'expo';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import { cachedFonts } from './helpers';
import Root from './src/Root';


EStyleSheet.build(Colors);

class App extends React.Component {
  // fontLoaded, and _loadAssetsAsync function are to cache the font
  state = {
    fontLoaded: false,
  }

  componentDidMount() {
    this._loadAssetsAsync();
  }
  async _loadAssetsAsync() {
    const fontAssets = cachedFonts([
      {
        raleway: require('./assets/fonts/Raleway-Regular.ttf'),
      },
      {
        ralewayBold: require('./assets/fonts/Raleway-Bold.ttf'),
      },
      {
        ralewayLight: require('./assets/fonts/Raleway-Light.ttf'),
      },
      {
        ralewayMedium: require('./assets/fonts/Raleway-Medium.ttf'),
      },
    ]);

    await Promise.all(fontAssets);

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <Expo.AppLoading />;
    }
    return <Root />;
  }
}

Expo.registerRootComponent(App);
