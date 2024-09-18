import "@expo/metro-runtime";

import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native"

import { styles } from "./styles"
import { Participant } from "../components/Participant";

export function Home() {

  const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Ana', 'Isa', 'Jack', 'Mayk', 'João'];
  // const participants = [];

  function handleParticipantAdd () {
    console.log("Você clicou no botão adicionar!");
  }

  function handleParticipantRemove (name: string) {
    console.log(`Você clicou em remover o participandte ${name}`)
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