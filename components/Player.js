import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Icon, Slider} from 'react-native-elements';

class Player extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Image
            source={require('../resource/player.png')}
            style={styles.image}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: 350,
            }}>
            <Icon name="pluscircleo" type={'antdesign'} />
            <Text style={styles.song}>All Mine</Text>
            <Icon name={'hearto'} type="antdesign" />
          </View>
          <Text style={styles.artist}>Kayne West</Text>
          <Slider
            style={{width: 350, marginTop: 30}}
            minimumTrackTintColor={'rgb(238, 117, 60)'}
            maximumTrackTintColor={'rgb(245,245,245)'}
            minimumValue={1}
            maximumValue={180}
            step={1}
            thumbTintColor={'rgb(238, 117, 60)'}
            thumbTouchSize={{width: 40, height: 40}}
            thumbStyle={{height: 7, width: 7}}
            trackStyle={{height: 2}}
          />
          <View
            style={{
              flexDirection: 'row',
              width: 350,
              justifyContent: 'space-between',
            }}>
            <Text style={styles.timer}>01:30</Text>
            <Text style={styles.timer}>03:00</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 350,
              marginTop: 40,
              alignItems: 'center',
            }}>
            <Icon name={'refresh-ccw'} type={'feather'} />
            <Icon name={'skip-back'} type={'feather'} size={40} />
            <Icon
              name={'play'}
              type={'evilicon'}
              color={'rgb(238, 117, 60)'}
              size={80}
            />
            <Icon name={'skip-forward'} type={'feather'} size={40} />
            <Icon name={'shuffle'} type={'feather'} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(238, 117, 60)',
    alignItems: 'center',
  },
  main: {
    backgroundColor: 'white',
    borderRadius: 27,
    alignItems: 'center',
    top: 80,
    paddingTop: 30,
    paddingHorizontal: 40,
    paddingBottom: 500,
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 10,
    marginBottom: 30,
  },
  song: {
    fontSize: 20,
  },
  plusIcon: {
    position: 'absolute',
    left: 20,
  },
  artist: {
    color: 'rgb(239,132,72)',
    paddingTop: 8,
    fontSize: 18,
  },
  timer: {
    fontSize: 10,
  },
});
export default Player;
