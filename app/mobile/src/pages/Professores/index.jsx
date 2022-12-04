import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import Title from "../../components/Title";
import Professor from "../../components/Professor";

export default function Professores() {
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
        </View>
        <View style={styles.profHeader}>
          <Text style={styles.thead}>Professor</Text>
          <Text style={styles.thead}>Disciplina</Text>
          <Text style={styles.thead}>Telefone</Text>
        </View>
      </View>

      <ScrollView>
        <Professor />
        <Professor />
        <Professor />
        <Professor />
        <Professor />
        <Professor />
        <Professor />
        <Professor />
        <Professor />
        <Professor />
        <Professor />
        <Professor />
        <Professor />
        <Professor />
        <Professor />
        <Professor />
        <Professor />
        <Professor />
        <Professor />
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
