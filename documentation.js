import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';

export default function About(props) {
  
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
        {/* <TouchableOpacity onPress={()=>{props.onChangeScreen("Payment")}} style={{marginHorizontal:20, height:"100%"}}>
            <Text style={{fontSize:16, color:"#abedff"}}>Pricing</Text>
          </TouchableOpacity> */}
        <TouchableOpacity onPress={()=>{props.onChangeScreen("How_It_Works")}} style={{marginHorizontal:20, height:"100%"}}>
            <Text style={{fontSize:16, color:"#fff"}}>How it works</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{props.onChangeScreen("Contact")}} style={{marginHorizontal:20, height:"100%"}}>
            <Text style={{fontSize:16, color:"#abedff"}}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}} style={{marginHorizontal:20, paddingHorizontal:10, width:80}}>
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
          <TouchableOpacity onPress={()=>{}} style={{marginHorizontal:10, height:"100%"}}>
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
            <Text style={{fontSize:45, color:"#006bb3", textAlign:"right"}}>Getting started</Text>
            <View style={{width:200, height:1, backgroundColor: "#006bb3", marginVertical:20, alignSelf:"flex-end"}}></View>
            <Text style={{fontSize:22, color:"#858585", textAlign:"left"}}>How to use the Beehive Tool.</ Text>
            <Text style={{fontSize:16, color:"#262626", textAlign:"left", marginTop: 10}}>1.	Enroll your institution on BeeHive by clicking on the {<TouchableOpacity onPress={()=>{props.onChangeScreen("RegisterInst")}}><Text style={{color:"#00bbff"}}>“Enroll new Institution”</Text></TouchableOpacity>} button in the main menu.</ Text>
            <Text style={{fontSize:16, color:"#262626", textAlign:"left", marginTop: 10}}>2.	Fill out the required details. The User Account requirement in this step is the Administrator account.</ Text>
            <Text style={{fontSize:14, color:"#262626", textAlign:"left", marginTop: 5, marginLeft: 20}}>Administrator Account has additional privileges like Creation and deleting of Events, and downloading attendance data </ Text>
            <Text style={{fontSize:16, color:"#262626", textAlign:"left", marginTop: 10}}>3.	After getting institution enrolled, note down your institutional ID, and proceed to download the BeeHive app on {<TouchableOpacity onPress={()=>{Linking.openURL('https://play.google.com/store/apps/details?id=com.basket.beeHive')}}><Text style={{color:"#00bbff"}}>Play Store</Text></TouchableOpacity>}</ Text>
            <Text style={{fontSize:16, color:"#262626", textAlign:"left", marginTop: 10}}>4.	As Administrator, you can login into Beehive App and start creating Events.</ Text>
            <Text style={{fontSize:16, color:"#262626", textAlign:"left", marginTop: 10}}>5.	Event Organizers and Ushers can also {<TouchableOpacity onPress={()=>{Linking.openURL('https://play.google.com/store/apps/details?id=com.basket.beeHive')}}><Text style={{color:"#00bbff"}}>download the App from Play Store </Text></TouchableOpacity>}and sign-up with the same Institutional ID. (This can be done in the mobile application)</ Text>
            <Text style={{fontSize:16, color:"#262626", textAlign:"left", marginTop: 10}}>6.	In the App, Ushers and Organizers can register attendants or usher them into created event in step 4.</ Text>
            <Text style={{fontSize:14, color:"#262626", textAlign:"left", marginTop: 5, marginLeft: 20}}>Administrator Account has additional privileges like Creation and deleting of Events, and downloading attendance data </ Text>
            <Text style={{fontSize:16, color:"#262626", textAlign:"left", marginTop: 10}}>7.	Attendants can alternatively use the institutional ID in step 3, to {<TouchableOpacity onPress={()=>{props.onChangeScreen("RegisterPers")}}><Text style={{color:"#00bbff"}}>generate their own Unique IDs through the Web Application.</Text></TouchableOpacity>} </ Text>
            <Text style={{fontSize:16, color:"#262626", textAlign:"left", marginTop: 10}}>8.	Unique IDs (in step 6 and 7) can be used anytime the person attends event in the institution.</ Text>

           
          </View>
           <View style={{flex:4, alignContent:"flex-start"}}>
            <Image style={{width:'100%', height:"100%"}} source={require('./assets/img/wall_2.png')} resizeMode="contain"/>
          </View>
        </View>
        
      </View> : <View style={{alignSelf:"center", width:"80%", flex:12, marginTop:120}}>
        <View style={{flexDirection:"column", width: "100%", flex:10, justifyContent:"center", alignSelf: "center"}}>
          <View style={{flex:4, justifyContent:"center", alignContent:"center", marginRight:10}}>
            <Text style={{fontSize:24, color:"#006bb3", textAlign:"left"}}>Getting Started</Text>
            <View style={{width:200, height:1, backgroundColor: "#006bb3", marginVertical:10, alignSelf:"flex-start"}}></View>
            <Text style={{fontSize:16, color:"#858585", textAlign:"left"}}>How to use the Beehive Tool.</ Text>
            <Text style={{fontSize:12, color:"#262626", textAlign:"left", marginTop: 10}}>1.	Enroll your institution on BeeHive by clicking on the {<TouchableOpacity onPress={()=>{props.onChangeScreen("RegisterInst")}}><Text style={{color:"#00bbff"}}>“Enroll new Institution”</Text></TouchableOpacity>} button in the main menu.</ Text>
            <Text style={{fontSize:12, color:"#262626", textAlign:"left", marginTop: 10}}>2.	Fill out the required details. The User Account requirement in this step is the Administrator account.</ Text>
            <Text style={{fontSize:12, color:"#262626", textAlign:"left", marginTop: 10, marginLeft:10}}>Administrator Account has additional privileges like Creation and deleting of Events, and downloading attendance data.</ Text>
            <Text style={{fontSize:12, color:"#262626", textAlign:"left", marginTop: 10}}>3.	After getting institution enrolled, note down your institutional ID, and proceed to download the BeeHive app on {<TouchableOpacity onPress={()=>{Linking.openURL('https://play.google.com/store/apps/details?id=com.basket.beeHive')}}><Text style={{color:"#00bbff"}}>Play Store</Text></TouchableOpacity>}</ Text>
            <Text style={{fontSize:12, color:"#262626", textAlign:"left", marginTop: 10}}>4.	As Administrator, you can login into Beehive App and start creating Events.</ Text>
            <Text style={{fontSize:12, color:"#262626", textAlign:"left", marginTop: 10}}>5.	Event Organizers and Ushers can also {<TouchableOpacity onPress={()=>{Linking.openURL('https://play.google.com/store/apps/details?id=com.basket.beeHive')}}><Text style={{color:"#00bbff"}}>download the App from Play Store </Text></TouchableOpacity>} and sign-up with the same Institutional ID. (This can be done in the mobile application)</ Text>
            <Text style={{fontSize:12, color:"#262626", textAlign:"left", marginTop: 10}}>6.	In the App, Ushers and Organizers can register attendants or usher them into created event in step 4.</ Text>
            <Text style={{fontSize:12, color:"#262626", textAlign:"left", marginTop: 10, marginLeft:10}}>Administrator Account has additional privileges like Creation and deleting of Events, and downloading attendance data</ Text>
            <Text style={{fontSize:12, color:"#262626", textAlign:"left", marginTop: 10}}>7.	Attendants can alternatively use the institutional ID in step 3, to {<TouchableOpacity onPress={()=>{props.onChangeScreen("RegisterPers")}}><Text style={{color:"#00bbff"}}>generate their own Unique IDs through the Web Application.</Text></TouchableOpacity>}</ Text>
            <Text style={{fontSize:12, color:"#262626", textAlign:"left", marginTop: 10}}>8.	Unique IDs (in step 6 and 7) can be used anytime the person attends event in the institution.</ Text>
          </View>
           <View style={{flex:4, alignContent:"center", marginTop:150, justifyContent:"center"}}>
            <Image style={{width:'100%', height:"100%"}} source={require('./assets/img/wall_2.png')} resizeMode="contain"/>
          </View>
        </View>
        
      </View>}

      

      <View style={{flex:1, width: "100%", paddingHorizontal: 30,  justifyContent: "center", alignItems:"center", marginTop:30}}>
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
