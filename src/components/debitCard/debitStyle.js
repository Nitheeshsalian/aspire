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
    cardWrapper: { position: 'absolute', top: -100, backgroundColor: '#fff', width: '100%', borderTopStartRadius: 20, borderTopRightRadius: 20, height: '200%' },
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
        fontSize: 22, fontWeight: 'bold', paddingLeft: 24, paddingTop: 24
    },
    cardNumberText: {
        fontSize: 14, fontWeight: '600', paddingLeft: 24, paddingTop: 24
    },
    validityText: {
        fontSize: 14, fontWeight: '600', paddingLeft: 24, paddingTop: 15
    },
    visaLogo: { height: 20, width: 60 },
    visaRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 24 },
    imageH12: {
        height: 32,
        width: 32
    },
    pl12: { paddingLeft: 12 },
    topText: { color: '#000', fontSize: 14, color: '#25345F' },
    bottomText: { color: '#000', fontSize: 13, color: '#222222', fontWeight: '200' },
    textBox: { flexDirection: 'row', marginTop: 32, justifyContent: 'space-between' },
    spendingLimitHeader: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    spendingContainer: { flex: 1,paddingTop: 50, backgroundColor: '#0C365A' },
    headerWrapper2: { marginLeft: 25, marginRight: 25, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'  },
    spendingWrapper:{ position: 'absolute', top: 153, backgroundColor: '#fff', width: '100%', borderTopStartRadius: 20, borderTopRightRadius: 20, height: '86%' ,justifyContent: 'space-between', paddingLeft: 24, paddingRight: 24},
    spendingHeader:{ marginTop: 24, paddingLeft:30 },
    balanceSqaure2: {
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 4,
        padddingBottom: 4,
        backgroundColor: '#01D167',
        borderRadius: 5,
        width: 40,
        height: 24,
        alignItems: 'center',
        marginTop: 10
    },
    amountText: {
        backgroundColor: '#effcf4',
        height: 38,
        width: 94, alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: '#20D167'
    },
    amountTextStyle: { color: '#01D167', fontWeight: '700' },
    inputContainer: {
        flexDirection: 'row', borderBottomColor: '#22222266', borderBottomWidth: 1, marginTop: 10,
        alignContent: 'center', height: 44, justifyContent: 'flex-start'
    },
    inputAmount:{ width: '100%', height: 44, marginLeft: 10, fontWeight: 'bold' },
    infoText:{ color: "#22222266", fontSize: 12, marginTop: 12 },
    amountGroup: {
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    saveButton: {
        backgroundColor: '#01D167',
        height: 56,
        width: 300,
        marginLeft: 20,
        borderRadius: 50,
        justifyContent:'center',
        alignItems: 'center',
        marginBottom: 20
    },
    saveText: { fontSize: 16, fontWeight: '700'},
    
})

export default styles;