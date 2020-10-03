import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput,KeyboardAvoidingView,Alert,ToastAndroid} from 'react-native';
import { Header } from 'react-native-elements';
import firebase from 'firebase'
import db from '../config'
const TextInputBox = (props) => {
    return (
      <TextInput {...props} 
      editable
      maxLength={700}
      />
    );
  }

export default class WriteScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    submitStory = ()=>{
        db.collection("stories").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
            //date: firebase.firestore.FieldValue.serverTimestamp().now().toDate()
        })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
    }
    render(){
        return(
            <KeyboardAvoidingView style = {styles.container} behavior="padding" enabled>
                <Header
                    centerComponent={{
                        text: 'Story hub jndfbxcnv',
                        style: { color: '#000000', fontSize: 30, fontWeight: "bold" },
                    }}
                />

                <View style={styles.inputView}>
                    
                     <TextInput style={styles.inputBx1} placeholder="Title"
                     onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                     />   
                </View>

                <View style={styles.inputView}>
                     <TextInput style={styles.inputBx1} placeholder="Author of the story"
                      onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    value={this.state.author}
                     />   
                </View>

                <View style={styles.inputView}>
                    <TextInputBox  style={styles.inputBox2} multiline numberOfLines={40} placeholder="Write Story"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    />
                </View>

                <View style={styles.container}>
                    <TouchableOpacity style={styles.button}
                    style={styles.submitButton}
                    onPress={()=>{
                        this.submitStory()
                        
                      }}>
                        <Text style={styles.buttonText}>SUBMIT</Text>
                        
                    </TouchableOpacity>
                </View>
           </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center'
    },
    inputView:{
        flexDirection:"row",
        margin:20
    },
    inputbx1:{
        width:200,
        height:40,
        borderWidth:1.5,
        borderRightWidth:0,
        fontSize:20
    },
    inputBox2:{
        width:200,
        height:40,
        borderWidth:1.5,
        borderRightWidth:0,
        fontSize:20,
    },
    button:{
        backgroundColor:'#f6416c',
        width:200,
        height:50,
       
    },
    buttonText:{
        fontSize:30,
        fontWeight:"bold"
    }
});