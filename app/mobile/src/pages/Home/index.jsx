import { View, Text, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import Title from "../../components/Title";
import TurmaCard from "../../components/TurmaCard";
import Professor from "../../components/Professor";
import Search from "../../components/Search";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Search />

      <View style={styles.content}>
        <Title text="Suas turmas" />
        {[60, 100, 11, 22, 33, 44].map((turma) => (
          <TurmaCard
            key={turma}
            classe="11ª"
            curso="TI"
            num_alunos={24}
            periodo="MANHÃ"
            aproveitamento={turma}
          />
        ))}
        <Title text="Professores" />
        <View style={styles.profContainer}>
          <View style={styles.profHeader}>
            <Text style={styles.thead}>Professor</Text>
            <Text style={styles.thead}>Disciplina</Text>
            <Text style={styles.thead}>Telefone</Text>
          </View>
          <View style={styles.profContent}>
            {[0, 1, 2, 3, 4, 5, 6].map((prof) => (
              <Professor key={prof} />
            ))}
          </View>
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
