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

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const { handleLogin } = useContext(AuthContext);

  function navigateToLoginAluno() {
    navigation.navigate("LoginAluno");
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === "ios"}
      style={styles.container}
    >
      <Image source={logoImg} style={styles.logo} />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>USERNAME</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o seu nome de usuário"
          placeholderTextColor="rgba(115, 134, 155, .4)"
          autoCapitalize="none"
          value={username}
          onChangeText={setUsername}
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>SENHA</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="rgba(115, 134, 155, .4)"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
      </View>
      <TouchableOpacity onPress={navigateToLoginAluno}>
        <Text style={styles.microText}>Entrar como aluno</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => handleLogin({ username, senha })}
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
