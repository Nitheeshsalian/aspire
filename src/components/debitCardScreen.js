import * as React from 'react';
import { View, Image, ScrollView } from 'react-native';
import styles from './debitStyle';
import Text from '../utils/text'; //Custom text component where default font style have been set.
const logo = require('../assets/images/Logo.png');
const hideEye = require('../assets/images/Group.png');
const aspireLogo = require('../assets/images/AspireLogo.png');
const visaLogo = require('../assets/images/VisaLogo.png');

export function DebitCardScreen() {
  return (
    <React.Fragment>

      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>Debit Card</Text>
          <Image
            style={styles.logo}
            source={logo}
          />
        </View>
        <View style={{ marginTop: 24 }}>
          <Text styles={styles.availableText}>Available balance</Text>
          <View style={styles.balanceWrapper}>
            <View style={styles.balanceSqaure}>
              <Text style={styles.s$}>S$</Text>
            </View>
            <Text style={styles.balanceText}>3,000</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardWrapper}>
        <View style={styles.greenCard}>
          <View style={styles.aspireLogoRow}>
            <Image
              style={styles.aspireLogo}
              source={aspireLogo}
            />
          </View>
          <Text style={styles.nameText}>Mark Henry</Text>

          <Text style={styles.cardNumberText}>5 6 4 7    3 4 1 1    2 4 1 3    2 0 2 0</Text>

          <Text style={styles.validityText}>Thru: 12/20     CVV: 456</Text>
          <View style={styles.visaRow}>
            <Image
              style={styles.visaLogo}
              source={visaLogo}
            />
          </View>
        </View>
        <View style={styles.hideCardContent}>
          <Image
            style={styles.eyeImage}
            source={hideEye}
          />
          <Text style={styles.hideText}>Hide card number</Text>
        </View>
        <Text>
          nojfdmnvkjdfmvjkdfm
        </Text>
      </View>
    </React.Fragment>
  );
}
