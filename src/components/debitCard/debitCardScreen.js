import React, { useState, useRef } from 'react';
import { View, Image, Switch, Animated, PanResponder } from 'react-native';
import styles from './debitStyle';
//Custom text component where default font style have been set.
import Text from '../../utils/text';
import { CommonCard } from './commonCard';
import { CardBlock } from './cardBlock';

//import images
const logo = require('../../assets/images/Logo.png');
const insightLogo = require('../../assets/images/insight.png');
const transfer = require('../../assets/images/Transfer.png');
const freeze = require('../../assets/images/Freeze.png');
const deactivated = require('../../assets/images/deactivated.png');


export function DebitCardScreen() {

  //pan responder to move debit card vertically
  //This function needs to be fixed to move only sepcified height 
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dy: pan.y },
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;


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
      <Animated.View
        style={{
          transform: [{ translateY: pan.y }],
          flex: 1
        }}
        {...panResponder.panHandlers}

      >
        <View style={styles.cardWrapper}>

          <CardBlock />
          {/* Card menu options */}
          <View style={{ paddingTop: 0, marginLeft: 32, marginRight: 32 }}>
            <CommonCard
              source={insightLogo}
              header="Top-up account"
              body="Deposit money to your account to use with card"
            />

            <CommonCard
              source={transfer}
              header="Weekly spending limit"
              body="You haven't set any spending limit on card"
              isSwitch={true}
            />

            <CommonCard
              source={freeze}
              header="Freeze Card"
              body="Your debit card is currently active"
              isSwitch={true}
            />
            <CommonCard
              source={insightLogo}
              header="Get a new card"
              body="This deactivates your current card"
            />
            <CommonCard
              source={deactivated}
              header="Deactivated card"
              body="Your previously deactivated cards"
            />
          </View>

        </View>
      </Animated.View>
    </React.Fragment>
  );
}
