import LottieView from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';

function Error (){
    return (
        <View style={{flex: 1}}> 
            <LottieView style={{flex: 1}} source={require('./../../assets/error.json')} autoPlay/>
        </View>
        )
    }

export default Error;