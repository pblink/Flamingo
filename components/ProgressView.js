import React, {Component} from 'react';
import {ProgressViewIOS, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

class Progress extends Component {
  render() {
    return (
      <View>
        <ProgressViewIOS
          progress={0.75}
          progressTintColor={'rgb(238,117,60)'}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text>All Mine</Text>
            <Text style={{color: 'rgb(238,117,60)'}}>Kayne West</Text>
          </View>
          <Icon
            name="play-circle"
            type="feather"
            color="rgb(238,117,60)"
            size={30}
            containerStyle={{position: 'absolute', right: 10}}
          />
        </View>
      </View>
    );
  }
}
export default Progress;
