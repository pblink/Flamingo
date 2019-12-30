import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  ProgressViewIOS,
} from 'react-native';
import {Icon} from 'react-native-elements';

class Home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>Hots now</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.container}>
          <View style={{alignItems: 'center'}}>
            <Image
              style={styles.image}
              source={require('../resource/summerVibes.png')}
            />
            <Text>Summer Vibes</Text>
            <View style={styles.alignCenter}>
              <Text style={styles.subtitle}>1.300.000</Text>
              <Text style={styles.subtitle}>FOLLOWERS</Text>
            </View>
          </View>
          <View style={styles.alignCenter}>
            <Image
              style={styles.image}
              source={require('../resource/rapZone.png')}
            />
            <Text>Rap Zone</Text>
            <View style={styles.alignCenter}>
              <Text style={styles.subtitle}>650.000</Text>
              <Text style={styles.subtitle}>FOLLOWERS</Text>
            </View>
          </View>
          <View style={styles.alignCenter}>
            <Image
              style={styles.image}
              source={require('../resource/musicMix.png')}
            />
            <Text>Music Mix</Text>
            <View style={styles.alignCenter}>
              <Text style={styles.subtitle}>50.000</Text>
              <Text style={styles.subtitle}>FOLLOWERS</Text>
            </View>
          </View>
        </ScrollView>
        <Text style={styles.subheading}>Mood</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.container}>
          <View style={styles.alignCenter}>
            <Image
              source={require('../resource/showertime.png')}
              style={styles.image}
            />
            <Text>Summer Vibes</Text>
            <View style={styles.alignCenter}>
              <Text style={styles.subtitle}>1.300.000</Text>
              <Text style={styles.subtitle}>FOLLOWERS</Text>
            </View>
          </View>
          <View style={styles.alignCenter}>
            <Image
              source={require('../resource/oldschool.png')}
              style={styles.image}
            />
            <Text>Old School</Text>
            <View style={styles.alignCenter}>
              <Text style={styles.subtitle}>8.900.000</Text>
              <Text style={styles.subtitle}>FOLLOWERS</Text>
            </View>
          </View>
          <View style={styles.alignCenter}>
            <Image
              source={require('../resource/classic.png')}
              style={styles.image}
            />
            <Text>Summer Vibes</Text>
            <View style={styles.alignCenter}>
              <Text style={styles.subtitle}>1.300.000</Text>
              <Text style={styles.subtitle}>FOLLOWERS</Text>
            </View>
          </View>
        </ScrollView>
        <Text style={styles.subheading}>Popurlar Artists</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.container}>
          <View style={styles.alignCenter}>
            <Image
              source={require('../resource/ed.png')}
              style={styles.artist}
            />
            <Text>Ed Sheeran</Text>
          </View>
          <View style={styles.alignCenter}>
            <Image
              source={require('../resource/rita.png')}
              style={styles.artist}
            />
            <Text>Rita Ota</Text>
          </View>
          <View style={styles.alignCenter}>
            <Image
              source={require('../resource/em.png')}
              style={styles.artist}
            />
            <Text>Eminem</Text>
          </View>
          <View style={styles.alignCenter}>
            <Image
              source={require('../resource/nancy.jpg')}
              style={styles.artist}
            />
            <Text>Son Tung MTP</Text>
          </View>
        </ScrollView>
        <ProgressViewIOS
          progressTintColor={'orange'}
          progress={0.75}
          style={{marginTop: 20, marginBottom: 10}}
        />
        <View style={{flexDirection: 'row', justifyContent: 'center',alignItems:'center'}}>
          <View style={{alignItems:'center'}}>
            <Text>All mine</Text>
            <Text style={styles.orangeText}>Kayne West</Text>
          </View>
          <Icon type="antdesign" name="playcircleo" iconStyle={{color:'orange'}} containerStyle={{position:'absolute',right:10}} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  heading: {
    color: 'rgb(237,114,48)',
    fontSize: 30,
    marginTop: 50,
    marginLeft: 20,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  subtitle: {
    fontSize: 10,
    color: 'gray',
  },
  alignCenter: {
    alignItems: 'center',
  },
  container: {
    marginTop: 20,
    marginLeft: 10,
  },
  subheading: {
    fontSize: 25,
    marginLeft: 20,
  },
  artist: {
    width: 90,
    height: 90,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  orangeText: {
    color: 'orange',
  },
  icon: {
    color: 'orange',
    position: 'absolute',
    right: 20,
  },
});
export default Home;
