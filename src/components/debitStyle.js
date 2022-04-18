import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { flex: 1, paddingLeft: 25, paddingRight: 25, paddingTop: 50, backgroundColor: '#0C365A' },
    headerWrapper: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    logo: {
        width: 25,
        height: 25,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 20,
    },
    availableText: {
        fontSize: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row'
    },
    balanceSqaure: {
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 4,
        padddingBottom: 4,
        backgroundColor: '#01D167',
        borderRadius: 5,
        width: 40,
        height: 24,
        alignItems: 'center',
        marginTop: 15
    },
    balanceWrapper: { flexDirection: 'row', alignItems: 'center' },
    s$: { fontWeight: 'bold', fontSize: 12 },
    balanceText: { fontSize: 24, marginTop: 15, marginLeft: 10, fontWeight: 'bold' },
    cardWrapper: { position: 'absolute', top: 280, backgroundColor: '#fff', width: '100%', borderTopStartRadius: 20, borderTopRightRadius: 20, height: '100%' },
    hideCardContent: {
        backgroundColor: '#ffff', width: 150, borderTopStartRadius: 10,
        borderTopRightRadius: 10, height: 44, position: 'absolute',
        top: -80, right: 20, zIndex: 0, alignItems: 'center',
        flexDirection: 'row', justifyContent: 'center',
    },
    eyeImage: { height: 16, width: 16, marginBottom: 10 },
    hideText: { color: '#01D167', paddingLeft: 5, marginBottom: 10, fontFamily: 'Avenir Next', fontWeight: '600', fontSize: 12 },
    greenCard: { backgroundColor: '#01D167', margin: 20, borderRadius: 10, height: 220, marginTop: -50, zIndex: 1 },
    aspireLogoRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 24, paddingTop: 24 },
    aspireLogo: { height: 21, width: 74 },
    nameText: {
        fontSize: 22, fontWeight: 'bold', paddingLeft: 24
    },
    cardNumberText: {
        fontSize: 14, fontWeight: '600', paddingLeft: 24, paddingTop: 24
    },
    validityText: {
        fontSize: 14, fontWeight: '600', paddingLeft: 24, paddingTop: 24
    },
    visaLogo: { height: 20, width: 60 },
    visaRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 24, paddingTop: 10 },
})

export default styles;