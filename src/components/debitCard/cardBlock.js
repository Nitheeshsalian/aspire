import React, {useState} from 'react';
import {View, Image, Switch, TouchableOpacity} from 'react-native';
import Text from '../../utils/text';
import styles from './debitStyle';

//import images
const hideEye = require('../../assets/images/Group.png');
const aspireLogo = require('../../assets/images/AspireLogo.png');
const visaLogo = require('../../assets/images/VisaLogo.png');
const remove_red_eye = require('../../assets/images/remove_red_eye.png');

export function CardBlock() {
  const [hideCard, setHideCard] = useState(false);

  const toggleCard = () => {
    setHideCard(!hideCard);
  };
  return (
    <React.Fragment>
      <View style={styles.greenCard}>
        <View style={styles.aspireLogoRow}>
          <Image style={styles.aspireLogo} source={aspireLogo} />
        </View>
        <Text style={styles.nameText}>Mark Henry</Text>
        <Text style={styles.cardNumberText}>
          {hideCard
            ? '5 6 4 7    3 4 1 1    2 4 1 3    2 0 2 0'
            : '* * * *    * * * *    * * * *    2 0 2 0'}
        </Text>
        <Text style={styles.validityText}>
          Thru: 12/20 CVV:{hideCard ? ' 4 5 6' : ' * * *'}
        </Text>
        <View style={styles.visaRow}>
          <Image style={styles.visaLogo} source={visaLogo} />
        </View>
      </View>
      <TouchableOpacity style={styles.hideCardContent} onPress={toggleCard}>
        <Image
          style={styles.eyeImage}
          source={hideCard ? hideEye : remove_red_eye}
        />
        <Text style={styles.hideText}>
          {hideCard ? 'Hide card number' : 'Show card number'}
        </Text>
      </TouchableOpacity>
    </React.Fragment>
  );
}
