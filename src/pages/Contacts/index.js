import { Text, StyleSheet, View } from 'react-native'
import React from 'react'

export default function Contacts({navigation}) {
    return (
      <View style={{marginTop: '20%'}}>
        <View>
        <Text>Nome: Breno</Text>
        <Text>Telefone: (11) 11111-11111</Text>
        <Text
        onPress={
          () => navigation.navigate('Information',
            {nome:'Breno',
            telefone:'(11)11111-1111',
            endereco: 'Kanguru Street',
            numero: 8,
            email: 'brenolimanf@gmail.com',
            profissao: 'Programador'
          }
        )}
        >Information...</Text>
        </View>
        <View style={{marginTop: '20%'}}>
        <Text>Nome: Sanji</Text>
        <Text>Telefone: (33) 33333-3333</Text>
        <Text
         onPress={
           () => navigation.navigate('Information',
           {nome:'Sanji',
           telefone:'(33)33333-3333',
           endereco: 'All BLue',
           numero: 3,
            email: 'namiswaaaanlove<3@gmail.com',
            profissao: 'Cozinheiro do rei dos piratas'
            }
          )}
          >Information...</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({})
