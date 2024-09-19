// import "@expo/metro-runtime";
import { useState } from "react";

import { View, Alert, Text, TextInput, TouchableOpacity, FlatList } from "react-native"

import { styles } from "./styles"
import { Participant } from "../components/Participant";

export function Home() {

  const [participants, setParticipants] = useState(['Allana']);

  function handleParticipantAdd () {
    if(participants.includes("Yuri")) {
      return Alert.alert("Participante Existente", "Esse participante já está na lista")
    }

    setParticipants((prevParticipants) => [...prevParticipants, 'Yuri'])
  }

  function handleParticipantRemove (name: string) {
    Alert.alert("Remover Participante", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  
    return (
      <View style={styles.container}>
        <Text style={styles.eventName}>
          Nome do Evento
        </Text>
  
        <Text style={styles.eventDate}>
          Sexta, 4 de Novembro de 2022.
        </Text>

        
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#6B6B6B"
          />

          <TouchableOpacity
            style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>

          <FlatList
            data={participants}
            keyExtractor={(item) => item}
            renderItem={({item}) => (
              <Participant
                key={item}
                name={item}
                onRemove={() => handleParticipantRemove(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <Text style={styles.listEmpytText}>
                Ninguém chegou no evento ainda? Adicione participantes à sua lista de presença.
              </Text>
            )}
          />
      </View>
    )
}