import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, AsyncStorage, Image, Linking, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';

var Parse = require('parse');
//Parse.setAsyncStorage(AsyncStorage);

Parse.initialize("mM14bNHZPl0CiOjwJlYTQh27b2Juz3vrvWVqKIY4", "kzmSQrTwI2YbKGXduWYImH5w8VeYdN4xGUauyhjc");
Parse.serverURL = 'https://parseapi.back4app.com';



export default function RegisterInst(props) {

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

  const getInstDetails =async()=>{

    const inst = Parse.Object.extend("institution");
    const instQuery = new Parse.Query(inst);
    instQuery.equalTo(covidteamMember.inst);
        
    await instQuery.first().then(
        function(object) {
          // the object was found
          setInst(object)
          
        },
        function(error) {
          console.log(error)
        });
}



 
let [name, setName] = useState("")
const nameInputHandler = (name) =>{
  setName(name)
}
let [email, setEmail] = useState("")
const emailInputHandler = (input) =>{
  setEmail(input)
}
let [lastName, setLastName] = useState("")
const lastNameInputHandler = (input) =>{
  setLastName(input)
}
let [password1, setpass1] = useState("")
const pass_1_InputHandler = (input) =>{
  setpass1(input)
}
let [password2, setpass2] = useState("")
const pass_2_InputHandler = (input) =>{
  setpass2(input)
}



let [instName, setInstName] = useState("")
const instNameInputHandler = (input) =>{
  setInstName(input)
}
let [instAddress, setInstAddress] = useState("")
const instAddressInputHandler = (input) =>{
  setInstAddress(input)
}
let [instPhone, setInstPhone] = useState("")
const instPhoneInputHandler = (input) =>{
  setInstPhone(input)
}
let [instCity, setInstCity] = useState("")
const instCityInputHandler = (input) =>{
  setInstCity(input)
}

function uniqueInstID() {
  
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

    
    

    let num = generate(4)
      let theName = instName.match(/\b(\w)/g);
    var acronym = theName.join(''); 
    let trimed = acronym.substring(0,5);
    let prefix = instCity.substring(0,2)+"_"
    
    return(prefix+trimed+"_"+num)
  }


  function uniqueUserID() {

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
    let str = instName
    let matches = str.match(/\b(\w)/g);
    var acronym = matches.join(''); 
    let trimed = acronym.substring(0,3);
    return(trimed+num)
  }



    
  let [registeredPerson, setRegisteredPerson] = useState(null)
  let [newAccStatus, setNewAccStatus] = useState(false); 

  const registerAdmin =async()=>{

    if(email===""){
      //please entername
      alert("Please enter Email address")
    
    }else if(name===""){
       //please Phone
       alert("please enter first name")
    }else if(lastName===""){
       //please Phone
       alert("please enter last name")
    }else if(password1===""){
       //please Phone
       alert("please enter password")
    }else if(password2===""){
       //please Phone
       alert("please confirm your password")
    }else if(password2!==password1){
       //please Phone
       alert("Your password entries dont match")
    }else if(name !=="" && lastName !=="" && email !== "" && password1 === password2 ){

      //check if email is new
      setIsLoading(true)
      const User = Parse.Object.extend("User");
      const user = new Parse.Query(User);
      user.equalTo("email", email);
          
      await user.find().then(
          function(foundAccount) {
          
            if(foundAccount.length === 0){
              setNewAccStatus(true)
              setIsLoading(false)
              //Email is new
            }else if(foundAccount.length >0){
              setNewAccStatus(false)
              alert("There is already a BeeHive acount with "+email)
              setIsLoading(false)
              //Email already Exist
            }
            
          
            
          },
          function(error) {
            alert(error)
            setIsLoading(false)
          });

      
      
     
  }
}


  const registerInstitute = () => {
   
    

    if(instName===""){
      //please entername
      alert("Please enter Institution Name")
    
    }else if(instAddress===""){
       //please Phone
       alert("please enter Institution Address")
    }else if(instCity===""){
       //please Phone
       alert("please enter city name")
    }else if(instPhone===""){
       //please Phone
       alert("please Institution Phone")
    }else if(newAccStatus=== true && instName!=="" && instAddress!=="" && instCity!=="" && instPhone!==""){
            setIsLoading(true)
            const Institution = Parse.Object.extend("institution");
            const institution = new Institution();

            institution.set("Name", instName);
            institution.set("address", instAddress);
            institution.set("phone", instPhone === ""? "n/a": instPhone);
            institution.set("city", instCity);
            institution.set("inst_id", uniqueInstID().toUpperCase());
            institution.set("country", "Ghana");
              
              var d = new Date();
              d.setMonth(d.getMonth() + 1);
                             
            institution.set("nextExpiry", d);

            //koliko
              
            institution.save().then((registeredInst) => {            
              setInst(registeredInst)  
                       
              // send User to DB
              const user = new Parse.User();
                user.set("username", name);
                user.set("password", password2);
                user.set("email", email);
                user.set("inst", registeredInst);
                user.set("acc_type", 2);
                user.set("personalID", uniqueUserID())
                user.set("lastName", lastName);
              
                   user.signUp().then(function(person){
                    setIsLoading(false)
                    setRegisteredPerson(person)
                    
                   }, function(error){
                    //setIsLoading(false)
                    alert("Error: " + error.code + " " + error.message);
                    setIsLoading(false)
                   });

                              
            }, (error) => {
              alert('Failed to Register your Institution Because: ' + error.message);
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
          <TouchableOpacity onPress={()=>{}} style={{marginHorizontal:40}}>
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
            <Text style={{fontSize:35, color:"#006bb3", textAlign:"right"}}>{!inst ? "Enroll new Institution":"Hurray! We move..!"}</Text>
            <View style={{width:200, height:1, backgroundColor: "#006bb3", marginVertical:20, alignSelf:"flex-end"}}></View>
            <Text style={{fontSize:18, color:"#858585", textAlign:"right"}}>{newAccStatus===false && !inst ?"We'll love to know you first!": newAccStatus===true && !inst ? ".. and now your Institution!": newAccStatus===true && inst ?"Your Institution is now on Beehive":""}</ Text>
            <View style={{width:"100%", height:"100%", justifyContent:"center"}}>
            {newAccStatus===false ? <View style={{width:"100%", height:"100%", marginTop:30}}>
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"90%", alignSelf:"flex-end", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
              <TextInput 
              style={{fontSize:12}}
              placeholder={"Email"}
              onChangeText={emailInputHandler}
              value={email}/>
            </View>
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"90%", alignSelf:"flex-end", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
              <TextInput 
              style={{fontSize:12}}
              placeholder={"First name"}
              onChangeText={nameInputHandler}
              value={name}/>
            </View>
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"90%", alignSelf:"flex-end", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
              <TextInput 
              style={{fontSize:12}}
              placeholder={"Last name"}
              onChangeText={lastNameInputHandler}
              value={lastName}/>
            </View>
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"90%", alignSelf:"flex-end", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
              <TextInput 
              style={{fontSize:12}}
              placeholder={"Password"}
              secureTextEntry={true}
              onChangeText={pass_1_InputHandler}
              value={password1}/>
            </View>
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"90%", alignSelf:"flex-end", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
              <TextInput 
              style={{fontSize:12}}
              placeholder={"Confirm Password"}
              onChangeText={pass_2_InputHandler}
              secureTextEntry={true}
              value={password2}/>
            </View>

            <TouchableOpacity onPress={isLoading===true?()=>{}:registerAdmin} style={{flexDirection:"row", backgroundColor: "#006bb3", alignSelf:"flex-end", marginTop:20, justifyContent: "center", alignItems:"center", borderRadius: 20, height:40, width: 300, paddingVertical: 10, paddingHorizontal: 20}}>
            <Text style={{fontSize:14, color:"#fff"}}>Let's go</Text>
            {isLoading === true ? <View style={{justifyContent:"center", alignItems:"center", marginHorizontal:10 }}><ActivityIndicator size="small" color="#fff" /></View> : <View></View>}
            </TouchableOpacity>
            </View>:<View></View>}

            {newAccStatus===true? <View View style={{width:"100%", height:"100%"}}>
            {newAccStatus===true && !inst ?<Text style={{fontSize:10, marginVertical: 10, alignSelf: "flex-end", textAlign:"right", color:"red"}}>Do not refresh your browser in this process!</Text>:<Text></Text>}
            <View style={{backgroundColor:"#fff", width:"90%", marginTop:10, alignSelf:"flex-end", alignContent:"center", alignItems: "center", height:80, borderRadius: 15,  borderWidth:1, borderColor:"#d1d1d1", padding:5, borderStyle:"dashed" }}>
              <View style={{backgroundColor:newAccStatus===false ? "#ffeded" : "#fffa6e", width:"100%", height: "100%", borderRadius: 15, padding:5 }}>
              {newAccStatus===false ? <View></View>: 
                <View style={{width:"100%", flexDirection:"row", justifyContent: "center"}}>
                  <View style={{flex:9, alignSelf:"flex-start"}}>
                    <Text style={{fontSize:12, marginVertical: 10, alignSelf: "center", textAlign:"center"}}>You are registered with {email} as Admin</Text>
                    <Text style={{fontSize:10, alignSelf: "center", textAlign:"center"}}>Verify your Email and assume Admin Status</Text>
                  </View>                   
                </View>}
                
              </View>

            </View>
            {!inst? <View></View>:
              <View style={{backgroundColor:"#fff", width:"90%", marginTop:10, alignSelf:"flex-end", alignContent:"center", alignItems: "center", height:100, borderRadius: 15,  borderWidth:1, borderColor:"#d1d1d1", padding:5, borderStyle:"dashed" }}>
              <View style={{backgroundColor:!inst ? "#ffeded" : "#6effaf", width:"100%", height: "100%", borderRadius: 15, padding:5 }}>
                {!inst ? <View></View>: 
                <View style={{width:"100%", flexDirection:"row", justifyContent: "center"}}>
                  <View style={{flex:9, alignSelf:"flex-start"}}>
                    <Text style={{fontSize:12, marginVertical: 5, alignSelf: "center", textAlign:"center"}}> {inst.get("Name")} is registered with ID:</Text>
                    <Text style={{fontSize:16, marginVertical: 5, alignSelf: "center", textAlign:"center"}}>{inst.get("inst_id")}</Text>
                    <Text style={{fontSize:10, marginVertical: 10, alignSelf: "center", textAlign:"center"}}>Institutional members can use this ID to register for your events</Text>
                  </View>
                                  
                </View> }

                
                
              </View>

            </View>
            }

          {!inst? <View></View>:<View  style={{marginTop:30}}>
            <Text style={{fontSize:12, marginVertical: 5, alignSelf: "flex-end", textAlign:"right"}}>You and your Event Ushers can now download BeeHive App from Playstore</Text>
            <TouchableOpacity style={{width:120, height:50, alignSelf: "flex-end", }} onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.basket.beeHive')}>
            <Image style={{width:"100%", height:"100%"}} source={require('./assets/img/google_play.png')} resizeMode="contain"/>
            </TouchableOpacity>
            
            </View>}

           



            {newAccStatus===true && !inst ?<View Style={{width:"100%", height: "100%"}}>
             <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"90%", alignSelf:"flex-end", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
             <TextInput 
             style={{fontSize:12}}
             placeholder={"Institution Name"}
             onChangeText={instNameInputHandler}
             value={instName}/>
           </View>
           <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"90%", alignSelf:"flex-end", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
             <TextInput 
             style={{fontSize:12}}
             placeholder={"institution Address"}
             onChangeText={instAddressInputHandler}
             value={instAddress}/>
           </View>
           <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"90%", alignSelf:"flex-end", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
             <TextInput 
             style={{fontSize:12}}
             placeholder={"City"}
             onChangeText={instCityInputHandler}
             value={instCity}/>
           </View>
           <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"90%", alignSelf:"flex-end", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
             <TextInput 
             style={{fontSize:12}}
             placeholder={"Institution Phone"}
             onChangeText={instPhoneInputHandler}
             value={instPhone}/>
           </View>
          
           <TouchableOpacity onPress={isLoading === true ? ()=>{} :registerInstitute} style={{flexDirection:"row", backgroundColor: "#006bb3", alignSelf:"flex-end", marginTop:20, justifyContent: "center", alignItems:"center", borderRadius: 20, height:40, width: 300, paddingVertical: 10, paddingHorizontal: 20}}>
           <Text style={{fontSize:14, color:"#fff"}}>Register Institution</Text>
           {isLoading === true ? <View style={{justifyContent:"center", alignItems:"center", marginHorizontal:10 }}><ActivityIndicator size="small" color="#fff" /></View> : <View></View>}
           </TouchableOpacity>
           <Text style={{fontSize:10, color:"#006bb3", textAlign:"right", marginTop:5 }}>By Registering, you accept the terms and conditions of BeeHive</ Text></View> : <View></View> }
       </View>:<View></View>}
            </View>


            
          </View>
           <View style={{flex:4, alignContent:"flex-start"}}>
            <Image style={{width:'100%', height:"100%"}} source={require('./assets/img/wall_2.png')} resizeMode="contain"/>
          </View>
        </View>
     


      </View>: <View style={{alignSelf:"center", width:"80%", flex:12, marginTop:10}}>
        <View style={{flexDirection:"column", width: "100%", flex:10, justifyContent:"center", alignSelf: "center"}}>
          <View style={{flex:!inst?4:2, justifyContent:"center", alignContent:"flex-start", width:"100%", marginTop:60}}>
            <Text style={{fontSize:22, color:"#006bb3", textAlign:"left"}}>{!inst ? "Register my Institution":"Hurray! We move..!"}</Text>
            <View style={{width:200, height:1, backgroundColor: "#006bb3", marginVertical:10, alignSelf:"flex-start"}}></View>
            <Text style={{fontSize:16, color:"#858585", textAlign:"left", marginTop:10}}>{newAccStatus===false && !inst ?"We'll love to know you first!": newAccStatus===true && !inst ? ".. and now your Institution!": newAccStatus===true && inst ?"Your Institution is now on Beehive":""}</ Text>
            <View style={{width:"100%", height:"100%", justifyContent:"center"}}>
            {newAccStatus===false ? <View style={{width:"100%", height:"100%", marginTop:20}}>
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"100%", alignSelf:"center", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
             <TextInput 
              style={{fontSize:12}}
              placeholder={"Email"}
              onChangeText={emailInputHandler}
              value={email}/>
            </View>
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"100%", alignSelf:"center", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
            <TextInput 
              style={{fontSize:12}}
              placeholder={"First name"}
              onChangeText={nameInputHandler}
              value={name}/>
            </View>
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"100%", alignSelf:"center", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
            <TextInput 
              style={{fontSize:12}}
              placeholder={"Last name"}
              onChangeText={lastNameInputHandler}
              value={lastName}/>
            </View>
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"100%", alignSelf:"center", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
            <TextInput 
              style={{fontSize:12}}
              placeholder={"Password"}
              secureTextEntry={true}
              onChangeText={pass_1_InputHandler}
              value={password1}/>
            </View>
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"100%", alignSelf:"center", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
            <TextInput 
              style={{fontSize:12}}
              placeholder={"Confirm Password"}
              onChangeText={pass_2_InputHandler}
              secureTextEntry={true}
              value={password2}/>
            </View>

            <TouchableOpacity onPress={isLoading?()=>{}:registerAdmin} style={{flexDirection:"row", backgroundColor: "#006bb3", alignSelf:"center", marginTop:10, justifyContent: "center", alignItems:"center", borderRadius: 20, height:40, width: "100%", paddingVertical: 10, paddingHorizontal: 20}}>
            <Text style={{fontSize:14, color:"#fff"}}>Let's go</Text>
            {isLoading === true ? <View style={{justifyContent:"center", alignItems:"center", marginHorizontal:10 }}><ActivityIndicator size="small" color="#fff" /></View> : <View></View>}
            </TouchableOpacity>
            </View>:<View></View>}

            {newAccStatus===true ? <View style={{width:"100%", height:"100%"}}>
            {newAccStatus===true && !inst ?<Text style={{fontSize:10, marginVertical: 10, alignSelf: "flex-start", textAlign:"left", color:"red"}}>Do not refresh your browser in this process!</Text>:<Text></Text>}
            <View style={{backgroundColor:"#fff", width:"100%", marginTop:10, alignSelf:"center", alignContent:"center", alignItems: "center", height:70, borderRadius: 15,  borderWidth:1, borderColor:"#d1d1d1", padding:5, borderStyle:"dashed" }}>
              <View style={{backgroundColor:newAccStatus===false ? "#ffeded" : "#fffa6e", width:"100%", height: "100%", borderRadius: 15, padding:5 }}>
                <View style={{width:"100%", flexDirection:"row", justifyContent: "center"}}>
                  <View style={{flex:9, alignSelf:"flex-start"}}>
                    <Text style={{fontSize:10, marginTop: 10, alignSelf: "center", textAlign:"center"}}>You are registered with {email} as Admin</Text>
                    <Text style={{fontSize:10, alignSelf: "center", textAlign:"center", marginVertical:10}}>Verify your Email and assume Admin status</Text>
                    </View>
                </View> 
              </View>
            </View>

            {!inst? <View></View>:
              <View style={{backgroundColor:"#fff", width:"100%", marginTop:10, alignSelf:"center", alignContent:"center", alignItems: "center", height:120, borderRadius: 15,  borderWidth:1, borderColor:"#d1d1d1", padding:5, borderStyle:"dashed" }}>
              <View style={{backgroundColor:!inst ? "#ffeded" : "#6effaf", width:"100%", height: "100%", borderRadius: 15, padding:5 }}>
                {!inst ? <View></View>: 
                <View style={{width:"100%", flexDirection:"row", justifyContent: "center"}}>
                  <View style={{flex:9, alignSelf:"center"}}>
                    <Text style={{fontSize:12, marginVertical: 5, alignSelf: "center", textAlign:"center"}}> {inst.get("Name")} is registered with ID:</Text>
                    <Text style={{fontSize:16, marginTop: 5, marginBottom:10, alignSelf: "center", textAlign:"center", fontWeight:"bold"}}>{inst.get("inst_id")}</Text>
                    <Text style={{fontSize:10, marginVertical: 5, alignSelf: "center", textAlign:"center"}}>Institutional members can use this ID to register for your events</Text>
                  </View>                  
                </View>}

                {!inst? <View></View>:<View  style={{marginTop:15}}>
                <Text style={{fontSize:12, marginVertical: 5, alignSelf: "center", textAlign:"center"}}>You and your Event Ushers can now download BeeHive App from Playstore</Text>
                <TouchableOpacity style={{width:100, height:40, alignSelf: "center", }} onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.basket.beeHive')}>
                <Image style={{width:"100%", height:"100%"}} source={require('./assets/img/google_play.png')} resizeMode="contain"/>
                </TouchableOpacity>
                
                </View>}
                
              </View>
            </View>
            }

            {inst ?<View></View>:<View style={{width:"100%", height:"100%"}}>
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"100%", alignSelf:"center", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
              <TextInput 
              style={{fontSize:12}}
              placeholder={"Institution Name"}
              onChangeText={instNameInputHandler}
              value={instName}/>
            </View>
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"100%", alignSelf:"center", justifyContent: 'center', paddingHorizontal: 20, marginVertical:5}}>
              <TextInput 
              style={{fontSize:12}}
              placeholder={"institution Address"}
              onChangeText={instAddressInputHandler}
              value={instAddress}/>
            </View>
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"100%", alignSelf:"center", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
              <TextInput 
              style={{fontSize:12}}
              placeholder={"City"}
              onChangeText={instCityInputHandler}
              value={instCity}/>
            </View>
            <View style={{backgroundColor:'#ebebeb', borderRadius: 20, height:40, width:"100%", alignSelf:"center", justifyContent: 'center', paddingHorizontal: 20, marginVertical:10}}>
              <TextInput 
              style={{fontSize:12}}
              placeholder={"Institution Phone"}
              onChangeText={instPhoneInputHandler}
              value={instPhone}/>
            </View>

            <TouchableOpacity onPress={isLoading===true?()=>{}: registerInstitute} style={{flexDirection:"row", backgroundColor: "#006bb3", alignSelf:"center", marginTop:10, justifyContent: "center", alignItems:"center", borderRadius: 20, height:40, width: "100%", paddingVertical: 10, paddingHorizontal: 20}}>
            <Text style={{fontSize:14, color:"#fff"}}>Register Institution</Text>
            {isLoading === true ? <View style={{justifyContent:"center", alignItems:"center", marginHorizontal:10 }}><ActivityIndicator size="small" color="#fff" /></View> : <View></View>}
            </TouchableOpacity>
            <Text style={{fontSize:9, color:"#ababab", textAlign:"center", marginTop:5 }}>By Registering, you accept the terms and conditions of BeeHive</ Text>
              
            </View>  }
            </View>
            
            :<View></View>
            }

            </View>
            
          </View>
           <View style={{flex:4, alignContent:"center", marginTop: newAccStatus===true? 250:230, justifyContent:"center"}}>
            <Image style={{width:'100%', height:"100%"}} source={require('./assets/img/wall_2.png')} resizeMode="contain"/>
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
