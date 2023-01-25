import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useContext } from "react";
import Constants from "expo-constants";

import { AuthContext } from "../../contexts/AuthContext";
import Title from "../../components/Title";

export default function Settings({ navigation }) {
  const { handleLogout, usuario } = useContext(AuthContext);

  console.log(usuario);

  return (
    <ScrollView style={styles.container}>
      <Title text="Configurações" stylesContainer={{ marginTop: 12 }} />

      <Text style={styles.nome_completo}>{usuario.nome_completo}</Text>

      <Text style={styles.secao}>Pessoal</Text>
      <TouchableOpacity style={styles.options}>
        <Text style={styles.key}>Permissão</Text>
        <Text style={styles.value}>{usuario.tipo_usuario}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.options}>
        <Text style={styles.key}>Telefone</Text>
        <Text style={styles.value}>{usuario.telefone}</Text>
      </TouchableOpacity>

      <Text style={styles.secao}>Preferências</Text>

      <TouchableOpacity style={styles.sairButton} onPress={handleLogout}>
        <Text style={styles.sairButtonText}>Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7EBEF",
    paddingTop: Constants.statusBarHeight + 24,
    paddingHorizontal: 24,
  },

  form: {
    marginVertical: 24,
  },

  nome_completo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#61768D",
    marginTop: 24,
    marginBottom: 12,
  },

  secao: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#61768dc5",
    textTransform: "uppercase",
    marginTop: 32,
    marginBottom: 12,
  },

  key: {
    fontSize: 16,
    color: "#61768D",
    fontWeight: "bold",
  },

  value: {
    fontSize: 16,
    color: "#61768d76",
    fontWeight: "normal",
  },

  options: {
    width: "100%",
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  sairButton: {
    marginVertical: 48,
    width: "100%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },

  sairButtonText: {
    color: "#FD1818",
    fontSize: 16,
    fontWeight: "bold",
  },
});
