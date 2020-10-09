import React,{Component} from 'react'
import {View,Text,TextInput,StyleSheet,
  TouchableOpacity,Alert,KeyboardAvoidingView,ScrollView,Modal} from 'react-native'
import firebase from 'firebase'
import db from '../config'
import ReadStoryScreen from './ReadScreen'
export default class LoginScreen extends Component{
    constructor(){
        super()
      this.state={
          emailID:"",
          Password:"",
         

      }
        
    }
    Login = (emailID,Password)=>{   
        firebase.auth().signInWithEmailAndPassword(emailID,Password)
        .then(()=>{
            this.props.navigation.navigate('TabNavigator')
            
        })
        .catch((error)=>{
            var errorcode = error.code;
            var msg = error.message;
            return Alert.alert(msg)           
            

        })

    }
    

 

    render(){
        return(
            <View style = {styles.container}>
              
          {
            this.showmodal()
          }
            <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text>Book Santa App</Text>
            </View>
            <View>
                <TextInput styles = {styles.inputbox}
                placeholder = "abc@yahoo.com"
                keyboardType = "email-address"
                onChangeText = {(text)=>{this.setState({emailID:text})}}
                />
                <TextInput styles = {styles.inputbox}
                placeholder = "enterpassword"
                secureTextEntry = {true}
                onChangeText =
                 {(text)=>{
                   this.setState({Password:text})}}
                />
                <TouchableOpacity style = {styles.button}
                 onPress = {()=>{this.Login(this.state.emailID,this.state.Password)}}>
                 <Text style = {styles.buttontext}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button}
                 onPress = {()=>this.setState({ isModalVisible:true})}>
                 <Text style = {styles.buttontext}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
  }
  
const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'green',
   alignItems: 'center',
   justifyContent: 'center'
 },
 profileContainer:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
 },
 title :{
   fontSize:65,
   fontWeight:'300',
   paddingBottom:30,
   color : 'green'
 },
 loginBox:{
   width: 300,
   height: 40,
   borderBottomWidth: 1.5,
   borderColor : '#ff8a65',
   fontSize: 20,
   margin:10,
   paddingLeft:10
 },
 KeyboardAvoidingView:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 },
 modalTitle :{
   justifyContent:'center',
   alignSelf:'center',
   fontSize:30,
   color:'#ff5722',
   margin:50
 },
 modalContainer:{
   flex:1,
   borderRadius:20,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:"#ffff",
   marginRight:30,
   marginLeft : 30,
   marginTop:80,
   marginBottom:80,
 },
 formTextInput:{
   width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'#ffab91',
   borderRadius:10,
   borderWidth:1,
   marginTop:20,
   padding:10
 },
 registerButton:{
   width:200,
   height:40,
   alignItems:'center',
   justifyContent:'center',
   borderWidth:1,
   borderRadius:10,
   marginTop:30
 },
 registerButtonText:{
   color:'#ff5722',
   fontSize:15,
   fontWeight:'bold'
 },
 cancelButton:{
   width:200,
   height:30,
   justifyContent:'center',
   alignItems:'center',
   marginTop:5,
 },

 button:{
   width:300,
   height:50,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:25,
   backgroundColor:"#ff9800",
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 8,
   },
   shadowOpacity: 0.30,
   shadowRadius: 10.32,
   elevation: 16,
   padding: 10
 },
 buttonText:{
   color:'#ffff',
   fontWeight:'200',
   fontSize:20
 }
})
