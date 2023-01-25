import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TurmaCard({
  classe,
  curso,
  periodo,
  num_alunos,
  aproveitamento,
  onPress,
}) {
  return (
    <View
      style={[
        styles.turmaContainer,
        {
          borderColor:
            aproveitamento < 30
              ? "#FD1818"
              : aproveitamento < 60
              ? "#E0FD18"
              : "#18FD2E",
        },
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.turmaMetadata,
          {
            backgroundColor:
              aproveitamento < 30
                ? "#FD1818"
                : aproveitamento < 60
                ? "#E0FD18"
                : "#18FD2E",
          },
        ]}
      >
        <Text style={styles.classe}>{classe}</Text>
        <Text
          style={[
            styles.curso,
            {
              color:
                aproveitamento < 30
                  ? "#FFA5A5"
                  : aproveitamento < 60
                  ? "#EDFFA6"
                  : "#A5FFAE",
            },
          ]}
        >
          {curso}
        </Text>
      </TouchableOpacity>
      <View style={styles.turmaInfo}>
        <Text style={styles.periodo}>{periodo}</Text>
        <Text style={styles.num_alunos}>{num_alunos} alunos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  turmaContainer: {
    width: "100%",
    height: 104,
    backgroundColor: "#F6F7F8",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 12,
  },
  turmaMetadata: {
    width: 80,
    height: 80,
    backgroundColor: "#18FB2E",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.09)",
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: "space-between",
  },
  classe: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  curso: {
    textTransform: "uppercase",
    color: "#A5FFAE",
    fontSize: 14,
  },
  turmaInfo: {
    justifyContent: "space-around",
  },
  periodo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#61768D",
    textAlign: "right",
  },
  num_alunos: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#61768D",
    textAlign: "right",
  },
});
