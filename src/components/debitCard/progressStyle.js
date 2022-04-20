import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  debitCardWrap: {flexDirection: 'row', justifyContent: 'space-between'},
  debitCardText: {color: '#222222', fontSize: 13, fontWeight: '500'},
  flexRow: {flexDirection: 'row'},
  spentText: {color: '#01D167', fontSize: 13, fontWeight: '500'},
  remainingText: {color: '#22222233', fontSize: 13, fontWeight: '500'},
  progressBarContain: {justifyContent: 'center', marginTop: 6},
  progressBarBackground: {
    width: '100%',
    height: 15,
    marginVertical: 10,
    borderRadius: 20,
    borderColor: '#cceddd',
    borderWidth: 1,
    backgroundColor: '#cceddd',
  },
  progressBar: {
    height: 15,
    marginVertical: 10,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: '#01D167',
    position: 'absolute',
    bottom: 20,
    borderStyle: 'solid',
    borderRightWidth: 15,
    borderTopWidth: 15,
    borderRightColor: 'transparent',
    borderTopColor: '#01D167',
    top: 0,
  },
});

export default styles;
