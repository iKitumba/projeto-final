import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useContext } from "react";
import Constants from "expo-constants";

import { AuthContext } from "../../contexts/AuthContext";

export default function PreLogout({ navigation }) {
  const { handleLogout } = useContext(AuthContext);

  function handleBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titlePrelogout}>Tem a certeza que deseja sair?</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button} onPress={handleBack}>
          <Text style={styles.buttonText}>Não</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#FD1818" }]}
          onPress={handleLogout}
        >
          <Text style={styles.buttonText}>Sim</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7EBEF",
    paddingTop: Constants.statusBarHeight + 24,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    marginVertical: 24,
  },

  titlePrelogout: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#61768D",
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
