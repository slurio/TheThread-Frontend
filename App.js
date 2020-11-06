import "react-native-gesture-handler";
import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

import { AppLoading, Font } from 'expo';
import { useFonts,   Raleway_100Thin,
  Raleway_100Thin_Italic,
  Raleway_200ExtraLight,
  Raleway_200ExtraLight_Italic,
  Raleway_300Light,
  Raleway_300Light_Italic,
  Raleway_400Regular,
  Raleway_400Regular_Italic,
  Raleway_500Medium,
  Raleway_500Medium_Italic,
  Raleway_600SemiBold,
  Raleway_600SemiBold_Italic,
  Raleway_700Bold, } from '@expo-google-fonts/raleway';
  import { NunitoSans_600SemiBold } from '@expo-google-fonts/nunito-sans'



import HomeNav from "./app/routes/HomeNav";
import OpenScreen from "./app/screens/OpenScreen";
import SignupScreen from "./app/screens/SignupScreen";
import SignInScreen from "./app/screens/SignInScreen";

import {createStore} from 'redux'; 
import { Provider } from 'react-redux';
import { deleteItem } from "./app/redux/action";
import { SafeAreaView } from "react-native-safe-area-context";


const rootReducer = (currentState= {user:'', items: []}, action) => {
  if(action.type === "login user"){
    return {...currentState, user: action.payload, items: action.payload.items}
  } else if(action.type === "signup user"){
    return {...currentState, newUser: action.payload}
  }else if(action.type === "logout user"){
    return {...currentState, newUser: '', user: ''}
  }else if(action.type === "favorite item"){
    return {...currentState, items: [action.payload, ...currentState.items]}
  } else if(action.type === "delete item"){
    return {...currentState, items: action.payload}
  }else {
    return currentState
  }
}

const store = createStore(rootReducer) 

const Stack = createStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Raleway_100Thin,
    Raleway_100Thin_Italic,
    Raleway_200ExtraLight,
    Raleway_200ExtraLight_Italic,
    Raleway_300Light,
    Raleway_300Light_Italic,
    Raleway_400Regular,
    Raleway_400Regular_Italic,
    Raleway_500Medium,
    Raleway_500Medium_Italic,
    Raleway_600SemiBold,
    Raleway_600SemiBold_Italic,
    Raleway_700Bold,
    NunitoSans_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

      return (
        <Provider store={store}>
          <SafeAreaView style={{ flex: 1, backgroundColor:'#fff'}}>
             <NavigationContainer>
              <Stack.Navigator headerMode={'float'}>
                <Stack.Screen 
                  name="OpenScreen" 
                  component={OpenScreen}
                  options={{headerShown: false}}
                />
                <Stack.Screen name="HomeNav" component={HomeNav}
                  options={{
                  title: 'THE THREAD',
                  headerLeft: null,
                  headerStyle: {
                    backgroundColor: '#222',
                    height: (Platform.OS === 'ios') ? 70 : 0,
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontSize: 25,
                    letterSpacing: 2,
                  },
                  headerBackTitleVisible: false,
                }}/>
                <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown: false}}/>
                <Stack.Screen name="SignupScreen" component={SignupScreen} options={{headerShown: false}}/>
              </Stack.Navigator>
            </NavigationContainer> 
          </SafeAreaView>
        </Provider>
      )

    
}