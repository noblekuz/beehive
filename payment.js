import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function Payment(props) {
  
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
        <TouchableOpacity onPress={()=>{}} style={{flex:2, marginHorizontal:70,  paddingVertical: 20, height:"80%", alignSelf:"flex-start", flexDirection: "row", justifyContent: "center"}}>
          <Image style={{width:50, height:50}} source={require('./assets/icon.png')}/>
          <Text style={{fontSize: 26, marginTop:5, color:"#fff"}}>BeeHive</Text>
        </TouchableOpacity>

        <View style={{flex:4, paddingHorizontal:10, alignSelf:"flex-end", justifyContent: "center", flexDirection:"row", height:"80%", marginBottom:20}}>
         {/*  <TouchableOpacity onPress={()=>{props.onChangeScreen("Payment")}} style={{marginHorizontal:20, borderBottomWidth:1, borderBottomColor:"#fff", paddingHorizontal:10, width:80}}>
            <Text style={{fontSize:16, color:"#abedff"}}>Pricing</Text>
          </TouchableOpacity> */}
           <TouchableOpacity onPress={()=>{props.onChangeScreen("How_It_Works")}} style={{marginHorizontal:20, borderBottomWidth:1, borderBottomColor:"#fff", paddingHorizontal:10, width:80}}>
            <Text style={{fontSize:16, color:"#abedff"}}>How it works</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{props.onChangeScreen("Contact")}} style={{marginHorizontal:20, height:"100%"}}>
            <Text style={{fontSize:16, color:"#abedff"}}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{props.onChangeScreen("About")}} style={{marginHorizontal:20}}>
            <Text style={{fontSize:16, color: "#abedff"}}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{props.onChangeScreen("RegisterInst")}} style={{marginHorizontal:40}}>
            <Text style={{fontSize:16, color: "#fff"}}>Enroll new Institution</Text>
          </TouchableOpacity>
        </View>
      </View> : <View style={{width: "100%", flex:1, justifyContent:"center", alignItems: "center", flexDirection:"column", backgroundColor:"#006bb3"}}>
        <TouchableOpacity onPress={()=>{}} style={{flex:2, marginHorizontal:70,  paddingVertical: 20, height:"40%", alignSelf:"center", flexDirection: "row", justifyContent: "center"}}>
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

    
      {isWide===true ? <View style={{alignSelf:"center", width:"80%", flex:12, marginTop:20, alignItems:"center", alignContent:"center"}}>
        <View style={{flexDirection:"row", width: "100%", height:"100%", justifyContent:"center", alignSelf: "center"}}>
          <View style={{flex:4, justifyContent:"center", alignContent:"center", marginRight:20, alignItems:"center"}}>
            <Text style={{fontSize:45, color:"#006bb3", textAlign:"center"}}>Something for everyone!</Text>
            <View style={{width:200, height:1, backgroundColor: "#006bb3", marginVertical:20, alignSelf:"center"}}></View>
            <Text style={{fontSize:22, color:"#858585", textAlign:"center"}}>We've got flexible and all-inclusive pricing plans for everyone</ Text>
            <View style={{width: "100%", height:350, marginTop:30, flexDirection:"row", justifyContent:"center", alignContent:"space-around", alignItems:"stretch", alignSelf:"center"}}>
              <View style={{marginHorizontal:20, alignSelf:"flex-end", width: 300, height:"100%", padding:5, borderRadius:20, backgroundColor:"#fff", shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 5}}>
                <View style={{width:"100%", flex:2, borderTopLeftRadius:20, borderTopRightRadius:20, backgroundColor:"#13ad25", justifyContent:"center", alignItems:"center"}}>
                  <Text style={{fontSize:32, color:"#fff", textAlign:"center"}}>Starter</Text> 
                </View>

                <View style={{flex: 5, width:"100%", justifyContent:"center", alignItems:"flex-start", paddingHorizontal:5, marginTop:20}}>
                  <View style={{alignSelf:"center", alignContent:"center", flexDirection:"row", justifyContent:"flex-start"}}>
                      <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:72, color:"#13ad25", textAlign:"left", fontWeight:"bold"}}>00</Text>
                      </View>
                      <View style={{flexDirection:"column"}}>
                        <Text style={{fontSize:24, color:"#13ad25", textAlign:"left", fontWeight:"bold", marginTop:20}}>.00</Text>
                        <Text style={{fontSize:24, color:"#9c9c9c", textAlign:"left", fontWeight:"bold"}}>GhC</Text>
                      </View>
                  </View>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - One-time benefit for all </Text>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - 1st month full access</Text>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - Regular Technical Support</Text>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - Unlimited Events</Text>
                </View>
                <TouchableOpacity onPress={()=>props.onChangeScreen("RegisterInst")} style={{backgroundColor: "#13ad25", alignSelf:"center", marginTop:20, justifyContent: "center", alignItems:"center", borderRadius: 20, height:40, width: "100%", paddingVertical: 10, paddingHorizontal: 20}}>
                    <Text style={{fontSize:16, color:"#fff"}}>Get started</Text>
                </TouchableOpacity> 
              </View>
              <View style={{marginHorizontal:20, width: 300, height:"100%", padding:5, borderRadius:20, backgroundColor:"#fff", shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 5}}>
                <View style={{width:"100%", flex:2, borderTopLeftRadius:20, borderTopRightRadius:20, backgroundColor:"#006bb3", justifyContent:"center", alignItems:"center"}}>
                  <Text style={{fontSize:32, color:"#fff", textAlign:"center"}}>Lite</Text> 
                </View>
                <View style={{flex: 5, width:"100%", justifyContent:"center", alignItems:"flex-start", paddingHorizontal:5, marginTop:20}}>
                <View style={{alignSelf:"center", alignContent:"center", flexDirection:"row", justifyContent:"flex-start"}}>
                      <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:72, color:"#006bb3", textAlign:"left", fontWeight:"bold"}}>9</Text>
                      </View>
                      <View style={{flexDirection:"column"}}>
                        <Text style={{fontSize:24, color:"#006bb3", textAlign:"left", fontWeight:"bold", marginTop:20}}>.99</Text>
                        <Text style={{fontSize:24, color:"#9c9c9c", textAlign:"left", fontWeight:"bold"}}>GhC</Text>
                      </View>
                  </View>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - billed monthly</Text>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - 1 month full access</Text>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - 24/7 Technical Support</Text>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - Unlimited Events</Text>
                </View>
                <TouchableOpacity onPress={()=>props.onChangeScreen("RegisterPerso")} style={{backgroundColor: "#006bb3", alignSelf:"center", marginTop:20, justifyContent: "center", alignItems:"center", borderRadius: 20, height:40, width: "100%", paddingVertical: 10, paddingHorizontal: 20}}>
                    <Text style={{fontSize:16, color:"#fff"}}>Go Lite</Text>
                </TouchableOpacity> 
              </View>
              <View style={{marginHorizontal:20, alignSelf:"flex-end", width: 300, height:"100%", padding:5, borderRadius:20, backgroundColor:"#fff", shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 5}}>
                <View style={{width:"100%", flex:2, borderTopLeftRadius:20, borderTopRightRadius:20, backgroundColor:"#ed9600", justifyContent:"center", alignItems:"center"}}>
                  <Text style={{fontSize:32, color:"#fff", textAlign:"center"}}>Jumbo</Text> 
                </View>

                <View style={{flex: 5, width:"100%", justifyContent:"center", alignItems:"flex-start", paddingHorizontal:5, marginTop:20}}>
                <View style={{alignSelf:"center", alignContent:"center", flexDirection:"row", justifyContent:"flex-start"}}>
                      <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:72, color:"#ed9600", textAlign:"left", fontWeight:"bold"}}>99</Text>
                      </View>
                      <View style={{flexDirection:"column"}}>
                        <Text style={{fontSize:24, color:"#ed9600", textAlign:"left", fontWeight:"bold", marginTop:20}}>.99</Text>
                        <Text style={{fontSize:24, color:"#9c9c9c", textAlign:"left", fontWeight:"bold"}}>GhC</Text>
                      </View>
                  </View>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - billed annually</Text>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - 1 year full access</Text>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - 24/7 Technical Support</Text>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - Unlimited Events</Text>
                </View>
                <TouchableOpacity onPress={()=>props.onChangeScreen("RegisterPerso")} style={{backgroundColor: "#ed9600", alignSelf:"center", marginTop:20, justifyContent: "center", alignItems:"center", borderRadius: 20, height:40, width: "100%", paddingVertical: 10, paddingHorizontal: 20}}>
                    <Text style={{fontSize:16, color:"#fff"}}>Go Jumbo</Text>
                </TouchableOpacity> 
              </View>

            </View>
    
          </View>
        </View>
        
      </View> : <View style={{alignSelf:"center", width:"80%", flex:12, }}>
        <View style={{flexDirection:"column", height:"100%", width: "100%", flex:10, justifyContent:"center", alignSelf: "center"}}>
          <View style={{flex:4, alignContent:"center", marginTop:30}}>
            <Text style={{fontSize:24, color:"#006bb3", textAlign:"left"}}>Something for everyone!</Text>
            <View style={{width:200, height:1, backgroundColor: "#006bb3", marginVertical:10, alignSelf:"flex-start"}}></View>
            <Text style={{fontSize:16, color:"#858585", textAlign:"left"}}>We've got flexible and all-inclusive pricing plans for everyone</ Text>
            
            <View style={{width: "100%", height:"70%", flexDirection:"column", marginTop:100, justifyContent:"center", alignContent:"center", alignItems:"center", alignSelf:"center"}}>
              <View style={{alignSelf:"center", width: "100%", height:300, marginVertical:10, padding:5, borderRadius:20, backgroundColor:"#fff", shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 5}}>
                <View style={{width:"100%", flex:2, borderTopLeftRadius:20, borderTopRightRadius:20, backgroundColor:"#13ad25", justifyContent:"center", alignItems:"center"}}>
                  <Text style={{fontSize:32, color:"#fff", textAlign:"center"}}>Starter</Text> 
                </View>

                <View style={{flex: 5, width:"100%", justifyContent:"center", alignItems:"flex-start", paddingHorizontal:5, marginTop:20}}>
                  <View style={{alignSelf:"center", alignContent:"center", flexDirection:"row", justifyContent:"flex-start"}}>
                      <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:72, color:"#13ad25", textAlign:"left", fontWeight:"bold"}}>00</Text>
                      </View>
                      <View style={{flexDirection:"column"}}>
                        <Text style={{fontSize:24, color:"#13ad25", textAlign:"left", fontWeight:"bold", marginTop:20}}>.00</Text>
                        <Text style={{fontSize:24, color:"#9c9c9c", textAlign:"left", fontWeight:"bold"}}>GhC</Text>
                      </View>
                  </View>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - One-time benefit for all </Text>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - 1st month full access</Text>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - Regular Technical Support</Text>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - Unlimited Events</Text>
                </View>
                <TouchableOpacity onPress={()=>props.onChangeScreen("RegisterInst")} style={{backgroundColor: "#13ad25", alignSelf:"center", marginTop:20, justifyContent: "center", alignItems:"center", borderRadius: 20, height:40, width: "100%", paddingVertical: 10, paddingHorizontal: 20}}>
                    <Text style={{fontSize:16, color:"#fff"}}>Get started</Text>
                </TouchableOpacity> 
              </View>
              <View style={{alignSelf:"center", width: "100%", height:300, marginVertical:10, padding:5, borderRadius:20, backgroundColor:"#fff", shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 5}}>
                <View style={{width:"100%", flex:2, borderTopLeftRadius:20, borderTopRightRadius:20, backgroundColor:"#006bb3", justifyContent:"center", alignItems:"center"}}>
                  <Text style={{fontSize:32, color:"#fff", textAlign:"center"}}>Lite</Text> 
                </View>
                <View style={{flex: 5, width:"100%", justifyContent:"center", alignItems:"flex-start", paddingHorizontal:5, marginTop:20}}>
                <View style={{alignSelf:"center", alignContent:"center", flexDirection:"row", justifyContent:"flex-start"}}>
                      <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:72, color:"#006bb3", textAlign:"left", fontWeight:"bold"}}>9</Text>
                      </View>
                      <View style={{flexDirection:"column"}}>
                        <Text style={{fontSize:24, color:"#006bb3", textAlign:"left", fontWeight:"bold", marginTop:20}}>.99</Text>
                        <Text style={{fontSize:24, color:"#9c9c9c", textAlign:"left", fontWeight:"bold"}}>GhC</Text>
                      </View>
                  </View>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - billed monthly</Text>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - 1 month full access</Text>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - 24/7 Technical Support</Text>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - Unlimited Events</Text>
                </View>
                <TouchableOpacity onPress={()=>props.onChangeScreen("RegisterPerso")} style={{backgroundColor: "#006bb3", alignSelf:"center", marginTop:20, justifyContent: "center", alignItems:"center", borderRadius: 20, height:40, width: "100%", paddingVertical: 10, paddingHorizontal: 20}}>
                    <Text style={{fontSize:16, color:"#fff"}}>Go Lite</Text>
                </TouchableOpacity> 
              </View>
              <View style={{ alignSelf:"center", width: "100%", height:300, marginVertical:20, padding:5, borderRadius:20, backgroundColor:"#fff", shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 5}}>
                <View style={{width:"100%", flex:2, borderTopLeftRadius:20, borderTopRightRadius:20, backgroundColor:"#ed9600", justifyContent:"center", alignItems:"center"}}>
                  <Text style={{fontSize:32, color:"#fff", textAlign:"center"}}>Jumbo</Text> 
                </View>

                <View style={{flex: 5, width:"100%", justifyContent:"center", alignItems:"flex-start", paddingHorizontal:5, marginTop:20}}>
                <View style={{alignSelf:"center", alignContent:"center", flexDirection:"row", justifyContent:"flex-start"}}>
                      <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:72, color:"#ed9600", textAlign:"left", fontWeight:"bold"}}>99</Text>
                      </View>
                      <View style={{flexDirection:"column"}}>
                        <Text style={{fontSize:24, color:"#ed9600", textAlign:"left", fontWeight:"bold", marginTop:20}}>.99</Text>
                        <Text style={{fontSize:24, color:"#9c9c9c", textAlign:"left", fontWeight:"bold"}}>GhC</Text>
                      </View>
                  </View>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - billed annually</Text>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - 1 year full access</Text>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - 24/7 Technical Support</Text>
                  <Text style={{fontSize:16, color:"#595959", textAlign:"left"}}> - Unlimited Events</Text>
                </View>
                <TouchableOpacity onPress={()=>props.onChangeScreen("RegisterPerso")} style={{backgroundColor: "#ed9600", alignSelf:"center", marginTop:20, justifyContent: "center", alignItems:"center", borderRadius: 20, height:40, width: "100%", paddingVertical: 10, paddingHorizontal: 20}}>
                    <Text style={{fontSize:16, color:"#fff"}}>Go Jumbo</Text>
                </TouchableOpacity> 
              </View>

            </View>
          </View>
          
        </View>
        
      </View>}

      
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
