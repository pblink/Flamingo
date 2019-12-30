import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  ProgressViewIOS,
} from 'react-native';
import {ListItem, Icon, Button} from 'react-native-elements';
const list = [
  {
    title: 'Ranking',
    icon: 'trending-up',
  },
  {
    title: 'Weekly Featured',
    icon: 'tag',
  },
  {
    title: 'Podcast',
    icon: 'circle',
  },
  {title: 'Live', icon: 'mic'},
  {
    title: 'Concert',
    icon: 'rectangle',
  },
];
class Music extends Component {
  render() {
    return (
      <View>
        <View style={{backgroundColor: 'rgb(250,250,250)', paddingBottom: 20}}>
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
          <Text style={styles.subheading}>Recents</Text>
        </View>
        <ListItem
          title="Ranking"
          leftIcon={
            <Icon
              iconStyle={styles.icon}
              name={'trending-up'}
              type={'feather'}
            />
          }
          rightElement={
            <Button
              type={'solid'}
              title={'News'}
              buttonStyle={{
                backgroundColor: 'rgb(238,117,60)',
                borderRadius: 5,
                paddingBottom: 0,
                height: 23,
                paddingTop: 0,
              }}
              containerStyle={{marginTop: 3}}
              titleStyle={{fontSize: 10}}
            />
          }
          containerStyle={{paddingVertical: 20}}
          chevron
          bottomDivider
        />
        <ListItem
          title="Weekly Featured"
          bottomDivider
          chevron
          leftIcon={
            <Icon name={'instagram'} type={'zocial'} iconStyle={styles.icon} />
          }
          containerStyle={{paddingVertical: 20}}
        />
        <ListItem
          title="Podcast"
          bottomDivider
          chevron
          leftIcon={
            <Icon name={'podcast'} type={'zocial'} iconStyle={styles.icon} />
          }
          containerStyle={{paddingVertical: 20}}
        />
        <ListItem
          title="Live"
          bottomDivider
          chevron
          leftIcon={
            <Icon name={'mic'} type={'feather'} iconStyle={styles.icon} />
          }
          containerStyle={{paddingVertical: 20}}
        />
        <ListItem
          title="Concerts"
          chevron
          leftIcon={<Icon name={'directions'} iconStyle={styles.icon} />}
          containerStyle={{paddingVertical: 20}}
        />
        <View style={{backgroundColor: 'rgb(250,250,250)'}}>
          <Text style={styles.subheading}>Playlists</Text>
        </View>
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
        <View
          style={{
            borderBottomColor: 'rgb(230,230,230)',
            borderBottomWidth: 1,
            marginTop: 10,
          }}
        />
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
  subheading: {
    marginTop: 20,
    fontSize: 25,
    marginLeft: 20,
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
  },
  icon: {
    color: 'rgb(238,117,60)',
  },
});

export default Music;
