import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

export default function Comunicado() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.goBack}>
            <Ionicons name="arrow-back" size={24} color="#61768D" />
            <Text style={styles.topOpctionName}>Comunicado</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Assunto</Text>
          <TextInput
            placeholder="Assunto do comunicado"
            placeholderTextColor="rgba(115, 134, 155, .4)"
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Texto</Text>
          <TextInput
            placeholder="O que desejas comunicar?"
            style={[styles.input, { height: 118 }]}
            placeholderTextColor="rgba(115, 134, 155, .4)"
            multiline={true}
            numberOfLines={5}
          />
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Publicar</Text>
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
