// import "@expo/metro-runtime"; // Ativa o Fast Refresh no navegador
import { useState } from "react";

import { View, Alert, Text, TextInput, TouchableOpacity, FlatList } from "react-native";

import { styles } from "./styles";
import { Participant } from "../components/Participant";

export function Home() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState<string>('');

  function handleParticipantAdd () {

    if (participantName.length == 0) return;

    if (participants.includes(participantName)) {
      return Alert.alert("Participante Existente", "Esse participante já está na lista");
    }

    setParticipants((prevParticipants) => [...prevParticipants, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove (name: string) {
    Alert.alert("Remover Participante", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants((prevParticipantes) => prevParticipantes.filter((participant) => participant !== name))
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
          Tekkno Party
        </Text>
  
        <Text style={styles.eventDate}>
          Sexta, 13 de Novembro de 2024.
        </Text>

        
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#6B6B6B"
            onChangeText={textInput => setParticipantName(textInput)}
            defaultValue={participantName}
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
                Ninguém inscrito no evento ainda. Adicione participantes à lista de inscritos.
              </Text>
            )}
          />
      </View>
    )
}