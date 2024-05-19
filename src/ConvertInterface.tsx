import { SafeAreaView, StyleSheet, Text, View, StatusBar, FlatList, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import Snackbar from 'react-native-snackbar';
import { currencyByRupee } from './constant';
import CurrencyButton from './Currency';

export default function ConvertInterface() {
    const [inputvalue, setinputvalue] = useState('')
    const [resultvalue, setresultvalue] = useState('')
    const [targetCurrency, settargetCurrency] = useState('')

    const buttonPressed = (targetValue: Currency) => {
        if (!inputvalue) {
            return Snackbar.show({
                text: "Enter a value to convert",
                backgroundColor: "#EA7773",
                textColor: "#000000"
            })
        }

        const inputAmount = parseFloat(inputvalue)
        if (!isNaN(inputAmount)) {
            const convertedValue = inputAmount * targetValue.value
            const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
            setresultvalue(result)
            settargetCurrency(targetValue.name)
        } else {
            return Snackbar.show({
                text: "Not a valid number to convert",
                backgroundColor: "#F4BE2C",
                textColor: "#000000"
            })
        }
    }
    return (

        <>
            <StatusBar />
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.rupeesContainer}>
                        <Text style={styles.rupee}>₹</Text>
                        <TextInput
                            maxLength={14}
                            value={inputvalue}
                            clearButtonMode='always' //only for iOS
                            onChangeText={setinputvalue}
                            keyboardType='number-pad'
                            placeholder='Enter amount in Rupees'
                            style={styles.input}
                        />
                    </View>
                    {resultvalue && (
                        <Text style={styles.resultTxt} >
                            {resultvalue}
                        </Text>
                    )}
                </View>
                <View style={styles.bottomContainer}>
                    <FlatList
                        numColumns={3}
                        data={currencyByRupee}
                        keyExtractor={item => item.name}
                        renderItem={({ item }) => (
                            <Pressable
                                style={[
                                    styles.button,
                                    targetCurrency === item.name && styles.selected
                                ]}
                                onPress={() => buttonPressed(item)}
                            >
                                <CurrencyButton {...item} />
                            </Pressable>
                        )}
                    />
                </View>
            </View>

        </>

    )
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        fontSize: 15,
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'center',
        height: 55,
    
        backgroundColor: '#303030',
        borderRadius: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#515151',
        height: 600,
        margin: 20,
        justifyContent: 'center',
        verticalAlign: 'middle',
        marginVertical: 100,
        borderRadius: 50,
        padding: 20

    },
    topContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 50
    },
    resultTxt: {
        fontSize: 32,
        color: '#000000',
        fontWeight: '800',

    },
    rupee: {

        fontSize: 22,
        color: '#000000',
        fontWeight: '800',
    },
    rupeesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 150,

    },
    inputAmountField: {
        height: 40,
        width: 200,
        padding: 8,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
    },
    bottomContainer: {
        flex: 3,
        marginBottom: 50
    },
    button: {
        flex: 1,

        margin: 12,
        height: 80,

        borderRadius: 12,
        backgroundColor: '#fff',
        elevation: 2,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    selected: {
        backgroundColor: '#ffeaa7',
    },
});


