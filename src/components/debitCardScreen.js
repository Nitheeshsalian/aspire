import * as React from 'react';
import { View, Image, ScrollView } from 'react-native';
import styles from './debitStyle';
import Text from '../utils/text'; //Custom text component where default font style have been set.
const logo = require('../assets/images/Logo.png');

export function DebitCardScreen() {
  return (
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
  );
}
