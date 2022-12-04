import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

export default function Disciplina() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.goBack}>
            <Ionicons name="arrow-back" size={24} color="#61768D" />
            <Text style={styles.topOpctionName}>Disciplina</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Titulo</Text>
          <TextInput
            placeholder="Titulo da disciplina"
            placeholderTextColor="rgba(115, 134, 155, .4)"
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Diminuitivo</Text>
          <TextInput
            placeholder="Um nome curto para a disciplina"
            style={styles.input}
            placeholderTextColor="rgba(115, 134, 155, .4)"
          />
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Criar</Text>
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
