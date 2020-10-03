import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, ToastAndroid, ScrollView } from 'react-native';
import {Header, SearchBar} from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import db from '../config'

export default class ReadStoryScreen extends React.Component {
    constructor(){
      super();
      this.state ={
        storylist:[],
        initialdata:[],
        search : ''
      }
    }
    componentDidMount(){
      this.recievestory()
    }
  
    updateSearch = search => {
      this.setState({ search });
    };
  
  
    recievestory=()=>{
      
        var storylist= []
        var stories = db.collection("stories")
          .get().then((querySnapshot)=> {
            querySnapshot.forEach((doc)=> {
                storylist.push(doc.data())
                console.log('stories',storylist)
            })
            this.setState({storylist})
          })
      
     
    };
  
  
    wordrefining(text) {
     
      const newData = this.state.storylist.filter((item)=> {
        
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({
        initialdata: newData,
        search: text,
      });
    }
  
      render(){
        return(
          <View style ={styles.container}>
           
                <Header 
                    backgroundColor = {'white'}
                    centerComponent = {{
                        text : 'BedTime Stories',
                        style : { color: 'green', fontSize: 20}
                    }}
                   
                />
                <View styles ={{height:20,width:'100%'}}>
              <SearchBar
              placeholder="Search Here"
              onChangeText={text => this.wordrefining(text)}
              onClear={text => this.wordrefining('')}
              value={this.state.search}
            />
          </View>
          
          <ScrollView>
              <View>
                {
                  this.state.search === "" ? 
                    this.state.storylist.map((item)=>(
            <View style={styles.itemContainer}>         
                   <Text>
                          Title : {item.title}
         </Text>
                         <Text>
               Author : {item.author}
                       </Text>
            </View>
                    ))
                  :
                  this.state.initialdata.map((item)=>(
                         <View style={{borderColor:'green',alignItems:'center',margin:30}}>
                   <Text>
                         Title : {item.title}
                         </Text>
                           <Text>
                            Author : {item.author}
     </Text>
              </View>
                  ))
                }
              </View>
              <FlatList
                data={this.state.search === "" ?  this.state.storylist: this.state.data}
                renderItem={({ item }) => (
                  <View style={styles.itemContainer}>
                    <Text>  Title: {item.title}</Text>
                    <Text>  Author : {item.author}</Text>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                /> 
          </ScrollView> 
          
          
         
        </View>  
      );      
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  item: {
    backgroundColor: 'green',
    padding:10,
    marginVertical: 8,
   
  },
  title: {
    fontSize: 32,
  },
  itemContainer: {
    height: 80,
    width:'100%',
    borderWidth: 2,
    borderColor: 'green',
    justifyContent:'center',
    alignSelf: 'center',
  }
});