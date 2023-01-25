import { View, Text, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import Title from "../../components/Title";
import TurmaCard from "../../components/TurmaCard";
import Professor from "../../components/Professor";
import Search from "../../components/Search";

export default function Home({ navigation }) {
  function navigateToTurma() {
    navigation.navigate("Turma");
  }

  return (
    <ScrollView style={styles.container}>
      {/* <Search /> */}

      <View style={styles.content}>
        <Title text="Turmas" stylesContainer={{ marginTop: 24 }} />
        {[60, 100, 11, 22, 33, 44].map((turma) => (
          <TurmaCard
            key={turma}
            classe="11ª"
            curso="TI"
            num_alunos={24}
            periodo="MANHÃ"
            aproveitamento={turma}
            onPress={navigateToTurma}
          />
        ))}
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
  content: {
    marginBottom: 116,
  },
  profContainer: {},
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
