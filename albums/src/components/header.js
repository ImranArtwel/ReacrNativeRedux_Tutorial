//import libraries
import React from 'react';
import { Text, View, Platform } from 'react-native';

//make a component
const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#00ffff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 20,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    ...Platform.select({
      ios: {
        shadowOpacity: 0.2
      },
      android: {
        elevation: 5
      }
    })
  },

  textStyle: {
    fontSize: 25
  }
};

//make component t be available to other parts of the app
export default Header;
