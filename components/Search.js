import React, {Component} from 'react';
import {View, Text, StyleSheet, ProgressViewIOS} from 'react-native';
import {SearchBar, Icon, ListItem} from 'react-native-elements';
import Progress from './ProgressView';

const list = [
  {
    name: 'Better Now',
    image_uri: require('../resource/betterNow.png'),
    subtitle: 'Post Malone',
  },
  {
    name: 'Kimberly Evans',
    image_uri: require('../resource/kimberlyEvans.png'),
    subtitle: 'Calvin Harris,Dua Lipa',
  },
  {
    name: 'I like it',
    image_uri: require('../resource/iLikeIt.png'),
    subtitle: 'Cardi B,Bad Bunny,J Balvin',
  },
  {
    name: 'Girls like you',
    image_uri: require('../resource/girlLikeYou.png'),
    subtitle: 'Maroon 5, Cardi B',
  },
  {
    name: 'Back to you',
    image_uri: require('../resource/backToYou.png'),
    subtitle: 'Juice WRLD',
  },
  {
    name: 'Lucid Dreams',
    image_uri: require('../resource/lucidDream.png'),
    subtitle: 'Ariana Grande',
  },
  {
    name: 'No tear left to cry',
    image_uri: require('../resource/noTearLeftToCry.png'),
    subtitle: 'Drake',
  },
  {
    name: 'Nice For What',
    image_uri: require('../resource/niceForWhat.png'),
    subtitle: 'ABCD',
  },
  {
    name: 'Yong Blood',
    image_uri: require('../resource/kimberlyEvans.png'),
  },
];
class Search extends Component {
  state = {
    search: '',
  };
  updateSearch = search => {
    this.setState({search});
  };
  render() {
    const {search} = this.state;
    return (
      <View>
        <View
          style={{marginTop: 70, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: '85%'}}>
            <SearchBar
              placeholder={'Search that song!'}
              onChangeText={this.updateSearch}
              value={search}
              platform={'ios'}
              containerStyle={{
                backgroundColor: 'white',
                marginLeft: 15,
                width: '100%',
              }}
              inputContainerStyle={{
                width: '90%',
                borderRadius: 30,
                paddingLeft: 15,
                height: 45,
                backgroundColor: 'rgb(255,255,255)',
                shadowOffset: {width: 3, height: 2},
                shadowOpacity: 0.1,
                shadowRadius: 7,
              }}
              inputStyle={{marginLeft: 20, fontSize: 15}}
            />
          </View>
          <Icon
            name="spotify"
            type="font-awesome"
            size={50}
            iconStyle={{color: 'rgb(67,153,247)'}}
            containerStyle={{position: 'absolute', right: 20}}
          />
        </View>
        <View>
          <Text style={styles.subheading}>Recents</Text>
        </View>
        <View>
          {list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{
                source: l.image_uri,
                rounded: false,
              }}
              title={l.name}
              subtitle={l.subtitle}
              subtitleStyle={styles.subtitle}
              rightIcon={<Icon name="x" type="feather" size={15} />}
            />
          ))}
        </View>

        <Progress/>
      </View>
    );
  }
}
export default Search;
const styles = StyleSheet.create({
  subheading: {
    marginLeft: 20,
    fontSize: 25,
  },

  container: {
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 15,
    color: 'grey',
    marginTop: 5,
  },
  progress: {

  },
});
