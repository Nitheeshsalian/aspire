import React, { useState, useRef } from 'react';
import { View, Image, Switch, Animated, PanResponder, TextInput, TouchableOpacity } from 'react-native';
import styles from './debitStyle';
import Text from '../../utils/text';
import store from '../../reducers/store';
import TYPES from '../../actions/types';
//import images
const logo = require('../../assets/images/Logo.png');
const meter = require('../../assets/images/Meter.png');

//Icons import
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';



export function SpendingLimit({ navigation }) {

    const [text, onChangeText] = React.useState("Useless Text");
    const [number, setNumber] = React.useState(null);

    const onChangeNumber = (value) => {
        setNumber(value)
    }

    const updateLimit = (value) => {
        store.dispatch({ type: TYPES.INCREMENT_LIMIT, payload: value })
    }
    return (
        <React.Fragment>
            <View style={styles.spendingContainer}>
                <View style={styles.headerWrapper2}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <FontAwesomeIcon icon={faAngleLeft} color="#fff" size={24} />
                    </TouchableOpacity>
                    <Image
                        style={styles.logo}
                        source={logo}
                    />
                </View>
                <View style={styles.spendingHeader}>
                    <Text style={styles.spendingLimitHeader}>Spending limit</Text>
                </View>
                <View style={styles.spendingWrapper}>
                    <View style={{ marginTop: 32 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={{ height: 24, width: 24 }}
                                source={meter}
                            />
                            <Text style={{ color: '#222222', paddingLeft: 12, fontSize: 14 }}>set a weekly debit card spending</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <View style={styles.balanceSqaure2}>
                                <Text style={styles.s$}>S$</Text>
                            </View>
                            <TextInput
                                style={styles.inputAmount}
                                placeholder="1222"
                                fontSize={24}
                                keyboardType="number-pad"
                                onChangeText={onChangeNumber}
                                value={number}
                            />
                        </View>
                        <Text style={styles.infoText}>
                            Here weekly means the last 7 days - not the calender week
                        </Text>
                        <View style={styles.amountGroup}>
                            <TouchableOpacity onPress={() => updateLimit(5000)} style={styles.amountText}>
                                <Text style={styles.amountTextStyle}>S$ 5,000</Text>
                            </TouchableOpacity>
                            <View style={styles.amountText}>
                                <Text style={styles.amountTextStyle}>S$ 10,000</Text>
                            </View>
                            <View style={styles.amountText}>
                                <Text style={styles.amountTextStyle}>S$ 20,000</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.saveButton} >
                        <Text style={styles.saveText}>Save</Text>
                    </View>

                </View>
            </View>
        </React.Fragment>
    );
}
