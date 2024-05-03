import { View, Text } from 'react-native'
import React from 'react'

export default function Information({route}) {
  if(!route.params){
    return (
      <View></View>
    )
  }
  return (
    <View style={{marginTop: '20%'}}>
      <Text>Nome: {route.params.nome}</Text>
      <Text>Telefone: {route.params.telefone}</Text>
      <Text>Endereço: {route.params.endereco}</Text>
      <Text>nº: {route.params.numero}</Text>
      <Text>email: {route.params.email}</Text>
      <Text>Profissão: {route.params.profissao}</Text>
    </View>
  )
}
