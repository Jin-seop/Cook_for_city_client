import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginPage from './components/LoginPage';
import Mypage from './components/Mypage';
import PostPage from './components/PostPage';
import SignUp from './components/SignUp';


const Route = createStackNavigator({
  LoginPage:{
    screen:PostPage
  }
},{
  defaultNavigationOptions: {
    headerShown: false,
    title: null,
  },
});

const App = createAppContainer(Route);

export default App;