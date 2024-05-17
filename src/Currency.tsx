import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>


const CurrencyButton = (props: CurrencyButtonProps) => {
    return (
        <View>
            <View style={styles.buttonContainer}>
                <Text style={styles.flag}>{props.flag}</Text>
                <Text style={styles.country}>{props.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        height: 100,
        textAlign: 'center',
    
    },
    flag: {
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    },
    country: {
        fontSize: 14,
        color: "#2d3436",

    }

})
export default CurrencyButton