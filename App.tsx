import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginPage from './components/LoginPage';
import Mypage from './components/Mypage';
import PostPage from './components/PostPage';
import SignUp from './components/SignUp';
import MoveDoSiIn from './components/MoveDoSiIn';
import Comment from './components/Comment';

const Route = createStackNavigator({
  LoginPage:{
    screen:LoginPage
  },
  Mypage:{
    screen:Mypage
  },
  PostPage:{
    screen:PostPage
  },
  SignUp:{
    screen:SignUp
  },
  MoveDoSiIn:{
    screen:MoveDoSiIn
  },
  Comment:{
    screen:Comment
  }
},{
  defaultNavigationOptions: {
    headerShown: false,
    title: null,
  },
});

const App = createAppContainer(Route);

export default App;