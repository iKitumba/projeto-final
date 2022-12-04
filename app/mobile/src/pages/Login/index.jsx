import { useState } from "react";
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

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import logoImg from "../../assets/logo.png";

export default function Login() {
  const [isAnUser, setIsAnUser] = useState(true);
  const [fields, setFields] = useState({ first: "", second: "" });

  async function handleLogin() {
    console.log({ isAnUser, ...fields });
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
          placeholder={
            isAnUser ? "Digite o seu nome de usuário" : "Nome completo do aluno"
          }
          placeholderTextColor="rgba(115, 134, 155, .4)"
          autoCapitalize="words"
          value={fields.first}
          onChangeText={(text) => setFields({ ...fields, first: text })}
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{isAnUser ? "SENHA" : "BI"}</Text>
        <TextInput
          style={styles.input}
          placeholder={isAnUser ? "Digite sua senha" : "Bilhete de identidade"}
          placeholderTextColor="rgba(115, 134, 155, .4)"
          keyboardType="visible-password"
          secureTextEntry={true}
          textContentType="password"
          value={fields.second}
          onChangeText={(text) => setFields({ ...fields, second: text })}
        />
      </View>
      <TouchableOpacity onPress={() => setIsAnUser((prev) => !prev)}>
        <Text style={styles.microText}>
          {isAnUser ? "Entrar como aluno" : "Entrar com usuário e senha"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
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
