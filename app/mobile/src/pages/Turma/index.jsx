import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import Title from "../../components/Title";
import Aluno from "../../components/Aluno";

export default function Turma() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.goBack}>
            <Ionicons name="arrow-back" size={24} color="#61768D" />
            <Text style={styles.topCursoName}>FÁRMACIA</Text>
          </TouchableOpacity>
          <Text style={styles.topPeriodo}>Manhã</Text>
        </View>
        <View style={styles.bottomRow}>
          <Title
            text="10ª A"
            stylesContainer={{ marginTop: 24, marginBottom: 24 }}
          />
          <Text style={styles.totalAlunos}>Total de 120 alunos</Text>
        </View>
      </View>

      <ScrollView>
        <Aluno aproveitamento={30} />
        <Aluno aproveitamento={40} />
        <Aluno aproveitamento={10} />
        <Aluno aproveitamento={0} />
        <Aluno aproveitamento={30} />
        <Aluno aproveitamento={70} />
        <Aluno aproveitamento={90} />
        <Aluno aproveitamento={0} />
        <Aluno aproveitamento={100} />
        <Aluno aproveitamento={20} />
        <Aluno aproveitamento={3} />
        <Aluno aproveitamento={50} />
        <Aluno aproveitamento={30} />
        <Aluno aproveitamento={30} />
        <Aluno aproveitamento={60} />
        <Aluno aproveitamento={59} />
        <Aluno aproveitamento={18} />
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
  topCursoName: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "300",
    color: "#61768D",
    textTransform: "uppercase",
  },
  topPeriodo: {
    color: "#61768D",
    opacity: 0.4,
    fontSize: 12,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  totalAlunos: {
    color: "#61768D",
    opacity: 0.4,
    fontSize: 12,
  },
});
