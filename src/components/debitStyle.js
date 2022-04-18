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
    balanceText: { fontSize: 24, marginTop: 15, marginLeft: 10, fontWeight: 'bold' }
})

export default styles;