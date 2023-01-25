import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import Title from "../../components/Title";
import Professor from "../../components/Professor";
import ProfessorDisciplinaTelefone from "../../components/ProfessorDiciplinaTelefone";
import { nomeProfessorDisciplina } from "../../utils/nomeProfessorDisciplina";

export default function Professores({ navigation }) {
  function handleBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.goBack} onPress={handleBack}>
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
        </View>
        <View style={styles.profHeader}>
          <Text style={styles.thead}>Professor</Text>
          <Text style={styles.thead}>Disciplina</Text>
          <Text style={styles.thead}>Telefonar</Text>
        </View>
      </View>

      <FlatList
        data={nomeProfessorDisciplina}
        keyExtractor={(item) => String(item._id)}
        renderItem={({ item, index }) => {
          return (
            <ProfessorDisciplinaTelefone
              disciplina={item.disciplina}
              nomeProfessor={item.nomeProfessor}
            />
          );
        }}
      />
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
