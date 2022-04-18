import * as React from 'react';
import { View, Text, Image } from 'react-native';

export default props => <Text {...props} style={[{fontFamily: 'Avenir Next', color: '#fff'}, props.style]}>{props.children}</Text>