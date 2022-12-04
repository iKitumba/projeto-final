import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Title from "../../components/Title";

export default function Criar() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.goBack}>
            <Ionicons name="arrow-back" size={24} color="#61768D" />
            <Text style={styles.topOpctionName}>Criar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <Title text="O que pretendes criar?" />

        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionContainer}>
            <MaterialIcons name="arrow-right" size={24} color="#F35298" />
            <Text style={styles.optionText}>Curso</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <MaterialIcons name="arrow-right" size={24} color="#F35298" />
            <Text style={styles.optionText}>Disciplina</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <MaterialIcons name="arrow-right" size={24} color="#F35298" />
            <Text style={styles.optionText}>Professor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <MaterialIcons name="arrow-right" size={24} color="#F35298" />
            <Text style={styles.optionText}>Aluno</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <MaterialIcons name="arrow-right" size={24} color="#F35298" />
            <Text style={styles.optionText}>Comunicado</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <MaterialIcons name="arrow-right" size={24} color="#F35298" />
            <Text style={styles.optionText}>Turma</Text>
          </TouchableOpacity>
        </View>
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
  topOpctionName: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "300",
    color: "#61768D",
    textTransform: "uppercase",
  },

  optionsContainer: {
    marginHorizontal: 24,
  },

  optionContainer: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  optionText: {
    fontSize: 20,
    textTransform: "uppercase",
    color: "#61768D",
  },
});
