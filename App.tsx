import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginPage from './components/LoginPage';
import Mypage from './components/Mypage';
import PostPage from './components/PostPage';
import SignUp from './components/SignUp';
import MoveDoSiIn from './components/MoveDoSiIn';
import Comment from './components/Comment';
import MainPage from './components/MainPage';
import EditUserInfo from './components/EditUserInfo';
import CheckDeleteUser from './components/CheckDeleteUser';

const Route = createStackNavigator({
  LoginPage:{
    screen:LoginPage
  },
  Mypage:{
    screen:Mypage
  },
  EditUserInfo:{
    screen:EditUserInfo
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
  },
  MainPage:{
    screen:MainPage
  },
  checkDeleteUser:{
    screen:CheckDeleteUser
  }
},{
  defaultNavigationOptions: {
    headerShown: false,
    title: undefined,
  },
});

const App = createAppContainer(Route);

export default App;