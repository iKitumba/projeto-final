import { View, Text, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import Title from "../../components/Title";
import TurmaCard from "../../components/TurmaCard";
import Professor from "../../components/Professor";

export default function AllProfessores({ navigation }) {
  function navigateToTurma() {
    navigation.navigate("Turma");
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profContainer}>
        {/* <View style={styles.profHeader}>
            <Text style={styles.thead}>Professor</Text>
            <Text style={[styles.thead, { textAlign: "right" }]}>
              Telefonar
            </Text>
          </View> */}
        <Title text="Todos os Professores" stylesContainer={{ marginTop: 12 }} />
        <View style={styles.profContent}>
          {[0, 1, 2, 3, 4, 5, 6, 8, 9, 10].map((prof) => (
            <Professor key={prof} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 24,
    backgroundColor: "#E7EBEF",
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  profContainer: {
    marginBottom: 70,
  },
  profHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  thead: {
    textTransform: "uppercase",
    fontSize: 16,
    color: "#61768D",
    flex: 1,
    paddingHorizontal: 4,
  },
});
