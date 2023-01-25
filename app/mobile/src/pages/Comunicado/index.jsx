import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from "../../services/api";

export default function Comunicado({ navigation }) {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");

  function handleBack() {
    navigation.goBack();
  }

  async function handleSubmit() {
    const token = await AsyncStorage.getItem("@PAP:token");

    try {
      const { data } = await API.post(
        "comunicados",
        { titulo, conteudo },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log({ data });
      navigation.navigate("Comunicados");
    } catch (error) {}
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.goBack} onPress={handleBack}>
            <Ionicons name="arrow-back" size={24} color="#61768D" />
            <Text style={styles.topOpctionName}>Comunicado</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.form}>
        <KeyboardAvoidingView
          behavior="padding"
          enabled={Platform.OS === "ios"}
        >
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Assunto</Text>
            <TextInput
              placeholder="Assunto do comunicado"
              placeholderTextColor="#8e9aa866"
              style={styles.input}
              autoCapitalize="words"
              value={titulo}
              onChangeText={setTitulo}
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
              autoCapitalize="sentence"
              value={conteudo}
              onChangeText={setConteudo}
            />
          </View>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Publicar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#FD1818" }]}
              onPress={handleBack}
            >
              <Text style={styles.buttonText}>Descartar</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
    marginTop: 24,
    paddingBottom: 24,
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
