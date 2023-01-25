import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

export default function AddNotas({ route, navigation }) {
  const { disciplina, nota1, nota2, nota3, trimestre } = route.params;
  const [notas, setNotas] = useState({
    nota1: Number.parseInt(nota1),
    nota2: Number.parseInt(nota2),
    nota3: Number.parseInt(nota3),
  });
  const media = Math.round((notas.nota1 + notas.nota2 + notas.nota3) / 3);
  console.log({ notas });
  function handleBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.goBack} onPress={handleBack}>
            <Ionicons name="arrow-back" size={24} color="#61768D" />
            <Text style={styles.topOpctionName}>{trimestre} trimestre</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Disciplina</Text>
          <TextInput
            placeholder="Titulo da disciplina"
            placeholderTextColor="rgba(115, 134, 155, .4)"
            style={styles.input}
            value={disciplina}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Notas</Text>
          <View style={styles.inputNotasContainer}>
            <TextInput
              placeholder="Nota 1"
              onChangeText={(text) =>
                setNotas({ ...notas, nota1: Number.parseInt(text) })
              }
              style={styles.input}
              placeholderTextColor="rgba(115, 134, 155, .4)"
              value={notas.nota1}
              keyboardType="decimal-pad"
              maxLength={2}
            />
            <TextInput
              placeholder="Nota 2"
              style={styles.input}
              placeholderTextColor="rgba(115, 134, 155, .4)"
              onChangeText={(text) =>
                setNotas({ ...notas, nota2: Number.parseInt(text) })
              }
              value={notas.nota2}
              keyboardType="decimal-pad"
              maxLength={2}
            />
            <TextInput
              placeholder="Nota 3"
              style={styles.input}
              placeholderTextColor="rgba(115, 134, 155, .4)"
              onChangeText={(text) =>
                setNotas({ ...notas, nota3: Number.parseInt(text) })
              }
              value={notas.nota3}
              keyboardType="decimal-pad"
              maxLength={2}
            />
            <TouchableOpacity style={styles.mediaContainer}>
              <Text style={styles.mediaText}>
                {isNaN(media) ? "..." : media}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#FD1818" }]}
          >
            <Text style={styles.buttonText}>Descartar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7EBEF",
    paddingTop: Constants.statusBarHeight + 24,
    paddingHorizontal: 24,
  },
  header: {},
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  goBack: {
    flexDirection: "row",
    alignItems: "center",
  },
  topOpctionName: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "300",
    color: "#61768D",
    textTransform: "uppercase",
  },

  form: {
    marginVertical: 24,
  },

  inputContainer: {
    marginBottom: 12,
  },
  label: {
    textTransform: "uppercase",
    fontSize: 10,
    color: "#73869B",
    marginBottom: 8,
  },
  input: {
    height: 46,
    borderWidth: 1,
    backgroundColor: "#F5FAFF",
    paddingHorizontal: 12,
    borderColor: "rgba(97, 118, 141, 0.4)",
    borderRadius: 4,
  },

  inputNotasContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  mediaContainer: {
    height: 46,
    width: 46,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "rgba(97, 118, 141, 0.4)",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F35298",
  },

  mediaText: {
    color: "#F5FAFF",
    fontSize: 16,
  },

  actions: {
    flexDirection: "row",
    marginTop: 46,
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    flex: 1,
    backgroundColor: "#097FFA",
    marginHorizontal: 6,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#E7EBEF",
    textTransform: "uppercase",
  },
});
