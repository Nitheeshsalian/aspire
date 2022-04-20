import React, {useState} from 'react';
import {View, Image, Switch} from 'react-native';
import Text from '../../utils/text';
import styles from './debitStyle';

// Common card component which takes image source, header text and body as Parameters
export function CommonCard({
  navigation,
  source,
  header,
  body,
  isSwitch = false,
}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    navigation.navigate('SpendingLimit');
  };

  return (
    <View style={styles.textBox}>
      <View style={styles.row}>
        <Image style={styles.imageH12} source={source} />
        <View style={styles.pl12}>
          <Text style={styles.topText}>{header}</Text>
          <Text style={styles.bottomText}>{body}</Text>
        </View>
      </View>
      {isSwitch ? (
        <Switch
          trackColor={{false: '#EEEEEE', true: '#01D167'}}
          style={{transform: [{scaleX: 0.6}, {scaleY: 0.6}], marginRight: -10}}
          thumbColor="#f4f3f4"
          ios_backgroundColor="#EEEEEE"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      ) : null}
    </View>
  );
}
