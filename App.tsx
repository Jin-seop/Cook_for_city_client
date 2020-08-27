import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginPage from './components/LoginPage';



const Route = createStackNavigator({
  LoginPage:{
    screen:LoginPage
  }
},{
  defaultNavigationOptions: {
    headerShown: false,
    title: null,
  },
});

const App = createAppContainer(Route);

export default App;