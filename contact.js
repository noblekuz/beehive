import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function Contact(props) {
  
  let [isWide, setIsWide] =  useState(false)

  const checkOrientation = ({ nativeEvent }) => {
    let {width, height} = nativeEvent.layout
    
    if( width > 600 ){
      //alert("Screen is Wide")
      setIsWide(true)
    }else{
      //alert("Screen is Vertical")
      setIsWide(false)
    }
    };


  return (
    
    <View onLayout={checkOrientation} style={styles.container}>
      {isWide === true ? <View style={{width: "100%", flex:3, justifyContent:"center", alignItems: "center", flexDirection:"rows", backgroundColor:"#006bb3"}}>
        <TouchableOpacity onPress={()=>{props.onChangeScreen("Home")}} style={{flex:2, marginHorizontal:70,  paddingVertical: 20, height:"80%", alignSelf:"flex-start", flexDirection: "row", justifyContent: "center"}}>
          <Image style={{width:50, height:50}} source={require('./assets/icon.png')}/>
          <Text style={{fontSize: 26, marginTop:5, color:"#fff"}}>BeeHive</Text>
        </TouchableOpacity>

        <View style={{flex:4, paddingHorizontal:10, alignSelf:"flex-end", justifyContent: "center", flexDirection:"row", height:"80%", marginBottom:20}}>
       {/*  <TouchableOpacity onPress={()=>{props.onChangeScreen("Payment")}} style={{marginHorizontal:20, height:"100%"}}>
            <Text style={{fontSize:16, color:"#abedff"}}>Pricing</Text>
          </TouchableOpacity> */}
        <TouchableOpacity onPress={()=>{props.onChangeScreen("How_It_Works")}} style={{marginHorizontal:20, height:"100%"}}>
            <Text style={{fontSize:16, color:"#abedff"}}>How it works</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}} style={{marginHorizontal:20, paddingHorizontal:10, width:80}}>
            <Text style={{fontSize:16, color:"#fff"}}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{props.onChangeScreen("About")}} style={{marginHorizontal:20, height:"100%"}}>
            <Text style={{fontSize:16, color: "#abedff", textAlign:"center"}}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{props.onChangeScreen("RegisterInst")}} style={{marginHorizontal:40}}>
            <Text style={{fontSize:16, color: "#fff"}}>Enroll new Institution</Text>
          </TouchableOpacity>
        </View>
      </View> : <View style={{width: "100%", flex:3, justifyContent:"center", alignItems: "center", flexDirection:"column", backgroundColor:"#006bb3"}}>
        <TouchableOpacity onPress={()=>{props.onChangeScreen("Home")}} style={{flex:2, marginHorizontal:70,  paddingVertical: 20, height:"40%", alignSelf:"center", flexDirection: "row", justifyContent: "center"}}>
          <Image style={{width:50, height:50}} source={require('./assets/icon.png')}/>
          <Text style={{fontSize: 26, marginTop:5, color:"#fff"}}>BeeHive</Text>
        </TouchableOpacity>

        <View style={{flex:4, paddingHorizontal:10, alignSelf:"center", justifyContent: "center", flexDirection:"row", width:"40%", marginVertical:50}}>
          {/* <TouchableOpacity onPress={()=>{props.onChangeScreen("Payment")}} style={{marginHorizontal:10, height:"100%"}}>
            <Text style={{fontSize:12, color:"#abedff"}}>Pricing</Text>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={()=>{props.onChangeScreen("How_It_Works")}} style={{marginHorizontal:10, height:"100%"}}>
            <Text style={{fontSize:12, color:"#abedff"}}>How it works</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{props.onChangeScreen("Contact")}} style={{marginHorizontal:10, height:"100%"}}>
            <Text style={{fontSize:12, color:"#abedff"}}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{props.onChangeScreen("About")}} style={{marginHorizontal:10}}>
            <Text style={{fontSize:12, color: "#abedff"}}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{props.onChangeScreen("RegisterInst")}} style={{marginHorizontal:20}}>
            <Text style={{fontSize:12, color: "#fff"}}>Enroll new Institution</Text>
          </TouchableOpacity>
        </View>
      </View>}

    
      {isWide===true ? <View style={{alignSelf:"center", width:"80%", flex:12, marginTop:50}}>
        <View style={{flexDirection:"row", width: "100%", flex:10, justifyContent:"center", alignSelf: "center"}}>
          <View style={{flex:4, justifyContent:"center", alignContent:"flex-end", marginRight:20}}>
            <Text style={{fontSize:45, color:"#006bb3", textAlign:"right"}}>Get in touch</Text>
            <View style={{width:200, height:1, backgroundColor: "#006bb3", marginVertical:20, alignSelf:"flex-end"}}></View>
            <Text style={{fontSize:22, color:"#858585", textAlign:"right"}}>We're anxious to hear from you :)</ Text>
    
 
            {/* <Text style={{fontSize:16, color:"#9e9e9e", textAlign:"right", marginTop: 10}}>Phone: +233 (0) 54 109 6501 </ Text>
            <Text style={{fontSize:16, color:"#9e9e9e", textAlign:"right", marginTop: 10}}>+233 (0) 24 751 1580</ Text> */}
            <Text style={{fontSize:16, color:"#9e9e9e", textAlign:"right", marginTop: 10}}>Email: support@beehive.orbitag.net </ Text>
            
           
          </View>
           <View style={{flex:4, alignContent:"flex-start"}}>
            <Image style={{width:'100%', height:"100%"}} source={require('./assets/img/wall_3.png')} resizeMode="contain"/>
          </View>
        </View>
        
      </View> : <View style={{alignSelf:"center", width:"80%", flex:12, marginTop:50}}>
        <View style={{flexDirection:"column", width: "100%", flex:10, justifyContent:"center", alignSelf: "center"}}>
          <View style={{flex:4, justifyContent:"center", alignContent:"center", marginRight:10}}>
            <Text style={{fontSize:24, color:"#006bb3", textAlign:"left"}}>Get in touch</Text>
            <View style={{width:200, height:1, backgroundColor: "#006bb3", marginVertical:20, alignSelf:"flex-start"}}></View>
            <Text style={{fontSize:16, color:"#858585", textAlign:"left"}}>We're anxious to hear from you :)</ Text>
     {/*   <Text style={{fontSize:12, color:"#9e9e9e", textAlign:"left", marginTop: 10}}>Phone: +233 (0) 54 109 6501</ Text>
            <Text style={{fontSize:12, color:"#9e9e9e", textAlign:"left", marginTop: 10}}>+233 (0) 24 751 1580</ Text> */}
            <Text style={{fontSize:12, color:"#9e9e9e", textAlign:"left", marginTop: 10}}>Email: support@beehive.orbitag.net </ Text>
          </View>
           <View style={{flex:4, alignContent:"center", marginTop:60, justifyContent:"center"}}>
            <Image style={{width:'100%', height:"100%"}} source={require('./assets/img/wall_3.png')} resizeMode="contain"/>
          </View>
        </View>
        
      </View>}

      

      <View style={{flex:1, width: "100%", paddingHorizontal: 30}}>

      </View>
      <View style={{flex:1, width: "100%", paddingHorizontal: 30,  justifyContent: "center", alignItems:"center"}}>
        <Text style={{fontSize:10, color:"#004059", textAlign: "center"}}>Copyright {'\u00A9'} 2021. Basket Systems.</Text>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
