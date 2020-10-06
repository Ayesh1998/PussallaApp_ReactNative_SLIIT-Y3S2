import React, {useState} from 'react'
import {StyleSheet} from 'react-native'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import ShopReducer from './store/reducers/meals-reducer'
import Colors from './constants/colors'
import MealsNavigator from './navigation/meals-navigator'

const getFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  }).then(() => {
  })
}

const mainReducer = combineReducers({
  shop: ShopReducer
})

const store = createStore(mainReducer)

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  if (!fontLoaded) {
    return (
      <AppLoading startAsync={getFonts}
                  onFinish={() => setFontLoaded(true)}/>
    )
  }
  return (
    <Provider store={store}>
      <MealsNavigator/>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryColor,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
