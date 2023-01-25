import { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { AuthContext } from "../../contexts/AuthContext";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import logoImg from "../../assets/logo.png";

export default function LoginAluno({ navigation }) {
  const [nome_completo, setNome_completo] = useState("");
  const [bi, setBi] = useState("");
  const { handleLoginAluno } = useContext(AuthContext);

  function navigateToLogin() {
    navigation.navigate("Login");
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === "ios"}
      style={styles.container}
    >
      <Image source={logoImg} style={styles.logo} />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>NOME</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome completo do aluno"
          placeholderTextColor="rgba(115, 134, 155, .4)"
          autoCapitalize="words"
          value={nome_completo}
          onChangeText={setNome_completo}
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>BI</Text>
        <TextInput
          style={styles.input}
          placeholder="Bilhete de identidade"
          placeholderTextColor="rgba(115, 134, 155, .4)"
          autoCorrect={false}
          autoCapitalize="none"
          value={bi}
          onChangeText={setBi}
          maxLength={14}
        />
      </View>
      <TouchableOpacity onPress={navigateToLogin}>
        <Text style={styles.microText}>Entrar com usuário e senha</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => handleLoginAluno({ nome_completo, bi })}
      >
        <LinearGradient
          style={styles.gradient}
          end={{ x: 1, y: 1 }}
          colors={["#097FFA", "#F35298"]}
        >
          <Text style={styles.buttonText}>ENTRAR</Text>
          <Ionicons name="arrow-forward" size={24} color="#E7EBEF" />
        </LinearGradient>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E7EBEF",
  },

  logo: {
    marginBottom: 46,
  },

  inputContainer: {
    width: "100%",
    paddingHorizontal: 24,
  },

  label: {
    fontSize: 10,
    color: "#73869B",
    marginBottom: 8,
  },

  input: {
    width: "100%",
    height: 46,
    borderWidth: 1,
    borderColor: "#61768D",
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },

  microText: {
    fontSize: 16,
    color: "#73869B",
  },

  gradient: {
    width: "100%",
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    borderRadius: 4,
  },

  submitButton: {
    width: "100%",
    paddingHorizontal: 24,
    height: 46,
    marginTop: 46,
  },

  buttonText: {
    color: "#F5FAFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
