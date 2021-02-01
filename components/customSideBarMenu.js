import * as React from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';

export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={StyleSheet.drawerItemsContainer}>
                    <DrawerItems {...this.props }/> 
                </View>
                <View style={styles.logOutContainer}>
                    <TouchableOpacity style={styles.logOutButton}
                    onPress={()=>{
                        this.props.navigation.navigate('WelcomeScreen');
                        firebase.auth().signOut();
                    }}>
                        <Text style={styles.logOutText}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container : {
      flex:1
    },
    drawerItemsContainer:{
      flex:0.8
    },
    logOutContainer : {
      flex:0.2,
      justifyContent:'flex-end',
      paddingBottom:40
    },
    logOutButton : {
      height:40,
      width:'100%',
      justifyContent:'center',
      padding:10,
      paddingLeft: 20
    },
    logOutText:{
      fontSize: 15,
      fontWeight:'bold'
    }
  })