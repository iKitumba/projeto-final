import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import Title from "../../components/Title";
import Aluno from "../../components/Aluno";
import { turmasAlunos } from "../../utils/turmaAlunos";

export default function Turma({ navigation }) {
  function navigateToBack() {
    navigation.goBack();
  }

  function handleSaberMais() {
    navigation.navigate("AlunoPerfil");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.goBack} onPress={navigateToBack}>
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

      <FlatList
        data={turmasAlunos}
        keyExtractor={(item, index) => String(item.aproveitamento)}
        renderItem={({ item, index }) => (
          <Aluno
            aproveitamento={item.aproveitamento}
            handleSaberMais={handleSaberMais}
            nomeAluno={item.nomeAluno}
          />
        )}
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
  totalAlunos: {
    color: "#61768D",
    opacity: 0.4,
    fontSize: 12,
  },
});
