import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { styles } from "./styles"

export function Home() {

  function handleParticipantAdd () {
    console.log("Você clicou no botão adicionar!");
  }
  
    return (
      <View style={styles.container}>
        <Text style={styles.eventName}>
          Nome do Evento
        </Text>
  
        <Text style={styles.eventDate}>
          Sexta, 4 de Novembro de 2022.
        </Text>
        
        <TextInput
          style={styles.textInput}
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
    )
}