import "@expo/metro-runtime";

import { View, Text, TextInput, TouchableOpacity } from "react-native"

import { styles } from "./styles"
import { Participant } from "../components/Participant";

export function Home() {

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

        <Participant name = "Yuri Nascimento" onRemove={() => handleParticipantRemove("Yuri")}/>
      </View>
    )
}