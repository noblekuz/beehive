import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Contact from './contact';
import About from './about';
import RegisterInst  from './registerInst';
import RegisterPers from './registerperson';
import PaymentPlan from './payment';
import Home from './home';
import Documentation from './documentation';





export default function App() {

  let [currentScreen, setCurrentScreen] = useState(<Home onChangeScreen={(order)=>changeScreen(order)}/>)

  const changeScreen = (command)=>{

    if(command==="Home"){
      setCurrentScreen(<Home onChangeScreen={(order)=>changeScreen(order)}  />)
    }else if(command==="RegisterPers"){
      setCurrentScreen(<RegisterPers onChangeScreen={(order)=>changeScreen(order)} />)
    }else if(command==="RegisterInst"){
      setCurrentScreen(<RegisterInst onChangeScreen={(order)=>changeScreen(order)}/>)
    }else if(command==="About"){
      setCurrentScreen(<About onChangeScreen={(order)=>changeScreen(order)} />)
    }else if(command==="Contact"){
      setCurrentScreen(<Contact onChangeScreen={(order)=>changeScreen(order)} />)
    }else if(command==="Payment"){
      setCurrentScreen(<PaymentPlan onChangeScreen={(order)=>changeScreen(order)} />)
    }else if(command==="How_It_Works"){
      setCurrentScreen(<Documentation onChangeScreen={(order)=>changeScreen(order)} />)
    }

  }



  return (
    <View style={styles.container}>
      {currentScreen}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0298a3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
