import {View} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap'}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Icons name="person" size={50} />
        <Icons name="search" size={50} />
        <Icons name="home" size={50} />
        <Icons name="settings" size={50} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Icons name="favorite" size={50} />
        <Icons name="check-box" size={50} />
        <Icons name="reply" size={50} />
        <Icons name="zoom-in" size={50} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Icons name="expand" size={50} />
        <Icons name="add-to-home-screen" size={50} />
        <Icons name="home-filled" size={50} />
        <Icons name="home-repair-service" size={50} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Icons name="home-work" size={50} />
        <Icons name="leave-bags-at-home" size={50} />
        <Icons name="airplanemode-on" size={50} />
        <Icons name="bedtime" size={50} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Icons name="brightness-high" size={50} />
        <Icons name="brunch-dining" size={50} />
        <Icons name="cake" size={50} />
        <Icons name="business-center" size={50} />
      </View>
    </View>
  );
};

export default App;
