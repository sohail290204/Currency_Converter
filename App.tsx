import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Currency from './src/Currency'
import ConvertInterface from './src/ConvertInterface'

export default function App() {
  return (
    <View>
     <ScrollView>
      <SafeAreaView>
        <ConvertInterface></ConvertInterface>
      </SafeAreaView>
     </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})