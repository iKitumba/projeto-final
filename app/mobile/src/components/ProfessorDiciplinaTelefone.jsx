import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfessorDisciplinaTelefone({
  nomeProfessor,
  disciplina,
}) {
  const nomeProfessorFormatted =
    nomeProfessor.length <= 9
      ? nomeProfessor
      : `${nomeProfessor.slice(0, 9)}...`;

  const disciplinaFormatted =
    disciplina.length <= 9 ? disciplina : `${disciplina.slice(0, 9)}...`;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.td}>
        <Text style={styles.tdText}>{nomeProfessorFormatted}</Text>
      </TouchableOpacity>
      <Text style={styles.tdText}>{disciplinaFormatted}</Text>
      <TouchableOpacity style={styles.td}>
        <Ionicons
          name="call-outline"
          size={24}
          style={{ alignSelf: "center" }}
          color="#097FFA"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    backgroundColor: "#F5FAFF",
    paddingVertical: 8,
    borderRadius: 4,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#61768d7f",
  },
  td: {
    flex: 1,
    paddingHorizontal: 12,
  },
  tdText: {
    fontSize: 16,
    color: "#61768D",
  },
});
