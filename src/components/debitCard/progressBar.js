import React, {useState, useRef, useEffect} from 'react';
import {View} from 'react-native';
import Text from '../../utils/text';
import styles from './progressStyle';
//reducer import
import {useSelector} from 'react-redux';
const debitStore = state => state.debit;

export const ProgressBar = () => {
  const [getPercentage, setPercentage] = useState('20%');
  const debit = useSelector(debitStore);

  useEffect(() => {
    if (debit.limit > 0) {
      let per = debit.current / debit.limit;
      setPercentage(per * 100 + '%');
    }
  }, [debit]);

  return (
    <View>
      <View style={styles.debitCardWrap}>
        <Text style={styles.debitCardText}>Debit card spending limit</Text>
        <View style={styles.flexRow}>
          <Text style={styles.spentText}>
            ${debit.current.toLocaleString('en-US')}
          </Text>
          <Text style={styles.remainingText}>
            {' '}
            | ${debit.limit.toLocaleString('en-US')}
          </Text>
        </View>
      </View>
      <View style={styles.progressBarContain}>
        <View style={styles.progressBarBackground} />
        <View
          style={[
            {
              width: getPercentage ? getPercentage : 0,
            },
            styles.progressBar,
          ]}
        />
      </View>
    </View>
  );
};
