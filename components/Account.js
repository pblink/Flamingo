import React, {Component} from 'react';
import {Text, View, Image, ProgressViewIOS} from 'react-native';
import {Avatar, Button, ListItem, Icon} from 'react-native-elements';
const list = [
  {
    title: 'Music Quality',
  },
  {
    title: 'Help',
  },
];

class Account extends Component {
  render() {
    return (
      <View>
        <View style={{backgroundColor: '#fafafa', paddingBottom: 30}}>
          <View
            style={{
              marginTop: 50,
              backgroundColor: 'rgb(238,117,60)',
              borderRadius: 10,
              height: 150,
              paddingTop: 10,
              paddingLeft: 20,
              marginLeft: 20,
              marginRight: 20,
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>SoundCloud</Text>
            <Text style={{color: 'white', marginBottom: 5}}>Premium</Text>
            <Text style={{color: 'white', width: '55%'}}>
              Remove boring ads, create infinite playlists and so much more...
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
            }}>
            <View style={{marginLeft: 20}}>
              <Text style={{fontSize: 30}}>Kimberly Evans</Text>
              <Text style={{color: 'grey'}}>Edit profile</Text>
            </View>
            <Avatar
              rounded
              containerStyle={{marginRight: 20}}
              size="medium"
              source={{
                uri:
                  'https://i.pinimg.com/originals/23/9c/07/239c074db2eb6c7a5b810587ba0e1582.jpg',
              }}
              onPress={() => console.log('Works!')}
              icon={{name: 'user', type: 'font-awesome'}}
            />
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20,
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, marginLeft: 20}}>My SoundCloud</Text>
            <Button
              title="Free User"
              type="solid"
              containerStyle={{paddingVertical: 3}}
              buttonStyle={{
                backgroundColor: '#f57b42',
                paddingVertical: 4,
                width: 80,
                marginRight: 15,
              }}
              titleStyle={{fontSize: 10}}
            />
          </View>
          <View style={{paddingTop: 20, marginLeft: 10}}>
            {list.map((item, i) => (
              <ListItem key={i} title={item.title} topDivider chevron />
            ))}
          </View>
        </View>
        <View style={{paddingTop: 20, backgroundColor: 'rgb(250,250,250)'}}>
          <Text style={{fontSize: 20, marginLeft: 20}}>My Playlist </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 20,
              marginLeft: 15,
            }}>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{height: 120, width: 120, borderRadius: 5}}
                source={require('../resource/summerVibes.png')}
              />
              <Text>Summer Vibes</Text>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'gray', fontSize: 10}}>1.300.000</Text>
                <Text style={{color: 'gray', fontSize: 10}}>FOLLOWERS</Text>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{width: 120, height: 120, borderRadius: 5}}
                source={require('../resource/rapZone.png')}
              />
              <Text>Rap Zone</Text>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 10, color: 'gray'}}>650.000</Text>
                <Text style={{fontSize: 10, color: 'gray'}}>FOLLOWERS</Text>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{width: 120, height: 120, borderRadius: 5}}
                source={require('../resource/musicMix.png')}
              />
              <Text>Music Mix</Text>
              <View style={{alignItems: 'center'}}>
                <Text style={{color: 'gray', fontSize: 10}}>50.000</Text>
                <Text style={{color: 'gray', fontSize: 10}}>FOLLOWERS</Text>
              </View>
            </View>
          </View>
        </View>
        <ProgressViewIOS
          style={{marginTop: 30}}
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
            marginTop: 20,
          }}
        />
      </View>
    );
  }
}

export default Account;
