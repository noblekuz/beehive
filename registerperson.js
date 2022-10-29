import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, AsyncStorage, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';

var Parse = require('parse');
//Parse.setAsyncStorage(AsyncStorage);

Parse.initialize("mM14bNHZPl0CiOjwJlYTQh27b2Juz3vrvWVqKIY4", "kzmSQrTwI2YbKGXduWYImH5w8VeYdN4xGUauyhjc");
Parse.serverURL = 'https://parseapi.back4app.com';



export default function Home(props) {

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

  let [isLoading, setIsLoading] = useState(false);

 
  let [inst, setInst] = useState(null);
  let [officer, setOfficer] = useState()

  
  let [name, setName] = useState("")
  const nameInputHandler = (name) =>{
    setName(name)
  }
  let [phone, setPhone] = useState("")
  const phoneInputHandler = (input) =>{
    setPhone(input)
  }
  let [address, setAddress] = useState("")
  const addressInputHandler = (input) =>{
    setAddress(input)
  }
  let [instId, setInstId] = useState("")
  const instIdInputHandler = (input) =>{
    setInstId(input.toUpperCase())
  }

  function uniqueID() {

    function generate(n) {
      var add = 1, max = 12 - add;

      if ( n > max ) {
              return generate(max) + generate(n - max);
      }

      max        = Math.pow(10, n+add);
      var min    = max/10; 
      var number = Math.floor( Math.random() * (max - min + 1) ) + min;

      return ("" + number).substring(add); 
    }

    
    

    let num = generate(6)
    let str = !inst ? "Unknown" : inst.get("Name")
    let matches = str.match(/\b(\w)/g);
    var acronym = matches.join(''); 
    let trimed = acronym.substring(0,3);
    return(trimed+num)
  }


    
  let [registeredPerson, setRegisteredPerson] = useState(null)

  const findInst =async()=>{
    
    if(instId===""){
      //please entername
      alert("Enter Institutions")
    }else if(instId!==""){
      setIsLoading(true)
      const Institution = Parse.Object.extend("institution");
      const institution = new Parse.Query(Institution);
      institution.equalTo("inst_id", instId);
          
      await institution.first().then(
          function(object) {
          
            setInst(object)
            setIsLoading(false)
            //setOfficer(object);
            
          },
          function(error) {
            alert(error)
            setIsLoading(false)
          });
        
      }
    
  }



  const register =async()=>{
    
    if(name===""){
      //please entername
      alert("Please enter Name")
    
    }else if(address===""){
       //please Phone
       alert("please enter Phone")
    }else if(name !=="" && address !==""){
        setIsLoading(true)
        const AtendantsData = Parse.Object.extend("AtendantsData");
        const attendantsData = new AtendantsData();

        attendantsData.set("fullName", name);
        attendantsData.set("phoneCode", "233");
        attendantsData.set("address", address);
        attendantsData.set("phone", phone === ""? "n/a": phone);
        attendantsData.set("userId", uniqueID());
        attendantsData.set("inst", inst);
          
        attendantsData.save().then((registered) => {            
          setRegisteredPerson(registered)
          setName("")
          setAddress("")
          setPhone("")
          setIsLoading(false)

                          
        }, (error) => {
          alert('Failed to assign seat, because: ' + error.message);
          setIsLoading(false)
          });

    }

  }


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


      {isWide ? <View style={{alignSelf:"center", width:"80%", flex:12, marginTop:10}}>
        <View style={{flexDirection:"row", width: "100%", flex:10, justifyContent:"center", alignSelf: "center"}}>
          <View style={{flex:4, justifyContent:"center", alignContent:"flex-end", marginRight:20, width:"70%", marginTop:70}}>
            <Text style={{fontSize:35, color:"#006bb3", textAlign:"right"}}>Register as Attendant</Text>
            <View style={{width:200, height:1, backgroundColor: "#006bb3", marginVertical:20, alignSelf:"flex-end"}}></View>
            
            <Text style={{fontSize:18, color:"#858585", textAlign:"right"}}>{!inst ?"Let's find your institution first!":".. and a few details to go!"}</ Text>
            <Text style={{fontSize:12, color:"#f23b2e", textAlign:"right"}}>{!inst ?"Get your Institutional ID from your Administrator after your Institution is enrolled":""}</ Text>
            <View style={{width:"100%", height:"100%", justifyContent:"center"}}>
            {!inst ? <View style={{width:"100%", height:"100%", marginTop:30}}>
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"90%", alignSelf:"flex-end", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
              <TextInput 
              style={{fontSize:12}}
              placeholder={"Institution ID"}
              onChangeText={instIdInputHandler}
              value={instId}/>
            </View>

            <TouchableOpacity onPress={isLoading ===true ? ()=>{}:findInst} style={{ flexDirection:"row", backgroundColor: "#006bb3", alignSelf:"flex-end", marginTop:20, justifyContent: "center", alignItems:"center", borderRadius: 20, height:40, width: "90%", paddingVertical: 10, paddingHorizontal: 20}}>
            <Text style={{fontSize:14, color:"#fff"}}>Find my Institution</Text>
            {isLoading === true ? <View style={{justifyContent:"center", alignItems:"center", marginHorizontal:10 }}><ActivityIndicator size="small" color="#fff" /></View> : <View></View>}
            </TouchableOpacity>
            </View>:<View></View>}

            {inst ? <View View style={{width:"100%", height:"100%"}}>

            <View style={{backgroundColor:"#fff", width:"90%", marginTop:10, alignSelf:"flex-end", alignContent:"center", alignItems: "center", height:50, borderRadius: 15,  borderWidth:1, borderColor:"#d1d1d1", padding:5, borderStyle:"dashed" }}>
              <View style={{backgroundColor:!inst ? "#ffeded" : "#fffa6e", width:"100%", height: "100%", borderRadius: 15, padding:5 }}>
                {!inst ? <View></View>: 
                <View style={{width:"100%", flexDirection:"row", justifyContent: "center"}}>
                  <View style={{flex:9, alignSelf:"flex-start"}}><Text style={{fontSize:12, marginVertical: 10, alignSelf: "center", textAlign:"center"}}>{inst.get("Name")}, {inst.get("city")} </Text></View>
                  <View style={{flex:1, justifyContent: "center"}}>
                  <TouchableOpacity onPress={()=>setInst(null)} style={{alignSelf: "flex-end", width:20, height:20, backgroundColor:"#8a1a1a", borderRadius:10, justifyContent:"center"}}>
                    <Text style={{fontSize:12, marginVertical: 10, alignSelf: "center", textAlign:"center", color:"#fff"}}>-</Text>
                  </TouchableOpacity></View>
                  
                </View> }
                
              </View>

            </View>

            {!registeredPerson? <View></View>:
              <View style={{backgroundColor:"#fff", width:"90%", marginTop:10, alignSelf:"flex-end", alignContent:"center", alignItems: "center", height:100, borderRadius: 15,  borderWidth:1, borderColor:"#d1d1d1", padding:5, borderStyle:"dashed" }}>
              <View style={{backgroundColor:!inst ? "#ffeded" : "#6effaf", width:"100%", height: "100%", borderRadius: 15, padding:5 }}>
                {!registeredPerson ? <View></View>: 
                <View style={{width:"100%", flexDirection:"row", justifyContent: "center"}}>
                  <View style={{flex:9, alignSelf:"flex-start"}}>
                    <Text style={{fontSize:12, marginVertical: 5, alignSelf: "center", textAlign:"center"}}>{registeredPerson.get("fullName")} registered with ID:</Text>
                    <Text style={{fontSize:16, fontWeight:"bold", marginVertical: 5, alignSelf: "center", textAlign:"center"}}>{registeredPerson.get("userId").substring(3)}</Text>
                  </View>
                  <View style={{flex:1, justifyContent: "center"}}>
                  <TouchableOpacity onPress={()=>setRegisteredPerson(null)} style={{alignSelf: "flex-end", width:20, height:20, backgroundColor:"#8a1a1a", borderRadius:10, justifyContent:"center"}}>
                    <Text style={{fontSize:12, marginVertical: 10, alignSelf: "center", textAlign:"center", color:"#fff"}}>-</Text>
                  </TouchableOpacity></View>
                  
                </View> }
                
              </View>

            </View>
            }


            
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"90%", alignSelf:"flex-end", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
              <TextInput 
              style={{fontSize:12}}
              placeholder={"Full Name"}
              onChangeText={nameInputHandler}
              value={name}/>
            </View>
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"90%", alignSelf:"flex-end", justifyContent: 'center', paddingHorizontal: 20, marginVertical:5}}>
              <TextInput 
              style={{fontSize:12}}
              placeholder={"Phone Number"}
              onChangeText={phoneInputHandler}
              keyboardType="number-pad"
              value={phone}/>
            </View>
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"90%", alignSelf:"flex-end", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
              <TextInput 
              style={{fontSize:12}}
              placeholder={"Home Address"}
              onChangeText={addressInputHandler}
              value={address}/>
            </View>
  


            <TouchableOpacity onPress={isLoading===true ? ()=>{} : register} style={{flexDirection:"row", backgroundColor: "#006bb3", alignSelf:"flex-end", marginTop:20, justifyContent: "center", alignItems:"center", borderRadius: 20, height:40, width: "90%", paddingVertical: 10, paddingHorizontal: 20}}>
            <Text style={{fontSize:14, color:"#fff"}}>Register</Text>
            {isLoading === true ? <View style={{justifyContent:"center", alignItems:"center", marginHorizontal:10 }}><ActivityIndicator size="small" color="#fff" /></View> : <View></View>}
            </TouchableOpacity>
            <Text style={{fontSize:10, color:"#006bb3", textAlign:"right", marginTop:5 }}>By Registering, you accept the terms and conditions of BeeHive</ Text>

            </View>:<View></View>}
            </View>
            
          </View>
           <View style={{flex:4, alignContent:"flex-start"}}>
            <Image style={{width:'100%', height:"100%"}} source={require('./assets/img/wall_2.png')} resizeMode="contain"/>
          </View>
        </View>
        
      </View>: <View style={{alignSelf:"center", width:"80%", flex:12, marginTop:10}}>
        <View style={{flexDirection:"column", width: "100%", flex:10, justifyContent:"center", alignSelf: "center"}}>
          <View style={{flex:4, justifyContent:"center", alignContent:"flex-start", width:"100%", marginTop:60}}>
            <Text style={{fontSize:22, color:"#006bb3", textAlign:"left"}}>Register as Attendant</Text>
            <View style={{width:200, height:1, backgroundColor: "#006bb3", marginVertical:20, alignSelf:"flex-start"}}></View>
            <Text style={{fontSize:16, color:"#858585", textAlign:"left", marginTop:10}}>{!inst ?"Let's find your institution first!":".. and a few details to go!"}</ Text>
            <Text style={{fontSize:12, color:"#f23b2e", textAlign:"left"}}>{!inst ?"Get your Institutional ID from your Administrator after your Institution is enrolled":""}</ Text>
            <View style={{width:"100%", height:"100%", justifyContent:"center"}}>
            {!inst ? <View style={{width:"100%", height:"100%", marginTop:30}}>
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"100%", alignSelf:"center", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
              <TextInput 
              style={{fontSize:12}}
              placeholder={"Institution ID"}
              onChangeText={instIdInputHandler}
              value={instId}/>
            </View>

            <TouchableOpacity onPress={isLoading === true?()=>{}: findInst} style={{ flexDirection:"row", backgroundColor: "#006bb3", alignSelf:"center", marginTop:10, justifyContent: "center", alignItems:"center", borderRadius: 20, height:40, width: "100%", paddingVertical: 10, paddingHorizontal: 20}}>
            <Text style={{fontSize:14, color:"#fff"}}>Find my Institution</Text>
            {isLoading === true ? <View style={{justifyContent:"center", alignItems:"center", marginHorizontal:10 }}><ActivityIndicator size="small" color="#fff" /></View> : <View></View>}
            </TouchableOpacity>
            </View>:<View></View>}

            {inst ? <View View style={{width:"100%", height:"100%"}}>

            <View style={{backgroundColor:"#fff", width:"100%", marginTop:10, alignSelf:"center", alignContent:"center", alignItems: "center", height:50, borderRadius: 15,  borderWidth:1, borderColor:"#d1d1d1", padding:5, borderStyle:"dashed" }}>
              <View style={{backgroundColor:!inst ? "#ffeded" : "#fffa6e", width:"100%", height: "100%", borderRadius: 15, padding:5 }}>
                {!inst ? <View></View>: 
                <View style={{width:"100%", flexDirection:"row", justifyContent: "center"}}>
                  <View style={{flex:9, alignSelf:"flex-start"}}><Text style={{fontSize:12, marginVertical: 10, alignSelf: "center", textAlign:"center"}}>{inst.get("Name")}, {inst.get("city")} </Text></View>
                  <View style={{flex:1, justifyContent: "center"}}>
                  <TouchableOpacity onPress={()=>setInst(null)} style={{alignSelf: "flex-end", width:20, height:20, backgroundColor:"#8a1a1a", borderRadius:10, justifyContent:"center"}}>
                    <Text style={{fontSize:12, marginVertical: 10, alignSelf: "center", textAlign:"center", color:"#fff"}}>-</Text>
                  </TouchableOpacity></View>
                  
                </View> }
                
              </View>

            </View>

            {!registeredPerson? <View></View>:
              <View style={{backgroundColor:"#fff", width:"100%", marginTop:10, alignSelf:"center", alignContent:"center", alignItems: "center", height:70, borderRadius: 15,  borderWidth:1, borderColor:"#d1d1d1", padding:5, borderStyle:"dashed" }}>
              <View style={{backgroundColor:!inst ? "#ffeded" : "#6effaf", width:"100%", height: "100%", borderRadius: 15, padding:5 }}>
                {!registeredPerson ? <View></View>: 
                <View style={{width:"100%", flexDirection:"row", justifyContent: "center"}}>
                  <View style={{flex:9, alignSelf:"flex-start"}}>
                    <Text style={{fontSize:10, marginVertical: 5, alignSelf: "center", textAlign:"center"}}>{registeredPerson.get("fullName")} registered with ID:</Text>
                    <Text style={{fontSize:14, fontWeight:"bold", marginVertical: 5, alignSelf: "center", textAlign:"center"}}>{registeredPerson.get("userId").substring(3)}</Text>
                  </View>
                  <View style={{flex:1, justifyContent: "center"}}>
                  <TouchableOpacity onPress={()=>setRegisteredPerson(null)} style={{alignSelf: "flex-end", width:20, height:20, backgroundColor:"#8a1a1a", borderRadius:10, justifyContent:"center"}}>
                    <Text style={{fontSize:12, marginVertical: 10, alignSelf: "center", textAlign:"center", color:"#fff"}}>-</Text>
                  </TouchableOpacity></View>
                  
                </View> }
                
              </View>

            </View>
            }


            
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"100%", alignSelf:"center", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
              <TextInput 
              style={{fontSize:12}}
              placeholder={"Full Name"}
              onChangeText={nameInputHandler}
              value={name}/>
            </View>
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"100%", alignSelf:"center", justifyContent: 'center', paddingHorizontal: 20, marginVertical:5}}>
              <TextInput 
              style={{fontSize:12}}
              placeholder={"Phone Number"}
              onChangeText={phoneInputHandler}
              keyboardType="number-pad"
              value={phone}/>
            </View>
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"100%", alignSelf:"center", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
              <TextInput 
              style={{fontSize:12}}
              placeholder={"Home Address"}
              onChangeText={addressInputHandler}
              value={address}/>
            </View>
  


            <TouchableOpacity onPress={register} style={{flexDirection:"row", backgroundColor: "#006bb3", alignSelf:"center", marginTop:10, justifyContent: "center", alignItems:"center", borderRadius: 20, height:40, width: "100%", paddingVertical: 10, paddingHorizontal: 20}}>
            <Text style={{fontSize:14, color:"#fff"}}>Register</Text>
            {isLoading === true ? <View style={{justifyContent:"center", alignItems:"center", marginHorizontal:10 }}><ActivityIndicator size="small" color="#fff" /></View> : <View></View>}
            </TouchableOpacity>
            <Text style={{fontSize:9, color:"#ababab", textAlign:"center", marginTop:5 }}>By Registering, you accept the terms and conditions of BeeHive</ Text>

            </View>:<View></View>}
            </View>
            
          </View>
           <View style={{flex:!inst ?9:4, alignContent:"center", marginTop: registeredPerson? 250:150, justifyContent:"center"}}>
            <Image style={{width:'100%', height:"100%"}} source={require('./assets/img/wall_3.png')} resizeMode="contain"/>
          </View>
        </View>
        
      </View>}

   
      <View style={{flex:1, width: "100%", paddingHorizontal: 30, paddingVertical: 10, justifyContent: "center", alignItems:"center"}}>
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
